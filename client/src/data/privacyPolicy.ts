import {
  FiFileText,
  FiShare2,
  FiTrash2,
  FiUser,
  FiBriefcase,
  FiHardDrive,
  FiMail,
  FiPhone,
  FiFolder,
  FiDatabase,
  FiUsers,
  FiHeadphones,
  FiCalendar,
} from "react-icons/fi";
import { IconType } from "react-icons";

export const privacyInfoData: {
  title: string;
  icon: IconType;
  items: { icon?: IconType; text: string }[];
  note?: string;
}[] = [
  {
    title: "일반 개인정보 수집",
    icon: FiUser,
    items: [
      { icon: FiUser, text: "이름" },
      { icon: FiMail, text: "이메일 주소" },
      { icon: FiPhone, text: "휴대폰 번호 등" },
    ],
    note: "※세부항목은 개인정보 처리방침 본문 확인",
  },
  {
    title: "개인정보 처리목적",
    icon: FiFolder,
    items: [
      { text: "본인식별" },
      { text: "임대·토지·보상관리 등 서비스 제공" },
    ],
    note: "※세부항목은 개인정보 처리방침 본문 확인",
  },
  {
    title: "개인정보의 보유 기간",
    icon: FiCalendar,
    items: [
      { icon: FiCalendar, text: "개인정보는 보유기간 만료 후 즉시 파기" },
      { icon: FiDatabase, text: "일부 개인정보는 관련 법령에 따라 영구 보관" },
    ],
    note: "※세부항목은 개인정보 처리방침 본문 확인",
  },
  {
    title: "개인정보의 제공",
    icon: FiUsers,
    items: [
      { text: "제3자 제공" },
      {
        icon: FiBriefcase,
        text: "금융결제원, 한국사회보장정보원 등 9개 업체",
      },
    ],
  },
  {
    title: "처리위탁",
    icon: FiHardDrive,
    items: [
      {
        icon: FiBriefcase,
        text: "앤시정보기술(주), (주)케어비즈 등 16개 업체",
      },
    ],
  },
  {
    title: "고충처리부서",
    icon: FiHeadphones,
    items: [
      { text: "개인정보보호 담당" },
      { icon: FiPhone, text: "051-810-1297" },
      { icon: FiMail, text: "rkskwk@bmc.busan.kr" },
    ],
  },
];

export const privacyProcessingInfo1 = {
  title: "① 부산도시공사는 다음과 같이 정보주체의 개인정보를 처리합니다.",
  headers: ["서비스명", "처리 목적", "수집 항목", "보유기간"],
  data: [
    [
      "홈페이지 관리",
      "본인 식별·인증, 고충처리",
      "성명, 전화번호, 주소, e-mail 등",
      "해지시",
    ],
    [
      "민원사무 처리",
      "민원인 신원확인, 사실조사를 위한 연락통지, 처리결과 통보",
      "성명, 전화번호, 주소 등",
      "관련법에서 정하는 기간",
    ],
    [
      "서비스 제공",
      "사업관련 컨텐츠 제공, 임대·토지·보상관리 등 서비스 제공",
      "성명, 주소, 주민번호 연락처, 보상내역 등",
      "관련법에서 정하는 기간",
    ],
  ],
};

