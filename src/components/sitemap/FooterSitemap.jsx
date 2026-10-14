import React from 'react';
import { FileDown, Mail, Phone, MapPin, ArrowUp, CheckCircle, ExternalLink } from 'lucide-react';
import { portfolioData } from '../../data/portfolioData';

export default function FooterSitemap() {
  const { personalInfo, sitemap } = portfolioData;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="sitemap" className="bg-slate-900 text-slate-300 pt-20 pb-12 border-t border-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main CTA: Big Resume Download Banner */}
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-brand-700 via-brand-600 to-sky-600 p-8 sm:p-12 mb-16 shadow-2xl text-white">
          {/* Subtle background decoration */}
          <div className="absolute -right-10 -bottom-10 w-64 h-64 bg-white/10 rounded-full blur-2xl pointer-events-none" />

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
            <div className="max-w-xl">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 backdrop-blur-xs text-xs font-semibold mb-3">
                <CheckCircle className="w-3.5 h-3.5" />
                <span>채용 담당자 전용 서류 준비 완료</span>
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                송새나 님의 입사지원서 및 포트폴리오 PDF
              </h3>
              <p className="mt-2 text-white/80 text-xs sm:text-sm leading-relaxed">
                상세 인적사항, 자격증 사본, 직무 역량 기술서가 정리된 공식 이력서 파일을 다운로드하실 수 있습니다.
              </p>
            </div>

            {/* Resume Download CTA Button */}
            <div className="flex-shrink-0 flex flex-col items-center">
              <a
                href={personalInfo.resumePdfPath}
                download="송새나_이력서.pdf"
                className="group inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-white text-brand-700 font-bold text-base sm:text-lg shadow-xl hover:bg-slate-100 hover:scale-105 active:scale-95 transition-all duration-200"
              >
                <FileDown className="w-5 h-5 text-brand-600 group-hover:translate-y-0.5 transition-transform" />
                <span>이력서 PDF 다운로드</span>
              </a>
              <span className="mt-2 text-[11px] text-white/70">
                public/resume/송새나_이력서.pdf 파일과 연동됨
              </span>
            </div>
          </div>
        </div>

        {/* 3-Column Footer Sitemap & Contact Info */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-slate-800">
          
          {/* Col 1: Bio / Profile Summary */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <span className="w-8 h-8 rounded-lg bg-brand-500 text-white font-bold flex items-center justify-center text-sm">
                SN
              </span>
              <span className="text-lg font-bold text-white tracking-tight">
                {personalInfo.name} <span className="text-brand-400 font-medium text-sm">Portfolio</span>
              </span>
            </div>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              성실한 자세와 빈틈없는 전산 관리로 귀사의 원활한 행정 업무를 뒷받침하겠습니다. 소중한 기회를 주신다면 빠르게 배우고 기여하겠습니다.
            </p>
            <div className="flex items-center gap-2 text-xs text-brand-400">
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
              <span>현재 입사 지원 가능 상태입니다.</span>
            </div>
          </div>

          {/* Col 2: Sitemap Links */}
          <div>
            <h4 className="text-sm font-bold text-white mb-4 tracking-wider uppercase">
              사이트맵 (Sitemap)
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              {sitemap.map((item, idx) => (
                <li key={idx}>
                  <a
                    href={item.href}
                    className="text-slate-400 hover:text-white transition-colors flex items-center gap-1.5 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-600 group-hover:bg-brand-400 transition-colors" />
                    <span>{item.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Contact & Meta Info */}
          <div>
            <h4 className="text-sm font-bold text-white mb-4 tracking-wider uppercase">
              연락처 및 인적사항
            </h4>
            <ul className="space-y-3 text-xs sm:text-sm text-slate-400">
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-brand-400 flex-shrink-0" />
                <span className="truncate">{personalInfo.email}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-brand-400 flex-shrink-0" />
                <span>{personalInfo.phone}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-brand-400 flex-shrink-0" />
                <span>{personalInfo.location}</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} 송새나. All Rights Reserved. 신입 사무직 포트폴리오.</p>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors p-2 rounded-lg hover:bg-slate-800"
          >
            <span>맨 위로 가기</span>
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>
    </footer>
  );
}
