import {
  benefitIcon1,
  benefitIcon2,
  benefitIcon3,
  benefitIcon4,
  benefitImage2,
  discordBlack,
  facebook,
  file02,
  framer,
  homeSmile,
  instagram,
  notification2,
  notification3,
  notification4,
  biceps,
  bloodcell,
  cell,
  digestion,
  eye,
  heart,
  kidney,
  lungs,
  plusSquare,
  roadmap1,
  roadmap2,
  roadmap3,
  roadmap4,
  searchMd,
  telegram,
  twitter,
  appstore,
  googleplay,
  star,
  googlePlayIcon,
  windows,
  applelogo,
  rustore,
  systemaWhiteSymbol
} from "../../public/assets";

export const navigation = [
  {
    id: "0",
    title: "3D-сцены",
    url: "#features",
  },
  {
    id: "1",
    title: "Особенности",
    url: "#how-to-use",
  },
  {
    id: "2",
    title: "Учебные курсы",
    url: "#roadmap",
  },
  {
    id: "3",

    title: "Цены",
    url: "#pricing",
  },
  
];

export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

export const notificationImages = [notification4, notification3, notification2];

export const stores = [appstore, googleplay];

export const auditore = [
  "Студентам-медикам",
  "Преподавателям и учителям",
  "Врачам и медицинскому персоналу",
];

export const platformIcons = [
  windows,
  googlePlayIcon,
  systemaWhiteSymbol,
  applelogo,
  rustore,

];

export const roadmap = [
  {
    id: "0",
    title: "Курс: Нервная система",
    text: "18 интерактивных 3D-сцен, 232 метки, 10 лекций, 20 академических часов",
    date: "2023",
    status: "done",
    imageUrl: roadmap1,
    colorful: true,
  },
  {
    id: "1",
    title: "Курс: Остеология",
    text: "87 интерактивных 3D-сцен, 1165 меток, 4 лекции, 8 академических часов",
    date: "Май 2024",
    status: "done",
    imageUrl: roadmap2,
  },
  {
    id: "2",
    title: "Курс: Органы чувств",
    text: "8 интерактивных 3D-сцен, 64 метки, 4 лекции, 8 академических часов",
    date: "Июль 2024",
    status: "progress",
    imageUrl: roadmap3,
    button: true
  },
  {
    id: "3",
    title: "Курс: Миология",
    text: "87 интерактивных 3D-сцен, 1548 меток, 8 лекций, 16 академических часов",
    date: "Сентябрь 2024",
    status: "progress",
    imageUrl: roadmap4,
  },
];

export const collabText = "Разработаны совместно с преподавателями Военно-медицинской академии им. С. М. Кирова под научным руководством Гайворонского И. В.";

export const collabContent = [
  {
    id: "0",
    title: "Соответствует образовательным стандартам",
  },
  {
    id: "1",
    title: "Разработано на русском языке",
  },
  {
    id: "2",
    title: "Готовые уникальные учебные материалы",
  },
];

export const collabApps = [
  {
    id: "0",
    title: "Почка",
    icon: kidney,

    width: 26,
    height: 36,
  },
  {
    id: "1",
    title: "Клетка крови",
    icon: bloodcell,
    width: 34,
    height: 36,
  },
  {
    id: "2",
    title: "Сердце",
    icon: heart,
    width: 36,
    height: 28,
  },
  {
    id: "3",
    title: "Клетка человека",
    icon: cell,
    width: 34,
    height: 35,
  },
  {
    id: "4",
    title: "Пищеварение",
    icon: digestion,
    width: 34,
    height: 34,
  },
  {
    id: "5",
    title: "Глаз",
    icon: eye,
    width: 34,
    height: 34,
  },
  {
    id: "6",
    title: "Бицепс",
    icon: biceps,
    width: 26,
    height: 34,
  },
  {
    id: "7",
    title: "Легкие",
    icon: lungs,
    width: 38,
    height: 32,
  },
];

export const pricing = [
  {
    id: "0",
    title: "Базовый",
    description: "Доступен каждому пользователю для знакомства с функционалом",
    price: "0",
    features: [
      "Демо-сцены в каждом курсе",
      "Единый доступ на любом устройстве",
      "Акция внутри приложения",
    ],
    iconColor: "#FFC876",
    buttonColor: "bg-color-2/70",
    titleColor: "text-color-2",
  },
  {
    id: "1",
    title: "Подписка PRO",
    description: "Подписка для полного доступа к образовательным материалам",
    price: "199",
    features: [
      "Доступ ко всем 3D-сценам",
      "Доступ к лекционному материалу",
      "Сохранение заметок",
    ],
    iconColor: "#AC6AFF",
    buttonColor: "bg-color-1",
    titleColor: "text-color-1",
  },
  {
    id: "2",
    title: "Для организаций",
    description: "Решение для юридических лиц с пакетом лицензий",
    price: null,
    features: [
      "Быстрое внедрение в вашу организацию",
      "Работаем по 84-ФЗ",
      "Договор на индивидуальных условиях",
    ],
    iconColor: "#FF776F",
    buttonColor: "bg-color-3",
    titleColor: "text-color-3",
  },
];

