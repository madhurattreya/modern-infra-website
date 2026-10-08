# Modern Infra & Steel Building Solutions

High-performance, modern corporate web application built with **React**, **TypeScript**, **Vite**, **Tailwind CSS v4**, and **React Router v6**. Designed following the Google Stitch Design System (**Stitch Project ID: `10518255656820741456` - Modern Infra Spec Console**) and mirroring the comprehensive content structure of [https://www.modern-infra.com/](https://www.modern-infra.com/).

---

## 🏗️ Design System Implementation (Google Stitch)

The application translates the physical rigor of pre-engineered building (PEB) design and structural steel fabrication into an **Industrial Brutalism & Technical Console Schematic** digital experience:

- **Surface Palette:**
  - `Surface Blueprint`: `#060A10` (Drafting canvas with ambient hairline gridlines)
  - `Surface Slate`: `#0B0F17` (Deep substrate reducing eye fatigue)
  - `Surface Steel`: `#162032` (Component interior & console surfaces)
  - `Border Grid`: `#1E293B` (Continuous 1px structural hairline planes)
  - `Industrial Amber`: `#F59E0B` / `#FBBF24` (Primary actions, status indicators, and metric thresholds)
  - `Cadmium Alert`: `#E11D48` (Stress points, critical notices, and alerts)
- **Sharp Geometry:** Rigid `0px` border radius across all buttons, input fields, cards, and modal primitives.
- **Typography:**
  - Headlines: **Space Grotesk** (Tight letter tracking, industrial posture)
  - Body & Telemetry Readouts: **JetBrains Mono** (Tabular monospaced figures, drafting prefix markers like `[SPEC // 01]`)

---

## 🚀 Key Features

1. **Interactive 3D Blueprint Hero Console:**
   - Interactive isometric structural wireframe model with clickable inspection nodes for Primary Rigid Frame, Z-Purlins, PUF Roof Envelope, and EOT Crane Runway.
2. **Interactive Cost & Spec Estimator (`EstimatorModal`):**
   - Live dimensional sliders (Length, Clear Span Width, Eave Height).
   - Automated engineering calculations for covered footprint (Sq.Ft / m²), estimated steel tonnage (MT), fabrication & erection timeline (weeks), and ballpark turnkey budget.
   - One-click instant WhatsApp dispatch pre-filling all calculated specifications.
3. **Comprehensive Multi-Page Routing:**
   - **Home (`/`)**: Full showcase (Hero, What We Do, Products, Metrics, Triad of Quality, Industries, Projects, Technical Blog, and Direct Contact).
   - **Company Profile (`/about`)**: Infrastructure scale, 7.5L+ sq.ft plant telemetry, and heritage.
   - **Director's Message (`/director-message`)**: Executive statement, quality ethics, and commitments.
   - **Vision & Mission (`/vision-mission`)**: Strategic doctrine and 5 core ethos.
   - **Product Range (`/pre-engineered-building`, `/puf-panel`, `/mezzanine-building`, `/conventional-building`, `/roof-sheeting`, `/cladding-systems`, `/steel-structures`, `/metal-false-ceiling-systems`)**: Complete specification tables, engineering capabilities, and applications.
   - **Industries We Serve (`/industries-we-serve`)**: Sector-by-sector technical solutions across Warehousing, Manufacturing, Defense Hangars, Cold Chains, and Rail Transit.
   - **Landmark Projects (`/projects`)**: Filterable project portfolio with steel tonnage and case details.
   - **Technical Blog (`/blog`, `/blog/:slug`)**: In-depth engineering guides and structural whitepapers.
   - **Contact Directorate (`/contact`)**: Encrypted technical request form, direct phone calling, and 1-click WhatsApp dispatch.

---

## 🛠️ Tech Stack

- **Framework:** React 19 + TypeScript + Vite 8
- **Styling:** Tailwind CSS v4 (`@tailwindcss/vite`) with custom Stitch design tokens
- **Icons:** Lucide React
- **Routing:** React Router v6

---

## 💻 Local Setup & Execution

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Dev Server
```bash
npm run dev
```
The server will start locally at `http://127.0.0.1:5173/`.

### 3. Production Build
```bash
npm run build
```
Creates an optimized production bundle in the `dist/` directory.
