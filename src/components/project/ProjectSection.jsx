import React, { useState, useEffect } from 'react';
import { Layers, Sparkles, FolderPlus, RefreshCw } from 'lucide-react';
import { portfolioData } from '../../data/portfolioData';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';
import ProjectSkeleton from './ProjectSkeleton';

export default function ProjectSection() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const { projects } = portfolioData;

  // Simulate initial loading to demonstrate Skeleton UI nicely
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 600);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="projects" className="py-20 bg-white border-t border-slate-200/80">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-50 border border-brand-200 text-brand-700 text-xs font-semibold mb-3">
              <Layers className="w-3.5 h-3.5" />
              <span>실무 모의 프로젝트</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
              실무 프로젝트 ({projects.length})
            </h2>
            <p className="mt-2 text-slate-600 text-sm sm:text-base">
              업무 효율화와 데이터 무결성을 목표로 직접 수행한 실습 및 모의 과제입니다.
            </p>
          </div>

          {/* Skeleton UI preview toggle button for recruiter/user verification */}
          <button
            onClick={() => {
              setIsLoading(true);
              setTimeout(() => setIsLoading(false), 800);
            }}
            className="self-start md:self-auto inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg border border-slate-200 text-xs font-medium text-slate-600 hover:bg-slate-50 hover:text-brand-600 transition-colors"
            title="스켈레톤 UI 동작 확인"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            <span>로딩 스켈레톤 다시보기</span>
          </button>
        </div>

        {/* Project Vertical Banner List */}
        <div className="space-y-6">
          {isLoading ? (
            // Skeleton state
            <>
              <ProjectSkeleton />
              <ProjectSkeleton />
              <ProjectSkeleton />
            </>
          ) : (
            // Dynamic Project Cards (Horizontal banners stacked vertically)
            projects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onSelect={(proj) => setSelectedProject(proj)}
              />
            ))
          )}
        </div>

        {/* Dynamic Project Addition Guide Banner */}
        <div className="mt-10 p-5 rounded-2xl bg-slate-50 border border-dashed border-slate-300 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-brand-600 shadow-2xs">
              <FolderPlus className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-xs sm:text-sm font-bold text-slate-800">
                새로운 프로젝트를 추가하고 싶으신가요?
              </h4>
              <p className="text-[11px] sm:text-xs text-slate-500">
                <code className="text-brand-600 bg-white px-1.5 py-0.5 rounded border border-slate-200">src/data/portfolioData.js</code> 파일에 객체를 추가하면 화면에 동적으로 자동 반영됩니다.
              </p>
            </div>
          </div>
        </div>

      </div>

      {/* Detail Modal Popup */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}