export const privacyProcessingInfo2 = {
  title:
    "② 부산도시공사는 「개인정보보호법」 제32조에 따라 등록·공개하는 개인정보파일의 처리목적은 다음과 같습니다.",
  headers: ["개인정보파일", "보유근거", "보유목적", "주요항목", "보유기간"],
  data: [
    [ "주택임대", "주택공급 특별법 제48조,\n동법 시행령 제63조,\n주택공급에 관한 규칙 제24조", "주택임대 접수자원 관리", "성명,주민번호,연락처,\n세대원정보, 재무정보", "30년", ],
    [ "매입임대", null, "매입임대 접수자원 관리", "성명,연락처,주소,주민번호", null, ],
    [ "전세임대", null, "전세임대 접수자원 관리", null, null, ],
    [ "재개발임대", null, "재개발임대 접수자원 관리", "성명,연락처,주소,주민번호,\n재무정보", null, ],
    [ "상가임대", "상가건물임대차 보호법", "상가임대 접수자원 관리", "성명,주소,주민번호,연락처", "30년", ],
    [ "보상관련대상자", "공익사업을 위한 토지등 취득 및 보상에 관한 법률 제8조,\n동법시행령 제4조, 제50조의2", "토지 등의 취득 및 보상", "성명,주소,주민번호,연락처,\n보상내역", "영구", ],
    [ "토지 분양계약과\n면적사항 관리", "과세자료의 제출 및 관리에 관한 법률 시행령 제4조,\n부동산 등기규칙 제43조, 주택공급에 관한 규칙 제23조\n[부동산거래신고서 교부 및 신청서류],\n수책법 시행령 제95조 [고유식별정보의 처리]", "계약자 신분정보 관리", "성명,주소,주민번호,연락처", "영구", ],
    [ "주택 및 상가 분양계약과\n면적사항 관리", null, null, null, null, ],
    [ "승용차 토지 계약과\n면적사항 관리", "국가를 당사자로하는 계약에 관한 법률 시행령 제116조,\n개인정보보호법 제15조,\n중고거래등 관리에 관한 법률 시행령 제26조,\n부산도시공사 재산관리 규정(자체)", null, null, null, ],
    [ "고객의 소리(VOC)\n민원·민원관리", "민원 처리에 관한 법률 제7조,\n동법 시행령 제11조 및 제52조", "전자민원창구 운영에 민원접수·교부", "성명,연락처,E-Mail", "10년", ],
    [ "아르피나\n이용회원", "개인정보보호법 제15조", "아르피나 시설이용 관리", "성명,생년월일,연락처,주소,\nE-mail", "5년", ],
    [ "SMS문자서비스\n신청자", "개인정보보호법 제15조", "분양/임대 알림서비스 이용", "성명,연락처", "2년", ],
    [ "주거복지센터", "주거기본법 제22조,\n주거기본법 시행령 제14조,\n부산광역시 주거기본조례 제15조", "주거취약계층 복지지원을", "성명,생년월일,연락처,주소", "3년", ],
    [ "청년도시재생사", "부산광역시 도시재생 활성화 및 지원에 관한 조례 제26조의2", "조례에 따른 청년인재 교육지원 및 인증", "성명,생년월일,연락처,E-Mail", "1년", ],
    [ "메이커스테이션\n멤버십", "「부산광역시 도시재생 활성화 및 지원에 관한 조례」 제22조,\n「부산역광장 관리 및 운영에 관한 조례」 제6조,\n개인정보보호법 제15조", "메이커스테이션 장비교육 수료자 대상 멤버십 제도 운용", "성명,연락처", "5년", ],
  ],
};

export const privacyImpactAssessmentData = {
  headers: [
    "개인정보파일의 명칭",
    "개인정보파일에 기록되는 개인정보의 항목",
    "영향평가 수행연도",
  ],
  data: [
    ["보상관련대상자", "성명,연락처,주소,주민번호 등", "2019년"],
    ["분양계약자 인적사항 관리", "성명,연락처,주소,주민번호 등", "2019년"],
    ["출자토지 계약자 인적사항 관리", "성명,연락처,주소,주민번호 등", "2019년"],
    ["부금수납정보파일", "성명,주소,주민번호 등", "2019년"],
    ["주택임대", "성명,연락처,주소,주민번호 등", "2019년"],
    ["상가임대", "성명,연락처,주소,주민번호 등", "2019년"],
    ["매입임대", "성명,연락처,주소,주민번호 등", "2019년"],
    ["전세임대", "성명,연락처,주소,주민번호 등", "2019년"],
    ["재개발임대", "성명,연락처,주소,주민번호 등", "2019년"],
  ],
};

