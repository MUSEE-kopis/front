import { SafariShareIconIcon, SafariAddHomeIcon } from '../assets/icons';

export const MOBILE_SIZE = '420px';

export const FONT_WEIGHT = {
  LIGHT: {fontWeight: 400},
  MEDIUM: {fontWeight: 500},
  SEMIBOLD: {fontWeight: 500},
  BOLD: {fontWeight: 600},
}

export const CURATION_FEED = {
  curation1: {
    title: '님의 취향에 딱 맞는 작품이에요'
  },
  curation2: {
    title: '지금 공연 중인 작품이에요 🎵'
  },
  curation3: {
    title: '여름에 보기 좋은 시원하고 재밌는 작품이에요 🌊'
  },
}

export const URL = {
  HOME: '/',
  SEARCH: '/search',
  TICKET: '/ticket',
  MYPAGE: '/mypage',
  NOT_FOUND: '*',
}

export const PWA_GUIDE = {
  safari_ios: [
    {
      text: <span>하단 <b style={{color: '#06c'}}>공유</b> 버튼을 눌러주세요</span>,
      icon: <SafariShareIconIcon />,
    },
    {
      text: <span><b style={{color: '#06c'}}>홈 화면에 추가</b> 버튼을 선택해주세요</span>,
      icon: <SafariAddHomeIcon />,
    },
    {
      text: <span><b style={{color: '#06c'}}>추가</b> 버튼을 눌러 설치를 완료해주세요</span>,
      icon: <span style={{color: '#06c'}}>추가</span>,
    }
  ],
  safari_desktop: <span><b>chrome</b> 브라우저에서 접속해주세요</span>,
  ios_other: <span><b>Safari</b> 브라우저에서 접속해주세요</span>,
}

export const GENRE_MAP = {
  CRIME: "범죄",
  FANTASY: "판타지",
  FAIRY_TALE: "동화",
  FAMILY: "가족극",
  ADVENTURE: "어드벤처",
  HEALING: "힐링극",
  ROMANCE: "로맨스",
  CHILD: "어린이뮤지컬",
  THRILLER: "스릴러",
  HISTORY: "시대극",
  DRAMA: "드라마",
  PHILOSOPHY: "철학",
  JAZZ: "재즈",
  HUMOR: "유머",
  COMEDY: "코미디",
  ROCK: "록",
  ACTION: "액션",
  OFFICE: "오피스",
  PARODY: "패러디",
  NON_VERBAL: "비언어극",
  PERFORMANCE: "퍼포먼스",
  ART: "아트",
  INTERACTIVE: "체험형",
  EMOTION: "감성",
  YOUTHFUL_GROWTH: "청춘성장",
  CABARET: "캬바레",
  FEMALE_ONLY: "여성전용",
  BAND_MUSICAL: "밴드뮤지컬",
  RELIGION: "종교",
  CLASSIC_NOVEL: "고전소설",
  TALK_CONCERT: "토크콘서트",
  ORIGINAL_OR_INTERNATIONAL: "오리지널/내한공연",
  CREATIVE_MUSICAL: "창작 뮤지컬",
  NUMBER_PERFORMANCE: "넘버별 퍼포먼스",
  ETC_MUSICAL: "기타 뮤지컬",
  LICENSE: "라이선스"
};
