import SDDS from '../../../static/img/sdds_main.png';
import PPLE from '../../../static/img/pple.png';
import GREEN from '../../../static/img/green-new-map.png';
import BUCKIT from '../../../static/img/buckit.png';
import IMAGINCUP from '../../../static/img/imaginecup.png';
import BEGINLAB from '../../../static/img/beginlab.png';

export const sdds = {
  title: 'NoCoding 웹사이트 제작 및 배포 Sass',
  project_description:
    '프로그래밍에 대한 지식없이 웹사이트를 제작하고 배포할 수 있도록 도와주는 서비스입니다. 화면 UI 를 Drag and Drop 으로 만들고 배포 요청을 하면 AWS 를 활용하여 사용자의 웹사이트를 배포할 수 있습니다. API 서버와 aws 아키텍쳐 설게 및 제작을 맡았습니다',
  skill_content: [
    '자동 배포를 위한 서버개발과 인프라를 구성했습니다.',
    '페이지 및 주문 정보를 관리를 위한 API 를 개발했습니다.',
    '사용자가 만든 사이트는 정적파일로 전송되고 이를 S3를 사용하여 배포합니다.',
    '향후 VM과 Docker 를 활용하여 컨테이너화를 할 수 있도록 수정할 예정입니다.',
  ],
  skill_stacks: ['AWS', 'Azure', 'NestJs', 'Typescript', 'TypeORM', 'MySQL'],
  image: SDDS,
  github_url: 'https://github.com/orgs/SejongDDS/repositories',
};

export const pple = {
  title: '수혈자와 헌혈자 매칭 플랫폼 "피플"',
  project_description:
    '수혈자와 헌혈자를 사연과 채팅 등을 통해 매칭해주는 플랫폼 서비스입니다. 공동 창업자 및 개발자로 프로젝트에 참여했고, "함께일하는재단" 에서 5000만원 투자를 유치했습니다.',
  skill_stacks: ['AWS', 'React', 'SpringBoot', 'JPA', 'MySQL'],
  image: PPLE,
  github_url: 'https://github.com/nookcoder/pple-main-web-client',
};

export const green = {
  title: '탄소 배출량 시각화 웹 서비스 "그린뉴맵"',
  project_description:
    '기업의 탄소배출량, 업종별 탄소배출량, 지역별 탄소배출량을 TreeMap, 그래프, 도표 등을 통해 시각화한 웹 서비스로 제9회 공공데이터 BI 공모전 제품 및 서비스 부문에서 장려상을 수상했습니다.' +
    '해당 프로젝트에서 회사별 탄소배출량 정보 웹 크롤링 및 가공하기, Kakao Map API 를 사용하여 배출량 시각화를 담당했습니다.',
  skill_stacks: ['React', 'AWS', 'HTML', 'CSS', 'NodeJS'],
  image: GREEN,
  github_url: 'https://github.com/nookcoder/greenMap',
};

export const buckit = {
  title: '로컬비즈니스 조각투자 플랫폼 "버킷"',
  project_description:
    '술집, 카페 등과 같은 로컬비즈니스에 투자를 할 수 있는 조각투자 플랫폼입니다. 투자금에 비례하여 지분을 가져가고 매달 발생되는 이익금을 배당금으로 가져가는 서비스입니다.' +
    '창업 스타팅 멤버로, 웹, 백엔드, 인프라 구축, 비용 관리 등 개발과 관련한 모든 부분을 담당했습니다. 2000만원의 투자금을 유치했습니다.',
  skill_stacks: ['React', 'AWS', 'NestJS', 'MySQL', 'TypeORM', 'Flutter'],
  image: BUCKIT,
  github_url: 'https://github.com/nookcoder/buckit_back_end',
};

export const imagine = {
  title: '자가 우울증 치료앱 "Megical"',
  project_description:
    "Microsoft 에서 개최하는 개발자 대회 'ImagineCup' 에 Asia 대표로 갔던 안드로이드 앱입니다. 사용자가 데일리 질문에 답변을 달면 감정분석 결과값과 우울지수 모델을 사용하여 현재 우울증 지수를 계산합니다" +
    '우울증 수준에 따라 미션, 게임을 제공하고 난이도, 횟수, 시간 등을 다르게 제공합니다. Azure Cognitive Service 를 사용하여 우울증 계산 모델를 설계 및 구현하고 DB 설계 및 Android 개발을 담당했습니다.',
  skill_stacks: ['Azure', 'Java', 'MySQL', 'Cognitive Service'],
  image: IMAGINCUP,
  github_url: 'https://github.com/nookcoder/buckit_back_end',
};

export const beginlab = {
  title: '취업 직무 교육 부트캠프 "비긴랩"',
  project_description:
    "'비긴랩'은 취업을 위한 직무 교육 부트캠프입니다. 서비스 기획 및 운영, 마케팅을 담당하고 웹페이지를 개발 및 운영했습니다. 코스는 인사 담당자, 바이오 인포매틱스, R&D 테크니션 총 3가지가 있고, Python 강사를 역임했습니다.",
  skill_stacks: ['S3', 'CloudFront', 'React', 'Firebase'],
  image: BEGINLAB,
  github_url: 'https://github.com/nookcoder/begin-lab-web',
};
