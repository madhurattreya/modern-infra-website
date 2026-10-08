import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { 
  Maximize2, 
  RotateCcw, 
  Layers, 
  Eye, 
  EyeOff, 
  Box, 
  Compass, 
  Play, 
  Pause,
  CheckCircle2,
  Info
} from 'lucide-react';

interface ComponentSpec {
  id: string;
  name: string;
  code: string;
  standard: string;
  material: string;
  description: string;
  details: string[];
}

const COMPONENT_SPECS: Record<string, ComponentSpec> = {
  columns: {
    id: 'columns',
    name: 'Built-up Tapered Columns',
    code: 'SEC-COL-H50',
    standard: 'IS 800:2007 / AWS D1.1',
    material: 'High-Tensile Steel ASTM A572 Gr. 50 (345 MPa)',
    description: 'Variable cross-section I-shaped columns tapered from base to eave to match the exact bending moment envelope, reducing dead weight while maximizing lateral stiffness.',
    details: [
      'Web plate thickness: 8mm - 12mm Grade E350',
      'Flange plate thickness: 12mm - 25mm Grade E350',
      'Continuous double-sided submerged arc fillet welding',
      'Integrated heavy crane bracket cantilever at 7.0m level'
    ]
  },
  rafters: {
    id: 'rafters',
    name: 'Tapered Moment Rafters',
    code: 'RAF-MOM-90M',
    standard: 'MBMA 2010 / AISC 360-16',
    material: 'High-Tensile Steel ASTM A572 Gr. 50 (345 MPa)',
    description: 'Sloped primary roof framing with haunched knee and apex rigid moment connections, enabling unobstructed clear spans up to 90 meters without interior support columns.',
    details: [
      'Roof slope: Standard 1:10 (5.71°) for optimal rain runoff',
      'High-Strength Friction Grip (HSFG) Grade 8.8 / 10.9 bolts',
      'Fabricated with pre-camber to counter dead load deflection',
      'Ultrasonic flaw tested full-penetration butt-welded joints'
    ]
  },
  crane: {
    id: 'crane',
    name: 'Crane Runway Girder & EOT Crane',
    code: 'CRN-GIR-25MT',
    standard: 'IS 807 / IS 3177 / IS 800',
    material: 'Built-up High-Load Structural Steel + CR Rails',
    description: 'Heavy longitudinal runway girders supporting a 25 MT double-girder Electric Overhead Traveling (EOT) crane, designed for dynamic crane impact and surge loads.',
    details: [
      'Surge lateral load capacity: 10% of crane capacity',
      'Longitudinal crane impact factor: 25% dynamic margin',
      'Square solid steel rail 50x50mm with forged stops',
      'Double-girder yellow crane bridge with hoist trolley'
    ]
  },
  purlins: {
    id: 'purlins',
    name: 'Cold-Formed Z-Purlins & Girts',
    code: 'PUR-GALV-Z200',
    standard: 'IS 801 / ASTM A653 / AISI S100',
    material: 'Pre-Galvanized High-Yield Steel (450 MPa, 275 GSM)',
    description: 'Secondary cold-formed Z-profile purlins and C-section wall girts providing continuous nested multi-span lap connections to support roof and wall sheeting.',
    details: [
      'Profile depth: 200mm - 250mm, thickness: 2.0mm - 2.5mm',
      'Nested continuous 600mm overlapping laps over rafters',
      'Pre-punched bolt holes for rapid site assembly',
      'Galvanized 275 GSM zinc coating for 30+ year corrosion life'
    ]
  },
  foundation: {
    id: 'foundation',
    name: 'Foundation Pedestals & Anchor Bolts',
    code: 'FND-ANC-M36',
    standard: 'IS 456:2000 / IS 800:2007',
    material: 'Reinforced Concrete (M30) + High-Yield Anchor Bolts',
    description: 'Reinforced concrete foundation piers equipped with heavy base plates and embedded high-tensile anchor bolt cages engineered for seismic uplift and base shears.',
    details: [
      'High-tensile Grade 8.8 anchor bolts (M30 - M42)',
      'Pre-assembled template cages for millimeter installation accuracy',
      'Heavy 32mm - 50mm base plate with non-shrink epoxy grout bed',
      'Engineered for Zone IV / V severe earthquake ground motion'
    ]
  },
  cladding: {
    id: 'cladding',
    name: 'High-Tensile Galvalume Envelope',
    code: 'ENV-AZ150-05',
    standard: 'ASTM A792 / AS 1397 (AZ150)',
    material: '55% Al-Zn Coated High-Tensile Steel (550 MPa, 0.50mm BMT)',
    description: 'Corrugated roof and wall cladding envelope featuring anti-capillary side laps, high solar reflectance (SRI > 75), and natural polycarbonate daylight panels.',
    details: [
      'Tensile yield strength: 550 MPa (Grade G550)',
      'AZ150 Galvalume coating (150 g/m² aluminum-zinc alloy)',
      'Hex-head self-drilling fasteners with weatherproof EPDM washers',
      'Integrated translucent polycarbonate strips for natural day illumination'
    ]
  }
};

