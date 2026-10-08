import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Clock, User, ArrowLeft, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Button } from '../components/Button';
import { BLOG_POSTS, BlogPost } from '../data/companyData';

export const BlogPostPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const post: BlogPost | undefined = BLOG_POSTS.find(p => p.slug === slug) || BLOG_POSTS[0];

  return (
    <div className="bg-[#F8FAFC] text-[#0F172A] min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-10">
        {/* Top Back Link */}
        <Link
          to="/blog"
          className="inline-flex items-center gap-2 text-xs font-sans text-[#D97706] hover:text-[#B45309] transition-colors uppercase font-bold tracking-wider"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Return to Technical Blog Index</span>
        </Link>

        {/* Post Metadata Header */}
        <div className="border-b border-[#E2E8F0] pb-8 space-y-4">
          <div className="flex items-center gap-3 text-xs font-sans">
            <span className="px-2.5 py-1 bg-[#FEF3C7] border border-[#F59E0B] text-[#B45309] font-bold uppercase tracking-wider">
              {post.category}
            </span>
            <span className="text-[#64748B] font-semibold">{post.date}</span>
            <span className="text-[#CBD5E1]">|</span>
            <span className="text-[#64748B] flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              {post.readTime}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-headline text-[#0F172A] tracking-tight leading-tight uppercase">
            {post.title}
          </h1>

          <div className="flex items-center gap-2 text-xs font-sans text-[#64748B] pt-2">
            <User className="w-4 h-4 text-[#D97706]" />
            <span>Author: <strong className="text-[#0F172A]">{post.author}</strong></span>
          </div>
        </div>

        {/* Post Body Content */}
        <div className="space-y-6 font-body text-base text-[#334155] leading-relaxed">
          <div className="p-5 bg-[#FEF3C7]/40 border-l-3 border-[#D97706] text-sm sm:text-base text-[#0F172A] font-semibold italic">
            "{post.excerpt}"
          </div>

          {post.content.map((paragraph, index) => (
            <p key={index} className="text-[#475569] leading-relaxed">
              {paragraph}
            </p>
          ))}

          {/* Key Engineering Takeaway Box */}
          <div className="bg-[#FFFFFF] border border-[#CBD5E1] p-6 space-y-3 mt-8 shadow-industrial">
            <div className="text-xs font-sans text-[#D97706] font-bold uppercase tracking-wider flex items-center gap-2">
              <span className="w-2 h-2 bg-[#D97706]" />
              KEY TAKEAWAYS FOR STRUCTURAL SPECIFIERS
            </div>
            <ul className="space-y-2.5 text-sm font-sans text-[#334155]">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#D97706] shrink-0 mt-0.5" />
                <span>Always ensure structural member sizing is governed by both gravity dead loads and lateral wind uplift suction per IS 875 (Part 3).</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#D97706] shrink-0 mt-0.5" />
                <span>Specify continuous tongue-and-groove PUF sandwich panels to eliminate thermal bridges in refrigerated rooms.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#D97706] shrink-0 mt-0.5" />
                <span>Demand mill test certificates (MTC) and ultrasonic weld testing documentation from steel fabricators.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Author & CTA */}
        <div className="pt-8 border-t border-[#E2E8F0] flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-sm font-body text-[#64748B]">
            Need engineering support for a similar structural layout?
          </div>
          <Link to="/contact">
            <Button variant="primary" size="md" icon={<ArrowRight className="w-4 h-4" />}>
              Consult HAM Engineering Bureau
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};