export const privacyThirdPartyData = {
  headers: [
    "제공받는 자",
    "제공목적",
    "제공하는 개인정보의 항목",
    "보유/이용 기간",
    "제공근거",
  ],
  data: [
    [
      "금융결제원",
      "가입은행·점유·저축은행\n순회·저축금액\n납입인정회차\n납입인정횟수\n조회, 주택소유여부 및\n무주택기간 조회,\n과거당첨사실 조회,\n재당첨제한 관리",
      "부모기기관, 거주지역,\n거주시작일,\n현주택취득일\n[계약연료, 순위, 저축금액 등],\n이름, 주민등록번호,\n세대주성명,\n세대주와의 관계, 신청자와 속한\n세대의 세대원 이름,\n세대원 주민등록번호,\n주소, 휴대전화번호,\n일반전화번호, 이메일",
      "10년",
      "주택법 제38조의 7 및\n주택공급에 관한 규칙 제24조,\n제50조,제52조,제57조",
    ],
    [
      "한국사회보장정보원",
      "소득자산 조회",
      "성명, 주민등록번호, 주소,\n세대원, 세대주주민등록번호,\n핸드폰번호, 이메일",
      "10년",
      "공공주택특별법 제48조",
    ],
    [
      "국세청",
      "국세부과 및\n납세관리에 활용",
      "성명, 주민등록번호,\n계좌번호, 수령금액",
      "국세자료로 5년",
      "개인정보보호법 제18조 제2항\n제2호,\n과세자료의 제출 및 관리에\n관한 법률 제5조 및 제8조,\n국세기본법 제85조",
    ],
    [
      "한국부동산원",
      "주택소유여부\n중복 입주 등 확인",
      "- 신청자 : 이름, 주민등록번호(외국인번호)\n- 세대구성원 : 이름, 주민등록번호(외국인번호),\n신청자와의 관계",
      "당첨자 : 5년,\n계약자 : 영구",
      "공공주택특별법 제48조의 3",
    ],
    [
      "지자체",
      "주택소유이력확인,\n지역선발 배점 부과,\n수급자격 확인",
      "성명, 주민등록번호,\n계약내역, 전입·퇴거내역,\n계약 및 수납내역(변경이력 포함),\n모집공고내역, 모집공고 지원자격",
      "국세자료로 5년",
      "개인정보보호법\n제18조 제2항 제2호,\n지방세기본법\n제134조의 6\n공공주택특별법\n제53조의 2",
    ],
    [
      "국민권익위원회",
      "공공기관의\n청렴도 평가를 위한\n민원인 및 직원에 대한\n설문조사 실시",
      '"토지 등 소유" 민원인\n- 성명, 전화번호, 모집공고신청일, 모집공고액\n- 임대주택 계약자\n- 성명, 전화번호, (재)계약일\n- 공사·용역·물품 계약자\n- 계약일, 계약금액, 업체대표자·현장소장·현장대리인·하도급자의 성명, 전화번호, 이메일\n- 입찰참가자의 성명, 전화번호, 이메일',
      "해당년도 청렴도\n조사완료시까지",
      "개인정보보호법 제18조 제2항\n제2호,\n부패방지 및 국민권익위원회의\n설치와 운영에 관한 법률\n제12조 제6호, 제29조 제1항",
    ],
    [
      "임대주택\n위탁관리업체",
      "임대주택 입주자 관리",
      "성명, 주민번호, 연락처, 주소",
      "[입주자로 선정되지\n않은 자] : 6개월,\n[입주대상자] :\n임대차 계약\n체결시까지,\n[계약자] :\n임대차계약기간",
      "공공주택 특별법 제48조\n및 제48조의7",
    ],
    [null, "거주자 실태조사", null, null, null],
    [
      "거주자\n실태조사 업무\n수탁자",
      "거주자 실태조사",
      "성명, 주민번호, 연락처, 주소",
      "[입주자로 선정되지\n않은 자] : 6개월,\n[입주대상자] :\n임대차 계약\n체결시까지,\n[계약자] :\n임대차계약기간",
      "공공주택 특별법 제48조\n및 제48조의7",
    ],
    [
      "고객만족도\n조사 업무\n수탁자",
      "입주자 고객만족도 조사",
      "성명, 연락처, 이메일, 생년월일",
      "해당년도 만족도\n조사완료시까지",
      "공공기관 운영에 관한 법률\n제13조 제2항,\n동법시행령 제17조 제3항",
    ],
  ],
};