interface ThreePEBViewerProps {
  className?: string;
  height?: string;
  interactive?: boolean;
}

export const ThreePEBViewer: React.FC<ThreePEBViewerProps> = ({
  className = '',
  height = 'h-[440px] sm:h-[480px]',
  interactive = true
}) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const [selectedPart, setSelectedPart] = useState<string>('rafters');
  const [isExploded, setIsExploded] = useState<boolean>(false);
  const [isWireframe, setIsWireframe] = useState<boolean>(false);
  const [showCladding, setShowCladding] = useState<boolean>(false);
  const [autoRotate, setAutoRotate] = useState<boolean>(true);
  const [cameraView, setCameraView] = useState<'iso' | 'front' | 'side' | 'crane'>('iso');

  // Three.js internal references
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const controlsRef = useRef<OrbitControls | null>(null);
  const groupsRef = useRef<{
    columns: THREE.Group;
    rafters: THREE.Group;
    crane: THREE.Group;
    purlins: THREE.Group;
    foundation: THREE.Group;
    cladding: THREE.Group;
  } | null>(null);

  // Animation values for smooth interpolation
  const explodeFactorRef = useRef<number>(0);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // Dimensions
    const width = container.clientWidth || 600;
    const height = container.clientHeight || 450;

    // 1. Scene
    const scene = new THREE.Scene();
    sceneRef.current = scene;
    scene.background = new THREE.Color(0xF8FAFC); // Clean crisp industrial light background

    // 2. Camera
    const camera = new THREE.PerspectiveCamera(42, width / height, 0.1, 1000);
    camera.position.set(32, 22, 34);
    cameraRef.current = camera;

    // 3. Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'high-performance' });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    container.appendChild(renderer.domElement);

    // 4. Controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controlsRef.current = controls;
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.minDistance = 15;
    controls.maxDistance = 90;
    controls.maxPolarAngle = Math.PI / 2 - 0.05; // Don't go underground
    controls.target.set(0, 7, 0);

    // 5. Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.2);
    scene.add(ambientLight);

    const dirLight1 = new THREE.DirectionalLight(0xfffaed, 1.8);
    dirLight1.position.set(30, 45, 25);
    dirLight1.castShadow = true;
    dirLight1.shadow.mapSize.width = 1024;
    dirLight1.shadow.mapSize.height = 1024;
    dirLight1.shadow.bias = -0.0005;
    scene.add(dirLight1);

    const dirLight2 = new THREE.DirectionalLight(0xdbeafe, 0.9);
    dirLight2.position.set(-25, 30, -25);
    scene.add(dirLight2);

    const groundHemiLight = new THREE.HemisphereLight(0xffffff, 0xcbd5e1, 0.7);
    scene.add(groundHemiLight);

    // 6. Ground & Foundation Grid
    const gridHelper = new THREE.GridHelper(60, 30, 0xF59E0B, 0xCBD5E1);
    gridHelper.position.y = -0.01;
    scene.add(gridHelper);

    // Concrete Floor Slab
    const floorGeo = new THREE.PlaneGeometry(54, 46);
    const floorMat = new THREE.MeshStandardMaterial({
      color: 0xEEF2F6,
      roughness: 0.8,
      metalness: 0.1
    });
    const floor = new THREE.Mesh(floorGeo, floorMat);
    floor.rotation.x = -Math.PI / 2;
    floor.receiveShadow = true;
    scene.add(floor);

    // 7. Component Groups
    const groupColumns = new THREE.Group();
    const groupRafters = new THREE.Group();
    const groupCrane = new THREE.Group();
    const groupPurlins = new THREE.Group();
    const groupFoundation = new THREE.Group();
    const groupCladding = new THREE.Group();

    groupsRef.current = {
      columns: groupColumns,
      rafters: groupRafters,
      crane: groupCrane,
      purlins: groupPurlins,
      foundation: groupFoundation,
      cladding: groupCladding
    };

    scene.add(groupColumns);
    scene.add(groupRafters);
    scene.add(groupCrane);
    scene.add(groupPurlins);
    scene.add(groupFoundation);
    scene.add(groupCladding);

    // --- MATERIALS ---
    const steelMat = new THREE.MeshStandardMaterial({
      color: 0x334155, // Solid slate steel
      roughness: 0.45,
      metalness: 0.85
    });

    const highlightMat = new THREE.MeshStandardMaterial({
      color: 0xD97706, // Amber highlight
      roughness: 0.3,
      metalness: 0.6,
      emissive: 0xB45309,
      emissiveIntensity: 0.25
    });

    const yellowCraneMat = new THREE.MeshStandardMaterial({
      color: 0xF59E0B, // Safety yellow crane
      roughness: 0.4,
      metalness: 0.5
    });

    const concreteMat = new THREE.MeshStandardMaterial({
      color: 0x94A3B8,
      roughness: 0.9,
      metalness: 0.05
    });

    const purlinMat = new THREE.MeshStandardMaterial({
      color: 0x64748B,
      roughness: 0.5,
      metalness: 0.7
    });

    const claddingRoofMat = new THREE.MeshStandardMaterial({
      color: 0xE2E8F0,
      roughness: 0.6,
      metalness: 0.3,
      transparent: true,
      opacity: 0.75,
      side: THREE.DoubleSide
    });

    const claddingWallMat = new THREE.MeshStandardMaterial({
      color: 0xCBD5E1,
      roughness: 0.5,
      metalness: 0.4,
      transparent: true,
      opacity: 0.5,
      side: THREE.DoubleSide
    });

    const skylightMat = new THREE.MeshStandardMaterial({
      color: 0xBAE6FD,
      roughness: 0.2,
      metalness: 0.9,
      transparent: true,
      opacity: 0.6,
      side: THREE.DoubleSide
    });

    // --- GEOMETRY CONSTANTS ---
    const halfSpan = 13; // X = -13 to +13 (26m building width)
    const eaveHeight = 10; // Y = 10m
    const ridgeHeight = 14; // Y = 14m apex
    const bays = [-16, -8, 0, 8, 16]; // 5 portal frames along Z (32m length)

    // Helper: Build I-Beam
    function createIBeam(length: number, depth: number, width: number, flangeThick: number, webThick: number, material: THREE.Material): THREE.Group {
      const group = new THREE.Group();
      // Web
      const webGeo = new THREE.BoxGeometry(webThick, depth - flangeThick * 2, length);
      const web = new THREE.Mesh(webGeo, material);
      web.castShadow = true;
      group.add(web);
      // Top Flange
      const topFlangeGeo = new THREE.BoxGeometry(width, flangeThick, length);
      const topFlange = new THREE.Mesh(topFlangeGeo, material);
      topFlange.position.y = depth / 2 - flangeThick / 2;
      topFlange.castShadow = true;
      group.add(topFlange);
      // Bottom Flange
      const botFlange = new THREE.Mesh(topFlangeGeo, material);
      botFlange.position.y = -depth / 2 + flangeThick / 2;
      botFlange.castShadow = true;
      group.add(botFlange);
      return group;
    }

    // --- BUILD FOUNDATIONS & COLUMNS & RAFTERS ---
    bays.forEach((zPos) => {
      // 1. Concrete Foundation Pedestals & Anchor Plates (Left & Right)
      [-halfSpan, halfSpan].forEach((xPos) => {
        // Pedestal
        const pedGeo = new THREE.BoxGeometry(1.6, 0.8, 1.6);
        const ped = new THREE.Mesh(pedGeo, concreteMat);
        ped.position.set(xPos, 0.4, zPos);
        ped.castShadow = true;
        ped.receiveShadow = true;
        groupFoundation.add(ped);

        // Base Plate
        const plateGeo = new THREE.BoxGeometry(1.2, 0.12, 1.2);
        const plate = new THREE.Mesh(plateGeo, steelMat);
        plate.position.set(xPos, 0.86, zPos);
        plate.castShadow = true;
        groupFoundation.add(plate);

        // 4 Anchor Bolts
        [-0.4, 0.4].forEach(bx => {
          [-0.4, 0.4].forEach(bz => {
            const boltGeo = new THREE.CylinderGeometry(0.04, 0.04, 0.35, 8);
            const bolt = new THREE.Mesh(boltGeo, highlightMat);
            bolt.position.set(xPos + bx, 0.95, zPos + bz);
            groupFoundation.add(bolt);
          });
        });
      });

      // 2. Built-up Columns (Left & Right)
      // Left Column
      const colL = createIBeam(eaveHeight - 0.9, 0.8, 0.4, 0.06, 0.04, steelMat);
      colL.rotation.z = Math.PI / 2;
      colL.position.set(-halfSpan, (eaveHeight + 0.9) / 2, zPos);
      colL.castShadow = true;
      groupColumns.add(colL);

      // Left Column Crane Bracket (Y=7.2)
      const bracketLGeo = new THREE.BoxGeometry(0.8, 0.25, 0.6);
      const bracketL = new THREE.Mesh(bracketLGeo, steelMat);
      bracketL.position.set(-halfSpan + 0.5, 7.2, zPos);
      bracketL.castShadow = true;
      groupColumns.add(bracketL);

      // Right Column
      const colR = createIBeam(eaveHeight - 0.9, 0.8, 0.4, 0.06, 0.04, steelMat);
      colR.rotation.z = Math.PI / 2;
      colR.position.set(halfSpan, (eaveHeight + 0.9) / 2, zPos);
      colR.castShadow = true;
      groupColumns.add(colR);

      // Right Column Crane Bracket (Y=7.2)
      const bracketRGeo = new THREE.BoxGeometry(0.8, 0.25, 0.6);
      const bracketR = new THREE.Mesh(bracketRGeo, steelMat);
      bracketR.position.set(halfSpan - 0.5, 7.2, zPos);
      bracketR.castShadow = true;
      groupColumns.add(bracketR);

      // 3. Tapered Roof Rafters (Left slope & Right slope)
      const rafterLength = Math.sqrt(Math.pow(halfSpan, 2) + Math.pow(ridgeHeight - eaveHeight, 2));
      const rafterAngle = Math.atan2(ridgeHeight - eaveHeight, halfSpan);

      // Left Rafter
      const rafterL = createIBeam(rafterLength, 0.7, 0.35, 0.05, 0.03, steelMat);
      rafterL.rotation.y = Math.PI / 2;
      rafterL.rotation.x = -rafterAngle;
      rafterL.position.set(-halfSpan / 2, (eaveHeight + ridgeHeight) / 2, zPos);
      rafterL.castShadow = true;
      groupRafters.add(rafterL);

      // Right Rafter
      const rafterR = createIBeam(rafterLength, 0.7, 0.35, 0.05, 0.03, steelMat);
      rafterR.rotation.y = Math.PI / 2;
      rafterR.rotation.x = rafterAngle;
      rafterR.position.set(halfSpan / 2, (eaveHeight + ridgeHeight) / 2, zPos);
      rafterR.castShadow = true;
      groupRafters.add(rafterR);

      // Apex Haunch Gusset
      const apexPlateGeo = new THREE.BoxGeometry(0.5, 0.6, 0.4);
      const apexPlate = new THREE.Mesh(apexPlateGeo, highlightMat);
      apexPlate.position.set(0, ridgeHeight, zPos);
      groupRafters.add(apexPlate);
    });

    // 4. Longitudinal Secondary Framing: Roof Purlins
    const totalLength = 34; // Z = -17 to 17
    const purlinOffsets = [
      { x: -12.5, y: 10.2 },
      { x: -9.5, y: 11.1 },
      { x: -6.5, y: 12.0 },
      { x: -3.5, y: 12.9 },
      { x: -0.5, y: 13.8 },
      { x: 0.5, y: 13.8 },
      { x: 3.5, y: 12.9 },
      { x: 6.5, y: 12.0 },
      { x: 9.5, y: 11.1 },
      { x: 12.5, y: 10.2 }
    ];

    purlinOffsets.forEach(pos => {
      const purlinGeo = new THREE.BoxGeometry(0.12, 0.22, totalLength);
      const purlin = new THREE.Mesh(purlinGeo, purlinMat);
      purlin.position.set(pos.x, pos.y + 0.38, 0);
      purlin.castShadow = true;
      groupPurlins.add(purlin);
    });

    // Wall Girts (Sides)
    [3.5, 6.0, 8.5].forEach(yPos => {
      // Left Wall Girt
      const girtL = new THREE.Mesh(new THREE.BoxGeometry(0.15, 0.2, totalLength), purlinMat);
      girtL.position.set(-halfSpan - 0.25, yPos, 0);
      groupPurlins.add(girtL);

      // Right Wall Girt
      const girtR = new THREE.Mesh(new THREE.BoxGeometry(0.15, 0.2, totalLength), purlinMat);
      girtR.position.set(halfSpan + 0.25, yPos, 0);
      groupPurlins.add(girtR);
    });

    // 5. Crane Runway Beams & Overhead EOT Crane
    // Left Runway Beam
    const craneRunwayL = createIBeam(totalLength, 0.6, 0.35, 0.05, 0.03, steelMat);
    craneRunwayL.position.set(-halfSpan + 0.6, 7.6, 0);
    groupCrane.add(craneRunwayL);

    // Left Rail
    const railL = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.08, totalLength), highlightMat);
    railL.position.set(-halfSpan + 0.6, 7.95, 0);
    groupCrane.add(railL);

    // Right Runway Beam
    const craneRunwayR = createIBeam(totalLength, 0.6, 0.35, 0.05, 0.03, steelMat);
    craneRunwayR.position.set(halfSpan - 0.6, 7.6, 0);
    groupCrane.add(craneRunwayR);

    // Right Rail
    const railR = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.08, totalLength), highlightMat);
    railR.position.set(halfSpan - 0.6, 7.95, 0);
    groupCrane.add(railR);

    // Overhead Crane Bridge (Yellow Double-Girder) at Z=0
    const craneSpan = (halfSpan - 0.6) * 2;
    const girderGeo = new THREE.BoxGeometry(craneSpan, 0.8, 0.35);
    const craneGirder1 = new THREE.Mesh(girderGeo, yellowCraneMat);
    craneGirder1.position.set(0, 8.5, -0.6);
    craneGirder1.castShadow = true;
    groupCrane.add(craneGirder1);

    const craneGirder2 = new THREE.Mesh(girderGeo, yellowCraneMat);
    craneGirder2.position.set(0, 8.5, 0.6);
    craneGirder2.castShadow = true;
    groupCrane.add(craneGirder2);

    // Crane Hoist Trolley
    const trolleyGeo = new THREE.BoxGeometry(1.4, 0.5, 1.8);
    const trolley = new THREE.Mesh(trolleyGeo, steelMat);
    trolley.position.set(2.5, 9.15, 0);
    groupCrane.add(trolley);

    // Crane Hook Cable
    const cableGeo = new THREE.CylinderGeometry(0.03, 0.03, 3.2, 6);
    const cable = new THREE.Mesh(cableGeo, highlightMat);
    cable.position.set(2.5, 7.5, 0);
    groupCrane.add(cable);

    // Hook
    const hookGeo = new THREE.TorusGeometry(0.25, 0.06, 8, 16, Math.PI * 1.5);
    const hook = new THREE.Mesh(hookGeo, highlightMat);
    hook.position.set(2.5, 5.8, 0);
    hook.rotation.z = Math.PI / 4;
    groupCrane.add(hook);

    // End End-Trucks
    [-halfSpan + 0.6, halfSpan - 0.6].forEach(ex => {
      const truck = new THREE.Mesh(new THREE.BoxGeometry(0.6, 0.4, 2.2), steelMat);
      truck.position.set(ex, 8.2, 0);
      groupCrane.add(truck);
    });

    // 6. Cross-Bracing Rods (End Bays: Z=-16 to -8, Z=8 to 16)
    const braceMat = new THREE.LineBasicMaterial({ color: 0xF59E0B, linewidth: 2 });
    [
      { z1: -16, z2: -8 },
      { z1: 8, z2: 16 }
    ].forEach(range => {
      // Left Wall Bracing
      const ptsL1 = [new THREE.Vector3(-halfSpan, 1, range.z1), new THREE.Vector3(-halfSpan, eaveHeight, range.z2)];
      const lineL1 = new THREE.Line(new THREE.BufferGeometry().setFromPoints(ptsL1), braceMat);
      groupColumns.add(lineL1);

      const ptsL2 = [new THREE.Vector3(-halfSpan, eaveHeight, range.z1), new THREE.Vector3(-halfSpan, 1, range.z2)];
      const lineL2 = new THREE.Line(new THREE.BufferGeometry().setFromPoints(ptsL2), braceMat);
      groupColumns.add(lineL2);

      // Right Wall Bracing
      const ptsR1 = [new THREE.Vector3(halfSpan, 1, range.z1), new THREE.Vector3(halfSpan, eaveHeight, range.z2)];
      const lineR1 = new THREE.Line(new THREE.BufferGeometry().setFromPoints(ptsR1), braceMat);
      groupColumns.add(lineR1);

      const ptsR2 = [new THREE.Vector3(halfSpan, eaveHeight, range.z1), new THREE.Vector3(halfSpan, 1, range.z2)];
      const lineR2 = new THREE.Line(new THREE.BufferGeometry().setFromPoints(ptsR2), braceMat);
      groupColumns.add(lineR2);
    });

    // 7. Roof & Wall Cladding
    const roofSlopeLength = Math.sqrt(Math.pow(halfSpan + 0.8, 2) + Math.pow(ridgeHeight - eaveHeight + 0.2, 2));
    const roofAngle = Math.atan2(ridgeHeight - eaveHeight, halfSpan);

    // Left Roof Slope
    const roofLGeo = new THREE.PlaneGeometry(roofSlopeLength, totalLength);
    const roofL = new THREE.Mesh(roofLGeo, claddingRoofMat);
    roofL.rotation.y = Math.PI / 2;
    roofL.rotation.x = -roofAngle;
    roofL.position.set(-(halfSpan + 0.4) / 2, (eaveHeight + ridgeHeight + 1.0) / 2, 0);
    roofL.receiveShadow = true;
    groupCladding.add(roofL);

    // Right Roof Slope
    const roofRGeo = new THREE.PlaneGeometry(roofSlopeLength, totalLength);
    const roofR = new THREE.Mesh(roofRGeo, claddingRoofMat);
    roofR.rotation.y = Math.PI / 2;
    roofR.rotation.x = roofAngle;
    roofR.position.set((halfSpan + 0.4) / 2, (eaveHeight + ridgeHeight + 1.0) / 2, 0);
    roofR.receiveShadow = true;
    groupCladding.add(roofR);

    // Skylight Strip (Central 3m wide along length)
    const skyGeo = new THREE.PlaneGeometry(3.5, totalLength);
    const skylight = new THREE.Mesh(skyGeo, skylightMat);
    skylight.rotation.x = -Math.PI / 2;
    skylight.position.set(0, ridgeHeight + 0.55, 0);
    groupCladding.add(skylight);

    // Left Wall Sheet
    const wallLGeo = new THREE.PlaneGeometry(totalLength, eaveHeight);
    const wallL = new THREE.Mesh(wallLGeo, claddingWallMat);
    wallL.rotation.y = Math.PI / 2;
    wallL.position.set(-halfSpan - 0.35, eaveHeight / 2, 0);
    groupCladding.add(wallL);

    // Right Wall Sheet
    const wallR = new THREE.Mesh(wallLGeo, claddingWallMat);
    wallR.rotation.y = -Math.PI / 2;
    wallR.position.set(halfSpan + 0.35, eaveHeight / 2, 0);
    groupCladding.add(wallR);

    // Hide cladding by default so users immediately see the heavy structural steel skeleton
    groupCladding.visible = showCladding;

    // --- ANIMATION LOOP ---
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const delta = clock.getDelta();

      // Smooth Exploded View interpolation
      const targetExplode = isExploded ? 1.0 : 0.0;
      explodeFactorRef.current += (targetExplode - explodeFactorRef.current) * 0.08;
      const ef = explodeFactorRef.current;

      // Apply exploded offsets
      groupColumns.position.x = 0; // Stays centered
      groupRafters.position.y = ef * 7.0; // Rafters rise up
      groupPurlins.position.y = ef * 11.0; // Purlins elevate higher
      groupCrane.position.y = ef * 3.5; // Crane rises moderately
      groupCladding.position.y = ef * 15.0; // Cladding floats top
      groupFoundation.position.y = -ef * 2.0; // Foundation lowers slightly

      // Auto-rotation when enabled
      if (autoRotate && controls) {
        controls.autoRotate = true;
        controls.autoRotateSpeed = 1.2;
      } else if (controls) {
        controls.autoRotate = false;
      }

      controls.update();
      renderer.render(scene, camera);
    };

    animate();

    // Resize Handler
    const handleResize = () => {
      if (!container || !renderer || !camera) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
      if (renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  // Update Exploded State
  useEffect(() => {
    // explodeFactor is driven inside the render loop using isExploded state
  }, [isExploded]);

  // Update Cladding Visibility
  useEffect(() => {
    if (groupsRef.current) {
      groupsRef.current.cladding.visible = showCladding;
    }
  }, [showCladding]);

  // Update Wireframe Mode
  useEffect(() => {
    if (!sceneRef.current) return;
    sceneRef.current.traverse((child) => {
      if (child instanceof THREE.Mesh) {
        if (Array.isArray(child.material)) {
          child.material.forEach(m => (m.wireframe = isWireframe));
        } else if (child.material) {
          child.material.wireframe = isWireframe;
        }
      }
    });
  }, [isWireframe]);

  // Handle Camera Presets
  const setPresetView = (preset: 'iso' | 'front' | 'side' | 'crane') => {
    setCameraView(preset);
    if (!cameraRef.current || !controlsRef.current) return;
    const camera = cameraRef.current;
    const controls = controlsRef.current;

    switch (preset) {
      case 'iso':
        camera.position.set(32, 22, 34);
        controls.target.set(0, 7, 0);
        break;
      case 'front':
        camera.position.set(0, 10, 42);
        controls.target.set(0, 7, 0);
        break;
      case 'side':
        camera.position.set(42, 10, 0);
        controls.target.set(0, 7, 0);
        break;
      case 'crane':
        camera.position.set(12, 11, 16);
        controls.target.set(0, 8.5, 0);
        break;
    }
    controls.update();
  };

  const activeSpec = COMPONENT_SPECS[selectedPart] || COMPONENT_SPECS.columns;

  return (
    <div className={`relative bg-[#FFFFFF] border border-[#CBD5E1] shadow-industrial flex flex-col ${className}`}>
      {/* Top Telemetry & Control Bar */}
      <div className="flex flex-wrap items-center justify-between gap-2 p-3 sm:p-4 border-b border-[#E2E8F0] bg-[#F8FAFC]">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-[#10B981] animate-pulse" />
          <span className="text-xs font-sans font-bold uppercase tracking-wider text-[#0F172A]">
            WebGL 3D Interactive Structural Inspector
          </span>
          <span className="hidden sm:inline-block px-2 py-0.5 bg-[#FEF3C7] text-[#B45309] text-[10px] font-sans font-bold uppercase tracking-wider border border-[#F59E0B]">
            Three.js Engine
          </span>
        </div>

        {/* View Controls & Toggles */}
        <div className="flex items-center gap-1.5 flex-wrap">
          <button
            onClick={() => setIsExploded(!isExploded)}
            className={`px-2.5 py-1 text-xs font-sans font-bold uppercase tracking-wider flex items-center gap-1.5 transition-all cursor-pointer border ${
              isExploded 
                ? 'bg-[#FEF3C7] border-[#F59E0B] text-[#B45309] shadow-xs' 
                : 'bg-white border-[#CBD5E1] text-[#475569] hover:border-[#D97706]'
            }`}
            title="Explode 3D assembly into separated building layers"
          >
            <Layers className="w-3.5 h-3.5 text-[#D97706]" />
            <span>{isExploded ? 'Assembled' : '3D Explode'}</span>
          </button>

          <button
            onClick={() => setShowCladding(!showCladding)}
            className={`px-2.5 py-1 text-xs font-sans font-bold uppercase tracking-wider flex items-center gap-1.5 transition-all cursor-pointer border ${
              showCladding 
                ? 'bg-[#FEF3C7] border-[#F59E0B] text-[#B45309]' 
                : 'bg-white border-[#CBD5E1] text-[#475569] hover:border-[#D97706]'
            }`}
            title="Toggle roof and wall cladding envelope"
          >
            {showCladding ? <EyeOff className="w-3.5 h-3.5 text-[#D97706]" /> : <Eye className="w-3.5 h-3.5 text-[#D97706]" />}
            <span>{showCladding ? 'Hide Envelope' : 'Show Sheeting'}</span>
          </button>

          <button
            onClick={() => setIsWireframe(!isWireframe)}
            className={`px-2.5 py-1 text-xs font-sans font-bold uppercase tracking-wider flex items-center gap-1.5 transition-all cursor-pointer border ${
              isWireframe 
                ? 'bg-[#FEF3C7] border-[#F59E0B] text-[#B45309]' 
                : 'bg-white border-[#CBD5E1] text-[#475569] hover:border-[#D97706]'
            }`}
            title="Toggle wireframe mesh mode"
          >
            <Box className="w-3.5 h-3.5 text-[#D97706]" />
            <span className="hidden md:inline">{isWireframe ? 'Solid' : 'Wireframe'}</span>
          </button>

          <button
            onClick={() => setAutoRotate(!autoRotate)}
            className={`p-1.5 text-xs font-sans transition-all cursor-pointer border ${
              autoRotate 
                ? 'bg-[#FEF3C7] border-[#F59E0B] text-[#B45309]' 
                : 'bg-white border-[#CBD5E1] text-[#475569] hover:border-[#D97706]'
            }`}
            title="Toggle turntable auto-rotation"
          >
            {autoRotate ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
          </button>

          <button
            onClick={() => setPresetView('iso')}
            className="p-1.5 text-xs font-sans bg-white border border-[#CBD5E1] text-[#475569] hover:border-[#D97706] transition-all cursor-pointer"
            title="Reset to Isometric View"
          >
            <RotateCcw className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Main 3D Canvas Area */}
      <div className={`relative w-full ${height} overflow-hidden bg-[#F8FAFC]`}>
        <div ref={mountRef} className="w-full h-full cursor-grab active:cursor-grabbing" />

        {/* Orbit Helper Watermark */}
        <div className="absolute bottom-3 left-3 pointer-events-none bg-white/90 backdrop-blur-xs px-2.5 py-1 border border-[#CBD5E1] text-[10px] font-sans text-[#64748B] flex items-center gap-2">
          <Compass className="w-3.5 h-3.5 text-[#D97706]" />
          <span>DRAG TO ORBIT 360° • SCROLL TO ZOOM • RIGHT-CLICK TO PAN</span>
        </div>

        {/* Camera Preset Quick Bar */}
        <div className="absolute top-3 right-3 flex flex-col gap-1 z-10">
          {[
            { id: 'iso', label: 'ISO 3D' },
            { id: 'front', label: 'ELEVATION' },
            { id: 'side', label: 'CROSS-BAY' },
            { id: 'crane', label: 'CRANE LVL' }
          ].map(p => (
            <button
              key={p.id}
              onClick={() => setPresetView(p.id as any)}
              className={`px-2 py-0.5 text-[10px] font-sans font-bold uppercase tracking-wider border transition-all cursor-pointer ${
                cameraView === p.id
                  ? 'bg-[#0F172A] text-white border-[#0F172A]'
                  : 'bg-white/95 text-[#475569] border-[#CBD5E1] hover:border-[#D97706]'
              }`}
            >
              {p.label}
            </button>
          ))}
        </div>
      </div>

      {/* Component Selector Tabs */}
      <div className="border-t border-[#E2E8F0] bg-[#FFFFFF] p-3 sm:p-4">
        <div className="text-[11px] font-sans font-bold uppercase tracking-wider text-[#64748B] mb-2 flex items-center justify-between">
          <span>SELECT STRUCTURAL COMPONENT TO INSPECT:</span>
          <span className="text-[#D97706] font-bold">CLICK TO VIEW ENGINEERING SPECS</span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2">
          {Object.values(COMPONENT_SPECS).map(item => (
            <button
              key={item.id}
              onClick={() => {
                setSelectedPart(item.id);
                if (item.id === 'cladding') setShowCladding(true);
              }}
              className={`p-2.5 text-left border transition-all cursor-pointer ${
                selectedPart === item.id
                  ? 'bg-[#FEF3C7] border-[#F59E0B] text-[#0F172A] shadow-xs'
                  : 'bg-[#F8FAFC] border-[#CBD5E1] text-[#475569] hover:border-[#F59E0B]/60'
              }`}
            >
              <div className="text-[10px] font-sans font-bold text-[#D97706] uppercase tracking-wider">
                {item.code}
              </div>
              <div className="text-xs font-headline font-bold text-[#0F172A] truncate uppercase mt-0.5">
                {item.name}
              </div>
            </button>
          ))}
        </div>

        {/* Live Active Specification Card */}
        <div className="mt-3 p-4 bg-[#F8FAFC] border border-[#CBD5E1]">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 pb-2 border-b border-[#E2E8F0] mb-2">
            <div>
              <div className="text-[10px] font-sans font-bold uppercase tracking-wider text-[#D97706]">
                TECHNICAL SPECIFICATION SHEET • {activeSpec.code}
              </div>
              <h4 className="text-base sm:text-lg font-bold font-headline text-[#0F172A] uppercase">
                {activeSpec.name}
              </h4>
            </div>
            <div className="text-right">
              <span className="px-2 py-0.5 bg-white border border-[#CBD5E1] text-xs font-sans font-bold text-[#0F172A] inline-block">
                {activeSpec.standard}
              </span>
            </div>
          </div>

          <p className="text-xs sm:text-sm font-body text-[#334155] leading-relaxed mb-3">
            {activeSpec.description}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-sans text-[#475569] pt-2 border-t border-[#E2E8F0]">
            {activeSpec.details.map((detail, idx) => (
              <div key={idx} className="flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#D97706] shrink-0 mt-0.5" />
                <span>{detail}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
