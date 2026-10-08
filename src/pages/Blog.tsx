import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, User, ChevronRight } from 'lucide-react';
import { SectionHeader } from '../components/SectionHeader';
import { BLOG_POSTS } from '../data/companyData';

export const Blog: React.FC = () => {
  return (
    <div className="bg-[#F8FAFC] text-[#0F172A] min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-12">
        <div>
          <div className="text-xs font-sans text-[#D97706] mb-2 font-bold uppercase tracking-wider flex items-center gap-1.5">
            <span>HOME</span>
            <span className="text-[#CBD5E1]">/</span>
            <span>TECHNICAL INSIGHTS</span>
            <span className="text-[#CBD5E1]">/</span>
            <span className="text-[#0F172A]">WHITEPAPERS</span>
          </div>
          <SectionHeader
            kicker="TECHNICAL PAPERS"
            title="Technical Blog: Engineering Whitepapers &amp; Design Guides"
            subtitle="Authoritative structural analysis, material science insights, and code compliance breakdowns published by the HAM Engineering bureau."
            badge="PEB INTELLIGENCE"
          />
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BLOG_POSTS.map(post => (
            <div
              key={post.id}
              className="group bg-[#FFFFFF] border border-[#CBD5E1] hover:border-[#F59E0B] transition-all p-6 flex flex-col justify-between shadow-industrial-sm hover:shadow-industrial-lg"
            >
              <div>
                <div className="flex items-center justify-between text-xs font-sans text-[#64748B] mb-3">
                  <span className="text-[#D97706] font-bold uppercase tracking-wider">{post.category}</span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    {post.readTime}
                  </span>
                </div>

                <h3 className="text-xl font-bold font-headline text-[#0F172A] group-hover:text-[#D97706] transition-colors mb-3 leading-snug uppercase">
                  {post.title}
                </h3>

                <p className="text-sm font-body text-[#475569] leading-relaxed mb-4">
                  {post.excerpt}
                </p>

                <div className="text-xs font-sans text-[#64748B] flex items-center gap-2 border-t border-[#F1F5F9] pt-3">
                  <User className="w-3.5 h-3.5 text-[#D97706]" />
                  <span>{post.author}</span>
                </div>
              </div>

              <div className="pt-4 mt-4 border-t border-[#F1F5F9] flex items-center justify-between font-sans text-xs">
                <span className="text-[11px] text-[#94A3B8] font-semibold">{post.date}</span>
                <Link
                  to={`/blog/${post.slug}`}
                  className="text-[#D97706] group-hover:text-[#B45309] font-bold flex items-center gap-1 uppercase tracking-wider"
                >
                  <span>Read Paper</span>
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