export const privacyConsignmentData = {
  headers: ["위탁업무명", "위탁개인정보", "수탁자(업체명)"],
  data: [
    [
      "통합정보시스템\n유지관리 용역",
      "MBIS 모집 개인정보(성명, 주민번호, 주소)",
      "앤시정보기술(주)",
    ],
    [
      "전자청약시스템\n유지관리 용역",
      "전자청약 모집 개인정보 (성명, 주민번호, 주소)",
      "(주)이피코",
    ],
    [
      "홈페이지\n유지관리 용역",
      "고객의소리 정보(성명, 전화번호)",
      "(주)케어비즈",
    ],
    [
      "표준가격관리시스템\n유지보수 용역",
      "전자결재 등 타시스템 연동관련 개인정보",
      "비지니스온커뮤니케이션",
    ],
    [
      "수익은 안내문(고지서) 제작,\n인쇄, 봉합 및 발송, 임대주택\n상가 임대료 독촉장 등\n우편물발송서비스",
      "성명, 주소, 납부금액",
      "(주)디앤디",
    ],
    [
      "전세임대\n업무대행 용역",
      "전세임대 계약자(이름, 주민번호, 주소, 연락처)",
      "법무법인 효운",
    ],
    ["매입임대 수탁 위탁관리 용역", "이름, 주소, 연락처", "(주)연지종합관리"],
    [
      "남부민동\n국민행복주택\n위탁관리 용역",
      "임대계약자 성명, 주민등록번호, 휴대전화번호, 주소",
      "(주)에머슨퍼시픽서비스",
    ],
    ["동매역 행복주택\n위탁관리 용역", null, null],
    ["만덕지구 행복주택\n위탁관리 용역", null, null],
    ["부곡지구\n행복주택 위탁관리 용역", null, "남부주택 주식회사"],
    ["공동주택\n(도시 투승 아파트) 관리", null, "주식회사 우경종합관리"],
    ["정관에이스빌 행복주택\n위탁관리 용역", null, "주식회사 제인티에스"],
    ["구포도시 공공임대주택\n위탁관리 용역", null, "주식회사 모아진"],
    ["시청역 행복주택 2단지\n위탁관리 용역", null, "(주)신성주택관리"],
    ["여의 행복주택", null, null],
    ["일광 행복주택", null, null],
    [
      "더 테라스 아카데미 집합건물 관리\n위탁용역",
      null,
      "(주)디에이치오",
    ],
    [
      "임대계약자 개인정보",
      "임대료 모바일 전자고지 및 수납 관련 개인업무",
      "주식회사 카카오페이\n(주)이지스엔",
    ],
    [
      "아르피나\n통합관리시스템 유지보수",
      "고객\n개인정보(이름,주소,이메일,휴대전화번호,\n연락처, 주민등록번호)",
      "(주)케이피아이티소프트",
    ],
  ],
};

export const privacyPolicyDetailsData = {
  revisions: [],
  chapters: [
    {
      articles: [
        {
          title: "제1조 개인정보의 처리목적",
          content: `(이 아래부터는 개인정보 처리방침의 상세 내용이 article 형태로 쭉 나열됩니다.)`,
        },
      ],
    },
  ],
}; 