export const benefits = [
  {
    id: "0",
    title: "Ask anything",
    text: "Lets users quickly find answers to their questions without having to search through multiple sources.",
    backgroundUrl: "/assets/benefits/card-1.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "1",
    title: "Improve everyday",
    text: "The app uses natural language processing to understand user queries and provide accurate and relevant responses.",
    backgroundUrl: "/assets/benefits/card-2.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "2",
    title: "Connect everywhere",
    text: "Connect with the AI chatbot from anywhere, on any device, making it more accessible and convenient.",
    backgroundUrl: "/assets/benefits/card-3.svg",
    iconUrl: benefitIcon3,
    imageUrl: benefitImage2,
  },
  // {
  //   id: "3",
  //   title: "Fast responding",
  //   text: "Lets users quickly find answers to their questions without having to search through multiple sources.",
  //   backgroundUrl: "/assets/benefits/card-4.svg",
  //   iconUrl: benefitIcon4,
  //   imageUrl: benefitImage2,
  //   light: true,
  // },
  // {
  //   id: "4",
  //   title: "Ask anything",
  //   text: "Lets users quickly find answers to their questions without having to search through multiple sources.",
  //   backgroundUrl: "/assets/benefits/card-5.svg",
  //   iconUrl: benefitIcon1,
  //   imageUrl: benefitImage2,
  // },
  // {
  //   id: "5",
  //   title: "Improve everyday",
  //   text: "The app uses natural language processing to understand user queries and provide accurate and relevant responses.",
  //   backgroundUrl: "/assets/benefits/card-6.svg",
  //   iconUrl: benefitIcon2,
  //   imageUrl: benefitImage2,
  // },
];

export const reviews = [
  {
    backgroundUrl: "/assets/background1.jpg",
    text: "“Не описать словами, насколько это удобное, четкое и понятное приложение! Студент-медик в полном восторге! Жду появления следующих тем для сдачи сессии на \"отлично\"!”",
    author: "Яна Панарина",
    job: "студент-медик",
    backgroundUrl: "/assets/benefits/card-1.svg",
  },
  {
    backgroundUrl: "/assets/background2.jpg",
    text: "“Systema удобна в использовании, удобно детально демонстрировать объекты. Можно использовать как для объяснений, так и для контроля знаний.”",
    author: "Ольга Александровна Щагина",
    job: "заведующая методическим кабинетом ЭБЦ \"Крестовский остров\" ГБНОУ \"СПБ ГДТЮ\"",
    backgroundUrl: "/assets/benefits/card-1.svg",
  },
  {
    backgroundUrl: "/assets/background3.jpg",
    text: "“Мне, как врачу неврологу с 30-летнем стажем,  приятно видеть такой Правильный Атлас в действии и в работе. Спасибо авторам, разработчикам и создателям!”",
    author: "Владислав Иванович Дроздовский",
    job: "Врач невролог, иглорефлексотерапевт ООО \"ИНО КЛИНИК\"",
    backgroundUrl: "/assets/benefits/card-1.svg",
  }
];

export const modeltypes = [
  {
    backgroundUrl: "/assets/modeltypes/hand.png",
    title: "Макроструктуры",
  },
  {
    backgroundUrl: "/assets/modeltypes/neuron.png",
    title: "Микроструктуры",
  },
  {
    backgroundUrl: "/assets/modeltypes/reflex.png",
    title: "Физиология",
  }
];


export const socials = [
  {
    id: "0",
    title: "Discord",
    iconUrl: discordBlack,
    url: "#",
  },
  {
    id: "1",
    title: "Twitter",
    iconUrl: twitter,
    url: "#",
  },
  {
    id: "2",
    title: "Instagram",
    iconUrl: instagram,
    url: "#",
  },
  {
    id: "3",
    title: "Telegram",
    iconUrl: telegram,
    url: "#",
  },
  {
    id: "4",
    title: "Facebook",
    iconUrl: facebook,
    url: "#",
  },
];
