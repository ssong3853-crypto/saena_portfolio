import React, { useState } from 'react';
import { Calendar, UserCheck, ArrowRight, Image as ImageIcon, FolderOpen } from 'lucide-react';

export default function ProjectCard({ project, onSelect }) {
  const [imageError, setImageError] = useState(false);

  return (
    <div
      onClick={() => onSelect(project)}
      className="group bg-white rounded-3xl p-5 sm:p-7 border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-brand-300 transition-all duration-300 cursor-pointer flex flex-col md:flex-row gap-6 items-stretch"
    >
      {/* 1. Left Side: Preview Image Placeholder with Filename Overlay */}
      <div className="w-full md:w-5/12 min-h-[210px] sm:min-h-[230px] rounded-2xl overflow-hidden bg-gradient-to-br from-slate-100 to-slate-200 border border-slate-200/80 relative flex flex-col items-center justify-center p-4 text-center group-hover:scale-[1.01] transition-transform">
        {!imageError ? (
          <img
            src={project.imageRelPath}
            alt={project.title}
            onError={() => setImageError(true)}
            className="w-full h-full object-cover absolute inset-0 rounded-2xl"
          />
        ) : null}

        {/* Placeholder UI shown when image is not yet placed in public/images/projects/ */}
        {imageError && (
          <div className="relative z-10 flex flex-col items-center justify-center p-3 w-full">
            <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center text-brand-600 mb-3 group-hover:rotate-6 transition-transform">
              <ImageIcon className="w-6 h-6" />
            </div>

            <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1.5">
              미리보기 이미지 플레이스홀더
            </span>

            {/* Prominent Filename Guide */}
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/90 backdrop-blur-xs border border-brand-200 text-brand-700 text-xs font-mono font-medium shadow-xs">
              <FolderOpen className="w-3.5 h-3.5" />
              <span>{project.imageFileName}</span>
            </div>

            <p className="mt-2 text-[11px] text-slate-400">
              public/images/projects/ 폴더에 넣으면 자동 연동
            </p>
          </div>
        )}

        {/* Hover overlay hint */}
        <div className="absolute inset-0 bg-brand-900/10 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl flex items-center justify-center pointer-events-none">
          <span className="bg-white/95 text-brand-700 text-xs font-medium px-3.5 py-1.5 rounded-full shadow-md backdrop-blur-xs">
            클릭하여 상세 정보 보기
          </span>
        </div>
      </div>

      {/* 2. Right Side: Project Summary Texts */}
      <div className="w-full md:w-7/12 flex flex-col justify-between py-1">
        <div>
          {/* Category & Period */}
          <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500 mb-2.5">
            <span className="px-2.5 py-0.5 rounded-md bg-brand-50 text-brand-700 font-semibold border border-brand-100">
              {project.details.category}
            </span>
            <span className="flex items-center gap-1 text-slate-500">
              <Calendar className="w-3.5 h-3.5" />
              {project.period}
            </span>
            <span className="flex items-center gap-1 text-slate-500">
              <UserCheck className="w-3.5 h-3.5" />
              {project.role}
            </span>
          </div>

          {/* Project Title */}
          <h3 className="text-lg sm:text-xl font-bold text-slate-900 group-hover:text-brand-600 transition-colors leading-snug mb-3">
            {project.title}
          </h3>

          {/* Summary text */}
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-2 sm:line-clamp-3 mb-4">
            {project.summary}
          </p>
        </div>

        {/* Bottom Tags & View Details CTA */}
        <div className="pt-3 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap gap-1.5">
            {project.tags.map((tag, idx) => (
              <span
                key={idx}
                className="text-[11px] font-medium px-2.5 py-1 rounded-md bg-slate-100 text-slate-600 hover:bg-slate-200 transition-colors"
              >
                #{tag}
              </span>
            ))}
          </div>

          <div className="inline-flex items-center gap-1 text-xs font-semibold text-brand-600 group-hover:translate-x-1 transition-transform">
            <span>상세보기</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </div>
        </div>
      </div>
    </div>
  );
}
