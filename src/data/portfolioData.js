export const portfolioData = {
  personalInfo: {
    name: "송새나",
    birthDate: "2006년 4월 7일",
    jobTitle: "사무직 (사무행정 · 경영지원 · 총무)",
    headline: "새나의 포트폴리오",
    subHeadline: "기본에 충실한 꼼꼼함과 신속한 전산 처리 역량을 갖춘 신입 사무원 송새나입니다.",
    email: "saena.song@example.com",
    phone: "010-0000-0000",
    location: "대한민국 서울특별시",
    resumePdfPath: "/resume/송새나_이력서.pdf",
    aboutMe: [
      "매일의 업무 일정을 꼼꼼하게 계획하고 우선순위를 정해 신속정확하게 처리하는 것을 좋아합니다.",
      "컴퓨터활용능력 2급과 Excel 365 Associate 취득을 통해 다져진 스프레드시트 활용 능력으로 반복적인 수작업을 효율화할 준비가 되어 있습니다.",
      "FAT 2급 자격을 바탕으로 회계 전표의 차·대변 분개 흐름을 이해하며, 투명하고 오차 없는 문서 관리를 실천하겠습니다.",
      "조직의 구성원들과 배려 깊고 원활하게 소통하며 팀 전체의 생산성을 높이는 든든한 서포터가 되겠습니다."
    ]
  },

  certificates: [
    {
      id: "cert-1",
      name: "컴퓨터활용능력 2급",
      issuer: "대한상공회의소",
      date: "2024년 취득",
      desc: "스프레드시트 실무 데이터 연산, 통계 및 텍스트 함수, 피벗테이블 및 차트 시각화 능력 인증",
      category: "OA 국가기술자격",
      badgeColor: "bg-blue-50 text-blue-700 border-blue-200"
    },
    {
      id: "cert-2",
      name: "Excel 365 Associate",
      issuer: "Microsoft",
      date: "2024년 취득",
      desc: "MS 오피스 공식 국제 자격으로 통합 문서 관리, 수식 및 데이터 검증, 조건부 서식 마스터",
      category: "국제공인 OA",
      badgeColor: "bg-emerald-50 text-emerald-700 border-emerald-200"
    },
    {
      id: "cert-3",
      name: "FAT 2급 (회계정보처리 2급)",
      issuer: "한국공인회계사회",
      date: "2024년 취득",
      desc: "더존 SmartA 프로그램을 활용한 일반전표/매입매출전표 입력 및 회계 기초 결산 보조 역량 인증",
      category: "전산회계 국가공인",
      badgeColor: "bg-purple-50 text-purple-700 border-purple-200"
    }
  ],

  skills: [
    {
      name: "MS Excel (엑셀)",
      level: 90,
      levelLabel: "고급 실무",
      icon: "FileSpreadsheet",
      summary: "실무 함수(VLOOKUP, SUMIFS, IF 등), 피벗 테이블, 유효성 검사, 조건부 서식, 자동화 서식 제작",
      highlights: ["대량 데이터 필터링 & 정리", "정확한 수식 연산 및 오류 검출", "업무 보고용 시각 차트"]
    },
    {
      name: "MS PowerPoint (파워포인트)",
      level: 85,
      levelLabel: "능숙",
      icon: "Presentation",
      summary: "슬라이드 마스터 기반 통일된 보고서 디자인, 도식화 및 인포그래픽을 활용한 사내 발표자료 구성",
      highlights: ["가독성 높은 레이아웃", "핵심 정보 도식화", "사내 회의 및 교육 템플릿"]
    },
    {
      name: "MS Word (워드)",
      level: 88,
      levelLabel: "능숙",
      icon: "FileText",
      summary: "표준 공문서 규격 작성, 기안서/품의서 서식 설정, 스타일 지정, 오탈자 및 맞춤법 정밀 검수",
      highlights: ["표준 비즈니스 서식 작성", "목차 및 스타일 일관성", "신속한 타이핑 & 교정"]
    }
  ],

  projects: [
    {
      id: 1,
      title: "ERP & 전산회계(FAT) 기반 전표 전산화 및 모의 결산 보조",
      period: "2024.03 - 2024.04 (4주)",
      role: "회계 전표 입력 및 전산 데이터 검증",
      summary: "기존 수기/엑셀 영수증 데이터를 FAT 2급 기준에 맞추어 표준 계정과목으로 전산화하고 분개 오류율 0%를 달성한 모의 행정 프로젝트입니다.",
      tags: ["FAT 2급", "Excel", "전산회계", "전표입력", "데이터검증"],
      imageFileName: "project-1.png",
      imageRelPath: "/images/projects/project-1.png",
      details: {
        category: "전산회계 · 데이터 전산화",
        objective: "모의 사업장 데이터를 바탕으로 매입매출 증빙자료 검토부터 더존 SmartA 전표 입력, 월별 결산 보고서 산출까지의 흐름을 체계화했습니다.",
        keyTasks: [
          "일일 발생 증빙자료(세금계산서, 현금영수증, 신용카드 매출전표) 적격증빙 여부 검토",
          "계정과목별 차·대변 분개 규칙에 따른 더존 SmartA 전표 입력",
          "합계잔액시산표 및 재무제표 기초 자료 대조를 통한 오류 검증",
          "월별 지출 내역 요약 엑셀 시트 연동 작성"
        ],
        problemSolving: "동일 거래처에 대한 계정과목 오입력 사례를 발견하고, 거래처별 기본 계정 매핑 가이드라인을 작성하여 오입력률을 0%로 줄였습니다.",
        result: "수기 대비 처리 속도 약 40% 단축 및 정확한 결산 기초 자료 완성"
      }
    },
    {
      id: 2,
      title: "Excel 365 함수 기반 사내 비품 및 소모품 관리 자동화 시트 구축",
      period: "2024.05 - 2024.05 (3주)",
      role: "템플릿 기획 및 고급 함수 수식 설계",
      summary: "반복적인 비품 재고 파악 및 입출고 관리를 VLOOKUP, INDEX/MATCH, 조건부 서식을 결합하여 자동 계산되는 통합 대시보드로 구축했습니다.",
      tags: ["컴활 2급", "Excel 365 Associate", "자동화 서식", "피벗테이블", "재고관리"],
      imageFileName: "project-2.png",
      imageRelPath: "/images/projects/project-2.png",
      details: {
        category: "OA 자동화 · 사무행정",
        objective: "수기 기재 시 발생하는 재고 수량 오차를 방지하고, 실시간 안전재고 미달 시 자동으로 시각 알림을 주는 스마트 양식을 제작했습니다.",
        keyTasks: [
          "품목별 고유 코드(ID) 체계화 및 데이터 유효성 검사를 통한 오타 방지",
          "입출고 발생 시 실시간 잔여 재고 자동 계산 수식(SUMIFS) 구축",
          "안전재고 수량 미달 시 붉은색 경고 표시 조건부 서식 적용",
          "월간 소모량 트렌드를 한눈에 보는 피벗 차트 대시보드 구현"
        ],
        problemSolving: "공백 데이터 입력 시 발생하던 `#N/A` 에러를 `IFERROR` 함수로 감싸 깔끔하고 견고한 에러 없는 시트를 완성했습니다.",
        result: "비품 재고 파악 소요 시간 주당 3시간에서 15분으로 대폭 단축"
      }
    },
    {
      id: 3,
      title: "MS Word & PowerPoint 기반 표준 사무 업무 매뉴얼 및 교육자료 제작",
      period: "2024.06 - 2024.06 (2주)",
      role: "문서 표준 양식 기획 및 레이아웃 디자인",
      summary: "신입 사무원의 원활한 업무 적응을 위해 공문서 작성 규칙과 보고서 템플릿을 표준화하고 시각화된 친절한 매뉴얼을 제작했습니다.",
      tags: ["MS Word", "PowerPoint", "사무행정", "문서표준화", "보고서작성"],
      imageFileName: "project-3.png",
      imageRelPath: "/images/projects/project-3.png",
      details: {
        category: "문서 표준화 · 사내 교육",
        objective: "부서마다 달랐던 문서 양식을 행정안전부 공문서 규격에 맞추어 통일하고, 누구나 한눈에 이해할 수 있는 업무 플로우차트를 구성했습니다.",
        keyTasks: [
          "MS Word 스타일(제목1, 제목2, 본문) 기능을 활용한 공문서 표준 서식 3종 제작",
          "파워포인트를 활용한 핵심 사무 절차 4단계 인포그래픽 도식화",
          "자주 혼동하는 비즈니스 이메일 서식 및 맞춤법 체크리스트 작성",
          "출력 및 PDF 변환 시에도 깨짐 없는 반응형 여백 설계"
        ],
        problemSolving: "복잡한 텍스트 위주의 지침을 아이콘과 순서도 다이어그램으로 재구성하여 가독성을 획기적으로 개선했습니다.",
        result: "문서 작성 소요 시간 단축 및 사내 가독성 평가 만족도 95% 달성"
      }
    }
  ],

  hobbies: [
    {
      id: "hobby-1",
      title: "다이어리 & 불렛저널 작성",
      tag: "시간 관리 & 꼼꼼함",
      icon: "CalendarCheck",
      description: "하루의 할 일과 우선순위를 아침마다 메모하고 마감 기한을 철저히 체크합니다. 꼼꼼한 성격으로 누락 없는 업무 처리를 가능하게 합니다."
    },
    {
      id: "hobby-2",
      title: "디지털 타이핑 & 필사",
      tag: "집중력 & 오탈자 검수",
      icon: "Keyboard",
      description: "좋은 글귀나 비즈니스 문장을 타이핑하며 정확하고 빠른 입력 능력을 기릅니다. 작은 쉼표 하나와 띄어쓰기도 세심하게 확인하는 습관이 있습니다."
    },
    {
      id: "hobby-3",
      title: "러닝 & 가벼운 산책",
      tag: "체력 관리 & 긍정 마인드",
      icon: "Activity",
      description: "퇴근 후나 주말에 가벼운 러닝을 통해 체력을 기르고 스트레스를 해소합니다. 지치지 않는 튼튼한 체력과 밝은 에너지를 유지하는 비결입니다."
    }
  ],

  sitemap: [
    { name: "소개 (Intro)", href: "#intro" },
    { name: "프로필 (Profile)", href: "#profile" },
    { name: "프로젝트 (Projects)", href: "#projects" },
    { name: "취미 및 인성 (Hobby)", href: "#hobby" },
    { name: "이력서 다운로드", href: "#sitemap" }
  ]
};
