import React, { useEffect, useState } from 'react';
import { X, Calendar, UserCheck, CheckCircle2, AlertCircle, TrendingUp, FolderOpen, Image as ImageIcon } from 'lucide-react';

export default function ProjectModal({ project, onClose }) {
  const [modalImageError, setModalImageError] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8 bg-slate-900/60 backdrop-blur-sm animate-fade-in">
      {/* Background click to close */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Modal Dialog Card */}
      <div className="relative w-full max-w-3xl max-h-[90vh] bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col z-10 animate-scale-up">
        
        {/* Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 bg-slate-50/70">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded-full bg-brand-50 text-brand-700 font-semibold text-xs border border-brand-100">
              {project.details.category}
            </span>
            <span className="text-xs text-slate-500 font-medium">프로젝트 상세 안내</span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-200/60 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Modal Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
          
          {/* Title & Metadata */}
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 leading-snug mb-3">
              {project.title}
            </h2>
            <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-slate-500 pb-3 border-b border-slate-100">
              <span className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-brand-600" />
                기간: <strong className="text-slate-700">{project.period}</strong>
              </span>
              <span className="flex items-center gap-1.5">
                <UserCheck className="w-4 h-4 text-brand-600" />
                역할: <strong className="text-slate-700">{project.role}</strong>
              </span>
            </div>
          </div>

          {/* Project Image Banner / Placeholder */}
          <div className="relative w-full h-56 sm:h-72 rounded-2xl overflow-hidden bg-gradient-to-br from-slate-100 to-slate-200 border border-slate-200 flex flex-col items-center justify-center p-6 text-center">
            {!modalImageError ? (
              <img
                src={project.imageRelPath}
                alt={project.title}
                onError={() => setModalImageError(true)}
                className="w-full h-full object-cover absolute inset-0"
              />
            ) : null}

            {modalImageError && (
              <div className="relative z-10 flex flex-col items-center">
                <div className="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center text-brand-600 mb-3">
                  <ImageIcon className="w-7 h-7" />
                </div>
                <span className="text-xs font-semibold text-slate-500 mb-2">
                  프로젝트 상세 캡처 이미지 자리
                </span>
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/95 border border-brand-200 text-brand-700 font-mono text-xs shadow-xs">
                  <FolderOpen className="w-4 h-4" />
                  <span>public/images/projects/{project.imageFileName}</span>
                </div>
                <p className="mt-2 text-xs text-slate-400">
                  해당 경로에 실무 시트 캡처나 보고서 이미지를 넣으시면 자동 표시됩니다.
                </p>
              </div>
            )}
          </div>

          {/* 1. 프로젝트 배경 및 목적 */}
          <div className="bg-slate-50 rounded-2xl p-4 sm:p-5 border border-slate-100">
            <h4 className="text-sm font-bold text-slate-900 mb-2 flex items-center gap-2">
              <span className="w-2 h-4 bg-brand-600 rounded-full inline-block" />
              프로젝트 배경 및 목적
            </h4>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              {project.details.objective}
            </p>
          </div>

          {/* 2. 주요 수행 업무 */}
          <div>
            <h4 className="text-sm font-bold text-slate-900 mb-3 flex items-center gap-2">
              <span className="w-2 h-4 bg-brand-600 rounded-full inline-block" />
              주요 수행 업무 및 절차
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
              {project.details.keyTasks.map((task, idx) => (
                <li key={idx} className="flex items-start gap-2 bg-white p-3 rounded-xl border border-slate-100 shadow-2xs">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>{task}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* 3. 문제 해결 경험 (Problem Solving) */}
          <div className="bg-amber-50/70 border border-amber-200/80 rounded-2xl p-4 sm:p-5">
            <h4 className="text-sm font-bold text-amber-900 mb-2 flex items-center gap-2">
              <AlertCircle className="w-4 h-4 text-amber-600" />
              문제 해결 경험 (Problem Solving)
            </h4>
            <p className="text-xs sm:text-sm text-amber-900 leading-relaxed">
              {project.details.problemSolving}
            </p>
          </div>

          {/* 4. 업무 성과 및 배운 점 (Results & Takeaway) */}
          <div className="bg-emerald-50/70 border border-emerald-200/80 rounded-2xl p-4 sm:p-5">
            <h4 className="text-sm font-bold text-emerald-900 mb-2 flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-emerald-600" />
              업무 성과 및 배운 점
            </h4>
            <p className="text-xs sm:text-sm text-emerald-900 leading-relaxed font-medium">
              {project.details.result}
            </p>
          </div>

          {/* Tags */}
          <div className="pt-2 flex flex-wrap gap-2">
            {project.tags.map((tag, idx) => (
              <span key={idx} className="text-xs px-3 py-1 rounded-full bg-slate-100 text-slate-700 font-medium">
                #{tag}
              </span>
            ))}
          </div>

        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 bg-slate-50 border-t border-slate-100 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-slate-900 text-white text-xs sm:text-sm font-medium hover:bg-slate-800 transition-colors"
          >
            닫기
          </button>
        </div>

      </div>
    </div>
  );
}
