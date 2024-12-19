import {
  web,
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  carrent,
  jobit,
  tripguide,
} from "../assets";

import logo from '../assets/logo.png';
import eCommerce from '../assets/e-commerce.png';
import hotel from '../assets/hotel.png';
import shopping from '../assets/shopping.png';

export const navLinks = [
  {
    id: "about",
    title: "Hakkımda",
  },
  {
    id: "work",
    title: "Deneyim",
  },
  {
    id: "projects",
    title: "Projeler",
  },
  {
    id: "contact",
    title: "İletişim",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  }
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
];

const experiences = [
  {
    title: "FULL STACK DEVELOPER INTERN",
    company_name: " PurpleBox, Inc.",
    icon: logo,
    iconBg: "#383E56",
    date: "Jul 2024 - Sep 2024",
    points: [
      "AWS Cognito ve IAM gibi güçlü hizmetleri kullanma fırsatım oldu. Bu hizmetlerle, kullanıcıların güvenli bir deneyim yaşaması sağlandı.",
      "Kayıt olduktan sonra, kullanıcılar kolayca giriş yapabiliyor, çıkış yapabiliyor ve şifrelerini değiştirebiliyor.",
      "Şifre sıfırlama işlemi, kullanıcıya e-posta ile gönderilen bir doğrulama kodu ile gerçekleştiriliyor.",
      "Bu site, kullanıcıların favori ürünlerini sepete eklemelerine ve ödeme işlemlerini güvenli bir şekilde tamamlamalarına olanak tanıyor.",
    ],
  },
  {
    title: "GAME DEVELOPER INTERN",
    company_name: "EL-CAPITAN",
    icon: logo,
    iconBg: "#383E56",
    date: "Oct 2023 - Feb 2024",
    points: [
      "Mobil oyun geliştirme alanında çeşitli projelerde çalışarak değerli deneyimler kazandım. Bu, oyun mekaniği ve kullanıcı deneyimi konusundaki anlayışımı geliştirdi.",
      "Oyunlara reklam entegrasyonu yapmaya odaklandım ve kullanıcı etkileşimini iyileştirirken gelir optimizasyonu sağladım.",
      "Reklamların oyunlara nasıl entegre edileceğini öğrenerek, kullanıcıların oyun içi deneyimlerini daha verimli hale getirdim.",
      "Bu süreç, hem oyunların gelir elde etmesini hem de kullanıcıların daha etkileşimli bir deneyim yaşamasını sağladı.",
    ],
  },
  {
    title: "FRONT END DEVELOPER INTERN",
    company_name: "BSK Information Technologies",
    icon: logo,
    iconBg: "#383E56",
    date: "Jul 2022 - Dec 2022",
    points: [
      "Web siteleri tasarlarken değerli deneyimler kazandım ve etkileşimli öğeler eklemek için JavaScript kullandım. Tasarımlarım, işlevselliği ve estetiği artıran, kullanıcı dostu arayüzlere odaklanmaktadır.",
      "Her tasarımda, kullanıcıların deneyimini iyileştirmeyi amaçladım ve bu süreç, hem işlevsel hem de estetik açıdan güçlü web siteleri oluşturmamı sağladı.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
];

const projects = [
  {
    name: "E-Ticaret Sitesi",
    description:
      " Farklı kategorilerdeki ürünler gözden geçirilebilir, sepete eklenebilir ve güvenli ödeme işlemleriyle alışveriş yapılabilir.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "amazonWebServices",
        color: "green-text-gradient",
      },
      {
        name: "postman",
        color: "pink-text-gradient",
      },
    ],
    image: eCommerce,
    source_code_link: "https://github.com/",
  },
  {
    name: "Rezervasyon Web Sitesi",
    description:
      "Otel rezervasyonlarını yönetmeyi, mevcut odaları sergilemeyi ve müşteri etkileşimlerini kolaylaştırmayı amaçlamaktadır.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "mongoDB",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: hotel,
    source_code_link: "https://github.com/",
  },
  {
    name: "Spor Alışveriş Platformu",
    description:
      "Kullanıcılar, ürünleri görüntüleyebilir, sepete ekleyebilir ve satın alma işlemlerini gerçekleştirebilir.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: shopping,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
