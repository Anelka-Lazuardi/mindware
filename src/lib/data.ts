import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from 'react-icons/fa';
import {
  BoxPartnerType,
  BoxPartnerType2,
  CardsType,
  IconLinkType,
  NewsCardsType,
  PageAppType,
  boxSideToSide,
  boxSideToSideList,
  cardTechType,
  carouselType,
  counterType,
  linkMenuType,
} from './type';

export const solutionCards: CardsType[] = [
  {
    label: 'Data & Analytics',
    description:
      'Collect, organize, scrub and analyze reservoirs of raw data to make actionable decisions on business goals and increase process efficiency.',
    url: '/solutions/data-and-analytics',
    urlImage: 'https://www.mindware.net/ContentFiles/194Image.jpg',
  },
  {
    label: 'Infrastructure & Operations',
    description:
      'Build, optimize and maintain your foundations; physical, virtual, cloud or hybrid with a holistic visibility of operations across heterogeneous environments.',
    url: '/solutions/infrastructure-and-operations',
    urlImage: 'https://www.mindware.net/ContentFiles/35Image.jpg',
  },
  {
    label: 'Internet of Things',
    description:
      'Address operational challenges and accelerate business outcomes with our smart IoT solutions. We help you develop a tailored IoT strategy that specifically solves the issues your business faces, with..',
    url: '/solutions/internet-of-things',
    urlImage: 'https://www.mindware.net/ContentFiles/186Image.jpg',
  },
  {
    label: 'Public Cloud Services',
    description:
      'Embrace the cloud to increase performance and reliability, achieve instant resource provisioning and move from CapEX to OpEx so you can focus on business analytics and innovation.',
    url: '/solutions/public-cloud-services',
    urlImage: 'https://www.mindware.net/ContentFiles/178Image.jpg',
  },
  {
    label: 'Security & Risk Management',
    description:
      'Enhance your defenses for today and the future, attain compliance mandates and manage your organization’s risk levels',
    url: '/solutions/security-and-risk-management',
    urlImage: 'https://www.mindware.net/ContentFiles/112Image.jpg',
  },
  {
    label: 'Workplace',
    description:
      'Modernize your workforce with a flexible work environment and the agility to do business from anywhere.',
    url: '/solutions/workplace',
    urlImage: 'https://www.mindware.net/ContentFiles/168Image.jpg',
  },
];
export const serviceCards: CardsType[] = [
  {
    label: 'Cybersecurity',
    description:
      'Our Cybersecurity services deliver security, privacy and compliance strategies so that you can embrace new opportunities with low risk.',
    url: '/services/cybersecurity',
    urlImage: 'https://www.mindware.net/ContentFiles/84Image.jpg',
  },
  {
    label: 'Infrastructure Operations',
    description:
      'From the deployment of essential operational elements to configuring the administration and management tools of your entire environment.',
    url: '/services/infrastructure-operations',
    urlImage: 'https://www.mindware.net/ContentFiles/129Image.jpg',
  },
  {
    label: 'Cloud Migration & Modernization',
    description:
      'Modern technologies such as the cloud is at the forefront of digital transformation.',
    url: '/services/cloud-migration-amp-modernization',
    urlImage: 'https://www.mindware.net/ContentFiles/138Image.jpg',
  },
  {
    label: 'Cloud Architecture',
    description: 'For business leaders adopting the digital-first world',
    url: '/services/cloud-architecture',
    urlImage: 'https://www.mindware.net/ContentFiles/139Image.jpg',
  },
  {
    label: 'Modern Workplace Enablement',
    description:
      'Workforce tools have become agile and are bringing in new workstyles.',
    url: '/services/modern-workplace-enablement',
    urlImage: 'https://www.mindware.net/ContentFiles/140Image.jpg',
  },
  {
    label: 'Education & Training',
    description:
      'Our Education and Training services delivered will empower your administrators and managers to have a deeper understanding of your product investments on a tactical and operational level.',
    url: '/services/education-and-training',
    urlImage: 'https://www.mindware.net/ContentFiles/141Image.jpg',
  },
];

export const dataCarousel: carouselType[] = [
  {
    title: 'TOGETHER TOWARDS GREATNESS',
    description:
      'Human-centricity is the hallmark of great innovation and at Mindware, people are our strength. From our expertly qualified team members, to our pioneering vendor resources and our highly-skilled channel partners - it is people and relationships that enable us to actively shape the digital future of the region',
    urlImage: '/image/bg-first.jpg',
    button: 'ABOUT MINDWARE',
  },
  {
    title: 'MINDWARE CLOUD',
    description:
      'Disrupt legacy. Become cloud-ready. Scale confidently and cost-effectively.',
    urlImage: '/image/bg-second.jpg',
    button: 'LEARN MORE',
  },
  {
    title: ' MINDWARE STORE IS HERE',
    description:
      'Online buying experience. User-friendly platform. Open 24/7 for business orders.',
    urlImage: '/image/bg-third.png',
    button: 'LEARN MORE',
  },
];

export const linkMenu: linkMenuType[] = [
  { label: 'About Us', url: '/about-us' },
  { label: 'Solutions', url: '/solutions' },
  { label: 'Services', url: '/services' },
  { label: 'Technology Partners', url: '/technology-partners' },
  { label: 'Channel Partners', url: '/channel-partners' },
  { label: 'Promotions', url: '/promotions' },
  {
    label: 'News & Insights',
    url: 'https://www.mindware.net/news-and-insights',
  },
  { label: 'Events', url: '/events' },
  { label: 'Contact Us', url: '/contact-us' },
];

export const newsCards: NewsCardsType[] = [
  {
    description:
      'Mindware Launches B2B eCommerce Website as Part of Digital Transformation Initiatives',
    label: 'September 20, 2022',
    url: 'https://www.mindware.net/news-and-insights/mindware-launches-b2b-ecommerce-website-as-part-of-digital-transformation-initiatives',
    urlImage: 'https://www.mindware.net/ContentFiles/544Image1.jpg',
    urlPdf: '',
  },
  {
    description: 'Mindware signs distribution agreement with Software AG ',
    label: 'March 09, 2022',
    url: 'https://www.mindware.net/news-and-insights/mindware-signs-distribution-agreement-with-software-ag',
    urlImage: 'https://www.mindware.net/ContentFiles/522Image1.PNG',
    urlPdf: '',
  },
  {
    description:
      'Mindware and EC-Council sign agreement in MENA to develop cybersecurity skills',
    label: 'September 14, 2021',
    url: 'https://www.mindware.net/news-and-insights/mindware-and-ec-council-sign-agreement-in-mena-to-develop-cybersecurity-skills',
    urlImage: 'https://www.mindware.net/ContentFiles/498Image1.png',
    urlPdf: '',
  },
  {
    description: 'Mindware and Quest partner in GCC and Levant ',
    label: 'September 14, 2021',
    url: 'https://www.mindware.net/news-and-insights/mindware-and-quest-partner-in-gcc-and-levant',
    urlImage: 'https://www.mindware.net/ContentFiles/497Image1.png',
    urlPdf: '',
  },
  {
    description:
      'Mindware and ESET Sign Distribution Agreement for the Middle East',
    label: 'April 26, 2021',
    url: 'https://www.mindware.net/news-and-insights/mindware-and-eset-sign-distribution-agreement-for-the-middle-east',
    urlImage: 'https://www.mindware.net/ContentFiles/435Image1.PNG',
    urlPdf: '',
  },
  {
    description: 'Mindware signs distribution agreement with Oracle',
    label: 'April 01, 2021',
    url: 'https://www.mindware.net/news-and-insights/mindware-signs-distribution-agreement-with-oracle1',
    urlImage: 'https://www.mindware.net/ContentFiles/434Image1.PNG',
    urlPdf: '',
  },
  {
    description:
      'Mindware partners with Circularo to enter the expanding digital signature market in the GCC',
    label: 'March 04, 2021',
    url: 'https://www.mindware.net/news-and-insights/mindware-partners-with-circularo-to-enter-the-expanding-digital-signature-market-in-gcc1',
    urlImage: 'https://www.mindware.net/ContentFiles/366Image1.PNG',
    urlPdf: '',
  },
  {
    description:
      'Mindware Partners with Cibecs to Help Companies Protect Distributed Endpoint Devices and Data',
    label: 'February 28, 2021',
    url: 'https://www.mindware.net/news-and-insights/mindware-partners-with-cibecs-to-help-companies-protect-distributed-endpoint-devices-and-data',
    urlImage: 'https://www.mindware.net/ContentFiles/361Image1.PNG',
    urlPdf: '',
  },
  {
    description: 'Mindware to distribute Google’s Nest Thermostat in the UAE',
    label: 'February 24, 2021',
    url: 'https://www.mindware.net/news-and-insights/mindware-to-distribute-googles-nest-thermostat-in-the-uae',
    urlImage: 'https://www.mindware.net/ContentFiles/360Image1.PNG',
    urlPdf: '',
  },
  {
    description:
      'Mindware and Rubrik enter agreement to deliver Cloud friendly data protection',
    label: 'January 26, 2021',
    url: 'https://www.mindware.net/news-and-insights/mindware-and-rubrik-enter-agreement-to-deliver-cloud-friendly-data-protection',
    urlImage: 'https://www.mindware.net/ContentFiles/323Image1.PNG',
    urlPdf: '',
  },
  {
    description:
      'Mindware and Avnet bring world class IoT solutions to the region!',
    label: 'December 09, 2020',
    url: 'https://newzbusiness.com/mindware-and-avnet-are-partnering-to-bring-avnets-iotconnect/',
    urlImage: 'https://www.mindware.net/ContentFiles/286Image1.JPG',
    urlPdf: '',
  },
  {
    description:
      'Mindware Signs Distribution Agreement with HTC VIVE for Enterprise Virtual Reality Solutions',
    label: 'November 03, 2020',
    url: 'https://www.mindware.net/news-and-insights/mindware-signs-distribution-agreement-with-htc-vive-for-enterprise-virtual-reality-solutions',
    urlImage: 'https://www.mindware.net/ContentFiles/252Image1.jpg',
    urlPdf: '',
  },
  {
    description: 'Forward &amp; Ahead',
    label: 'September 25, 2020',
    url: 'https://www.mindware.net/news-and-insights/forward-amp-ahead',
    urlImage: 'https://www.mindware.net/ContentFiles/250Image1.jpg',
    urlPdf:
      'https://www.mindware.net/Library/Assets/Gallery/PDFs/Mindware-interview-RME-Sept 2020.pdf',
  },
  {
    description: 'Mindware Signs Distribution Deal with Acer',
    label: 'September 16, 2020',
    url: 'https://www.mindware.net/news-and-insights/mindware-signs-distribution-deal-with-acer',
    urlImage: 'https://www.mindware.net/ContentFiles/108Image1.jpg',
    urlPdf: '',
  },
  {
    description:
      'Mindware signs distribution agreement with Keysight Technologies',
    label: 'August 17, 2020',
    url: 'https://www.mindware.net/news-and-insights/mindware-signs-distribution-agreement-with-keysight-technologies',
    urlImage: 'https://www.mindware.net/ContentFiles/110Image1.jpg',
    urlPdf: '',
  },
  {
    description:
      'Mindware blends Microsoft and Riverbed tech to deliver WAN-optimisation solutions',
    label: 'August 14, 2020',
    url: 'https://www.mindware.net/news-and-insights/mindware-blends-microsoft-and-riverbed-tech-to-deliver-wan-optimisation-solutions',
    urlImage: 'https://www.mindware.net/ContentFiles/109Image1.jpg',
    urlPdf: '',
  },
  {
    description:
      'Mindware Enhances Cybersecurity Capabilities to Address Increasing Needs',
    label: 'June 02, 2020',
    url: 'https://www.mindware.net/news-and-insights/mindware-enhances-cybersecurity-capabilities-to-address-increasing-needs',
    urlImage: 'https://www.mindware.net/ContentFiles/258Image1.jpg',
    urlPdf:
      'https://www.mindware.net/Library/Assets/Gallery/PDFs/Mindware-news-ECMEA-June 2020.pdf',
  },
  {
    description: 'Mindware Collaborates With Microsoft for OEM Products',
    label: 'May 02, 2020',
    url: 'https://www.mindware.net/news-and-insights/mindware-collaborates-with-microsoft-for-oem-products',
    urlImage: 'https://www.mindware.net/ContentFiles/255Image1.jpg',
    urlPdf:
      'https://www.mindware.net/Library/Assets/Gallery/PDFs/Mindware-news-Smart SMB-May 2020.pdf',
  },
  {
    description: 'Mindware Signs Distribution Agreement with MITEL',
    label: 'May 02, 2020',
    url: 'https://www.mindware.net/news-and-insights/mindware-signs-distribution-agreement-with-mitel',
    urlImage: 'https://www.mindware.net/ContentFiles/256Image1.jpg',
    urlPdf:
      'https://www.mindware.net/Library/Assets/Gallery/PDFs/Mindware-news-ITC-May 2020.pdf',
  },
  {
    description: 'Mindware to Distribute ESET biz products in Saudi Arabia',
    label: 'May 02, 2020',
    url: 'https://www.mindware.net/news-and-insights/mindware-to-distribute-eset-biz-products-in-ksa',
    urlImage: 'https://www.mindware.net/ContentFiles/283Image1.jpg',
    urlPdf:
      'https://www.mindware.net/Library/Assets/Gallery/PDFs/Mindware-news-ECMEA1-May 2020.pdf',
  },
];

export const partnersBox: BoxPartnerType[] = [
  {
    label: 'Solution Suite',
    description:
      'Build powerful and comprehensive solution architectures, based on best-of-breed solutions from global leading technology vendors.',
    url: 'https://www.mindware.net/ContentFiles/279Image.jpg',
  },

  {
    label: 'Technical Services',
    description:
      'Deliver customised turn-key solutions for your end-customers with the support of our vendor-specific and cross-platform support.',
    url: 'https://www.mindware.net/ContentFiles/280Image.jpg',
  },
  {
    label: 'Education and Training',
    description:
      'Elevate your value-proposition by rapidly advancing your technical and sales expertise through our proven training programs.',
    url: 'https://www.mindware.net/ContentFiles/281Image.jpg',
  },
  {
    label: 'Logistics and Geo Coverage',
    description:
      'Accelerate your time to market and gain a competitive edge in the fast-paced digital world with our effective and expansive supply chain solutions.',
    url: 'https://www.mindware.net/ContentFiles/282Image.jpg',
  },
];

export const IconLinkData: IconLinkType[] = [
  {
    name: 'Facebook',
    url: 'https:www.facebook.com/mindwareVAD',
    Icon: FaFacebookF,
  },
  { name: 'Twitter', url: 'https://twitter.com/MindwareVAD', Icon: FaTwitter },
  {
    name: 'Linked In',
    url: 'https://www.linkedin.com/company/mindware/',
    Icon: FaLinkedinIn,
  },
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/mindwarevad/',
    Icon: FaInstagram,
  },
];

export const dataPageNotFound: PageAppType = {
  banner: {
    imgUrl: 'https://www.mindware.net/images/balance1.jpg',
  },
  key: 'not_found',
};

export const dataPageEvents: PageAppType = {
  banner: {
    imgUrl: 'https://www.mindware.net/ContentFiles/76BannerImage.jpg',
    title: 'Events',
  },
  key: 'events',
};
export const dataPagePromotions: PageAppType = {
  banner: {
    imgUrl: 'https://www.mindware.net/ContentFiles/11BannerImage.jpg',
    title: 'Promotions',
  },
  key: 'promotions',
};

export const dataPageSolutions: PageAppType = {
  banner: {
    imgUrl: 'https://www.mindware.net/ContentFiles/7BannerImage.jpg',
    title: 'solutions',
  },
  key: 'solutions',
  footerBox: {
    title: 'Get in Touch with our Solutions Team',
    description:
      'Mindware covers a wide range of technologies; come explore our extensive portfolio to learn more about how we can help with your business needs.',
    url: '/contact-us',
    urlLabel: 'request a demo',
  },
  boxSideToSide: {
    title:
      'REALIZE YOUR DIGITAL AMBITIONS WITH OUR COMPREHENSIVE SUITE OF WORLD-CLASS SOLUTIONS',
    description:
      'To successfully transform your business, you need world-class solutions that can be seamless integrated to serve the unique needs of your organisation. Through years of experience and constant, close collaboration with our valued partners and customers, we have expertly crafted a comprehensive and ever-expanding portfolio of best of breed solutions. Combined with our world-class services and support, this gives businesses of all sizes and market verticals a decisive digital advantage.',
  },
  listCard: {
    title: 'Our Solution',
    data: solutionCards,
  },
};
export const dataPageServices: PageAppType = {
  banner: {
    imgUrl: 'https://www.mindware.net/ContentFiles/8BannerImage.jpg',
    title: 'services',
  },
  key: 'solutions',
  footerBox: {
    title: 'Get in Touch with our Services Team',
    description:
      'Integrating a solution in a complex environment requires careful planning. Let our team of highly trained and certified engineers work on your projects while you stay focused on growing your business.',
    url: '/contact-us',
    urlLabel: 'start your project',
  },
  boxSideToSide: {
    title:
      'LET US EMPOWER YOUR WORKFORCE TO TRAIN AND IMPLEMENT NEW TECHNOLOGIES TAILORED TO YOUR ORGANIZATION',
    description:
      'We are here to provide you with certified subject-matter experts as an extension of your team to assist you with health check, architecture , design, deploy, migrate, upgrade and training services. Whether it is on-premise, cloud or hybrid, our resources are equipped with the experience to successfully ensure project success based on vendor’s best practices and Mindware’s tested methodology.',
  },
  listCard: {
    title: 'Our Services',
    data: serviceCards,
  },
};

export const partnersBoxDetail: BoxPartnerType2[] = [
  {
    label: 'Solution Suite',
    description: [
      'Elevate your value proposition, cater to new and evolving market requirements, extend relationships with existing customers, and transition from box moving to value-based selling.',
      'Mindware meticulously identifies, evaluates, and curates innovative technologies that meet the unique needs of regional businesses. Our product portfolio is comprised of best-of-breed solutions from global leading vendors that you can seamlessly and effortlessly integrate into powerful solutions architectures.',
    ],
    url: 'https://www.mindware.net/ContentFiles/266Image.jpg',
  },

  {
    label: 'Training, Education & Technical Services',
    description: [
      'Rapidly ramp up your technical skills sets and rise through vendor partner programs with our authorised training and certification programs. Our team of expertly qualified training professionals help you develop the in-house expertise you need to become the trusted digital transformation partner to your end-customers.',
      'Our technical and sales experts offer you world-class support through the entire pre-sales, nurturing, PoC, and support stages, helping you transform prospects into customers, and end-users into passionate brand advocates.',
    ],
    url: 'https://www.mindware.net/ContentFiles/67Image.jpg',
  },
  {
    label: 'Logistics And Geographic Coverage',
    description: [
      'With an ever-expanding network of offices and warehouses across the Middle East and Africa, combined with years of expertise in developing and implementing global supply chain management best practices, we have consistently set new benchmarks for logistics excellence in the region.',
      'Our efficient and effective supply chain solutions enable you to achieve a faster time to market, giving you a competitive edge in the fast-paced world of digital advancement, cloud, and eCommerce.',
    ],
    url: 'https://www.mindware.net/ContentFiles/68Image.jpg',
  },
  {
    label: 'Credit',
    description: [
      'Accelerate the growth of your channel business and confidently capitalise on new market opportunities with our tailored credit schemes, and attractive rewards and rebate programs.',
      'We enable our partners to maintain positive cash flow and adapt to ever-changing IT consumption models and market conditions by extending generous lines of credit, flexible payment terms, and dedicated financial expertise and support.',
    ],
    url: 'https://www.mindware.net/ContentFiles/69Image.jpg',
  },
  {
    label: 'Marketing',
    description: [
      'Build your brand, enhance market visibility and credibility, and fuel your sales funnel with our comprehensive suite of marketing services. Through a wide variety of innovative and proven marketing activities including lead-generation programs, SEO, live and virtual events, and outbound campaigns, we empower you to effectively penetrate new accounts and engage more consistently, meaningfully, and impactfully with new and existing customers.',
    ],
    url: 'https://www.mindware.net/ContentFiles/70Image.jpg',
  },
];
export const dataPageChannelPartners: PageAppType = {
  banner: {
    imgUrl: 'https://www.mindware.net/ContentFiles/10BannerImage.jpg',
    title: 'channnel partners',
  },
  key: 'channnel partners',
  footerBox: {
    title: 'Partner with Mindware',
    description:
      'Realize your ambition to build a profitable channel business with the support of a market leading distributor that is deeply committed to providing you with effortless access to truly world class support and technologies. Partner with us today and find out why over 4,000 channel organizations trust Mindware.',
    url: '/become-a-partner',
    urlLabel: 'become a channel partner',
  },
  boxSideToSide: {
    title: 'EMPOWERING YOU TO BUILD A SUCCESSFUL CHANNEL BUSINESS',
    description:
      'In the era of rapid technological advancement, cloud, and dynamic market conditions, you need a qualified and dedicated partner to establish and grow your channel practice. With our unfailing commitment to enabling our partners with truly world-class technical, marketing, financial and logistical support, it’s no wonder that over 4,000 channel organisations across the Middle East and Africa trust Mindware to empower their growth strategy',
  },
  listBox: partnersBoxDetail,
};

export const cardTechPartners: cardTechType[] = [
  {
    img: 'https://www.mindware.net/ContentFiles/39Logo.png',
    description:
      'ACER is dedicated to research, design, marketing, sale & support of products and solutions that break barriers b/w people & technology.',
    link: '/technology-partners/acer',
    label: 'Acer',
  },
  {
    img: 'https://www.mindware.net/ContentFiles/437Logo.png',
    label: 'Archer',
  },
  {
    img: 'https://www.mindware.net/ContentFiles/202Logo.png',
    description:
      'Whatever your objectives, Arcserve data protection solutions can help you manage and protect critical business data across your systems and applications, on your premises, and in your clouds.',
    label: 'Arcserve',
    type: ['infrastructure_operations', 'public_cloud_services'],
  },
  {
    img: 'https://www.mindware.net/ContentFiles/230Logo.png',
    description:
      'The Azure cloud platform is more than 200 products and cloud services designed to help customers bring new solutions to life—to solve today’s challenges and create the future.',
    label: 'Azure',
    type: ['public_cloud_services'],
  },
  {
    img: 'https://www.mindware.net/ContentFiles/349Logo.jpg',
    description:
      'We build enterprise-grade, cloud-ready security solutions, envisioning a safer world for businesses everywhere by delivering innovative security products that are easy to buy, deploy and use.',
    link: '/technology-partners/barracuda1',
    label: 'Barracuda',
  },
  {
    img: 'https://www.mindware.net/ContentFiles/510Logo.jpg',
    description:
      'With over 45 years of experience in connecting people and devices, Black Box is dedicated to helping organizations around the world embrace the future by ensuring business continuity and accelerating digital transformation.',
    link: '/technology-partners/black-box',
    label: 'Black Box',
  },
  {
    img: 'https://www.mindware.net/ContentFiles/540Logo.png',
    link: '/technology-partners/broadcom',
    label: 'BROADCOM',
  },
  {
    img: 'https://www.mindware.net/ContentFiles/241Logo.png',
    description:
      'Censornet provides full spectrum threat protection for your organisation and users - no matter where they are via single cloud security platform.',
    label: 'Censornet',
  },
  {
    img: 'https://www.mindware.net/ContentFiles/267Logo.png',
    description:
      'CIBECS Endpoint Cloud delivers the most advanced data management & protection technology in a single, centralized solution built for ease of use. A powerful endpoint data protection & management tool for IT.',
    label: 'Cibecs',
    type: [
      'infrastructure_operations',
      'public_cloud_services',
      'security_risk_management',
    ],
  },
  {
    img: 'https://www.mindware.net/ContentFiles/44Logo.png',
    description:
      'Citrix gives people the space they need –to think, to create, to succeed–with technology designed to help organizations power a secure and superior Employee Experience.',
    label: 'Citrix',
    type: [
      'infrastructure_operations',
      'public_cloud_services',
      'security_risk_management',
      'workplace',
    ],
  },
  {
    img: 'https://www.mindware.net/ContentFiles/227Logo.png',
    label: 'Cloudflare',
    type: ['security_risk_management'],
  },
  {
    img: 'https://www.mindware.net/ContentFiles/45Logo.png',
    description:
      'Dell Technologies has developed a strategy to support a wider range of organizations going through the modernization shift. This strategy aligns the converged approach into three basic systems: blocks, racks, and appliances.',
    label: 'Dell',
    type: [
      'data_analytics',
      'internet_of_things',
      'infrastructure_operations',
      'public_cloud_services',
      'workplace',
    ],
  },
  {
    img: 'https://www.mindware.net/ContentFiles/46Logo.png',
    description:
      'Eaton Emergency Lighting UPS will power your emergency egress lights and keep your employees and visitors safe in the event of a power outage.',
    link: '/technology-partners/eaton',
    label: 'EATON',
    type: ['infrastructure_operations'],
  },
  {
    img: 'https://www.mindware.net/ContentFiles/508Logo.png',
    label: 'EC - Council',
  },
  {
    img: 'https://www.mindware.net/ContentFiles/284Logo.JPG',
    description:
      'Entrust keeps the world moving safely by enabling trusted identities, payments and\ndata protection around the globe. Today more than ever, people demand\nseamless, secure experiences, whether they’re crossing borders, making a\npurchase, or accessing corporate networks. With our unmatched breadth of digital\nsecurity and credential issuance solutions, it’s no wonder the world’s most\nentrusted organizations trust us.',
    label: 'Entrust',
  },
  {
    img: 'https://www.mindware.net/ContentFiles/352Logo.png',
    description:
      'ESET is the #1 endpoint security partner from EU and for more than 30 years we have been developing industry-leading cybersecurity solutions for businesses and consumers worldwide.',
    link: '/technology-partners/eset1',
    label: 'ESET',
  },
  {
    img: 'https://www.mindware.net/ContentFiles/204Logo.png',
    description:
      "Humans Are the New Perimeter.Forcepoint protects your data and users.whoever,wherever they are.Forcepoint is transforming cybersecurity by focusing on understanding people's intent.",
    label: 'Forcepoint',
    type: ['public_cloud_services', 'security_risk_management'],
  },
  {
    img: 'https://www.mindware.net/ContentFiles/362Logo.png',
    label: 'Google Nest',
  },
  {
    img: 'https://www.mindware.net/ContentFiles/351Logo.png',
    description:
      'We enable businesses of all sizes to enhance their creativity, accelerate training, strengthen collaboration, and engage customers. Our combination of professional-grade hardware..',
    link: '/technology-partners/htc-vive',
    label: 'HTC Vive',
  },
  {
    img: 'https://www.mindware.net/ContentFiles/206Logo.png',
    description:
      'Huawei vision and mission is to bring digital to everyone. It drives ubiquitous connectivity ; brings cloud and AI and builds digital platforms to help all organizations become more agile and dynamic.',
    label: 'Huawei',
    type: ['infrastructure_operations'],
  },
  {
    img: 'https://www.mindware.net/ContentFiles/354Logo.png',
    description:
      'Inferrix IoT + AI Edge Platform simplifies the ‘Deployment, Use, Legacy Integration & Management of Intelligent Edge IoT Devices’ to Smartify Facilities..',
    link: '/technology-partners/inferrix1',
    label: 'Inferrix',
    type: ['internet_of_things'],
  },
  {
    img: 'https://www.mindware.net/ContentFiles/355Logo.jpg',
    description:
      'Ivanti is headquartered just outside Salt Lake City, in an area of the United States that the New York Times recently called “the next Silicon Valley.”',
    link: '/technology-partners/ivanti-1',
    label: 'Ivanti ',
  },
  {
    img: 'https://www.mindware.net/ContentFiles/210Logo.png',
    description:
      'Juniper Networks designs and markets IT networking products. It started out selling core routers for ISPs, and expanded into edge routers, data centers, wireless networking, networking for branch offices.',
    link: '/technology-partners/juniper',
    label: 'Juniper',
    type: [
      'infrastructure_operations',
      'public_cloud_services',
      'security_risk_management',
    ],
  },
  {
    img: 'https://www.mindware.net/ContentFiles/211Logo.png',
    description:
      'Leading technology provider for network visibility and Testing as a service,the network packet broker and test and simulation platforms used by service providers and enterprises.',
    link: '/technology-partners/keysight-technologies',
    label: 'Keysight Technologies',
    type: ['public_cloud_services'],
  },
  {
    img: 'https://www.mindware.net/ContentFiles/212Logo.png',
    description:
      'Kodak Alaris embraces change. Our custom solutions uniquely combine imaging science, artificial intelligence and process automation to turn clutter into clarity and data into power.',
    label: 'Kodak Alaris',
    type: ['workplace'],
  },
  {
    img: 'https://www.mindware.net/ContentFiles/213Logo.png',
    description:
      'Lenovo transforms customer experience with technology & We call this Intelligent Transformation. We are setting the stage for what’s possible with technology, by enhancing & elevating human capability.',
    label: 'Lenovo',
    type: ['infrastructure_operations', 'workplace'],
  },
  {
    img: 'https://www.mindware.net/ContentFiles/231Logo.png',
    description:
      'Microsoft 365 is designed to help people and businesses achieve more with innovative Office apps, intelligent cloud services, and world-class security.',
    label: 'M365',
    type: ['public_cloud_services'],
  },
  {
    img: 'https://www.mindware.net/ContentFiles/215Logo.png',
    description:
      'Microsoft enables digital transformation for the era of an intelligent cloud and edge. Its mission is to empower every person and organization on the planet to achieve more.',
    label: 'Microsoft',
    type: [
      'data_analytics',
      'infrastructure_operations',
      'internet_of_things',
      'public_cloud_services',
      'workplace',
    ],
  },
  {
    img: 'https://www.mindware.net/ContentFiles/356Logo.png',
    description:
      'With 45 years of industry leadership, we help businesses connect, collaborate, and provide better experiences for their customers. Mitel is trusted by 70 million business users in more than 100 countries.',
    link: '/technology-partners/mitel1',
    label: 'Mitel',
  },
  {
    img: 'https://www.mindware.net/ContentFiles/438Logo.png',
    label: 'NETWITNESS',
  },
  {
    img: 'https://www.mindware.net/ContentFiles/218Logo.png',
    description:
      'LAN & Data Centre infrastructure solutions to a global customer base including Nexans’ Engage program that provides support through all stages of even the most complex projects.',
    label: 'Nexans',
    type: ['infrastructure_operations'],
  },
  {
    img: 'https://www.mindware.net/ContentFiles/524Logo.png',
    link: '/technology-partners/one-identity',
    label: 'One Identity',
  },
  {
    img: 'https://www.mindware.net/ContentFiles/373Logo.png',
    description:
      'As an Oracle Value Added Distributor, Mindware helps partners develop, grow, innovate, by facilitating their access to the Oracle portfolio of hardware and software products. Mindware’s role is instrumental in both maintaining and evolving Oracle’s reach into MENA, by nurturing and supporting partners through their journey to the Cloud - be it private, hybrid or public.',
    label: 'Oracle',
  },
  {
    img: 'https://www.mindware.net/ContentFiles/459Logo.jpg',
    link: '/technology-partners/outseer---an-rsa-company',
    label: 'OUTSEER - An RSA Company',
  },
  {
    img: 'https://www.mindware.net/ContentFiles/219Logo.png',
    description:
      'Established in 1985, PNY is a global technology leader dedicated to consumer and business-grade electronics manufacturing.',
    link: '/technology-partners/pny',
    label: 'PNY',
  },
  {
    img: 'https://www.mindware.net/ContentFiles/525Logo.png',
    description:
      'Secure, simple, Microsoft platform migration and consolidation.',
    link: '/technology-partners/quest-1',
    label: 'Quest ',
  },
  {
    img: 'https://www.mindware.net/ContentFiles/542Logo.png',
    link: '/technology-partners/rampm',
    label: 'R&amp;M',
  },
  {
    img: 'https://www.mindware.net/ContentFiles/220Logo.jpg',
    description:
      'The Riverbed Network and Application Performance Platform enables organizations to visualize, optimize, accelerate and remediate the performance of any network for any application.',
    label: 'Riverbed',
    type: ['infrastructure_operations', 'public_cloud_services'],
  },
  {
    img: 'https://www.mindware.net/ContentFiles/441Logo.png',
    label: 'Rubrik',
  },
  {
    img: 'https://www.mindware.net/ContentFiles/439Logo.png',
    label: 'SecurID',
  },
  {
    img: 'https://www.mindware.net/ContentFiles/521Logo.jpg',
    label: 'Software AG',
  },
  {
    img: 'https://www.mindware.net/ContentFiles/519Logo.png',
    link: '/technology-partners/spidersilk',
    label: 'spiderSilk',
  },
  {
    img: 'https://www.mindware.net/ContentFiles/506Logo.png',
    description:
      'Founded in 1996, TP-Link is a global provider of reliable networking devices and accessories, involved in all aspects of everyday life.',
    link: '/technology-partners/tp-link',
    label: 'TP LINK',
  },
  {
    img: 'https://www.mindware.net/ContentFiles/214Logo.png',
    description:
      'Together is power.\nBuilt on a platform based on integration and automation, McAfee solutions help solve your biggest security challenges, and making the connected world more secure.',
    label: 'Trellix',
    type: ['public_cloud_services', 'security_risk_management'],
  },
  {
    img: 'https://www.mindware.net/ContentFiles/222Logo.png',
    description:
      'A trusted leader in cybersecurity,  making the world safe for exchanging digital information. provides layered security for cloud workloads, datacenters, networks, email, and endpoints.',
    label: 'Trend Micro',
    type: ['public_cloud_services', 'security_risk_management'],
  },
  {
    img: 'https://www.mindware.net/ContentFiles/357Logo.png',
    description: 'Thoughtful design meets network technology',
    link: '/technology-partners/ubiquiti1',
    label: 'Ubiquiti',
  },
  {
    img: 'https://www.mindware.net/ContentFiles/237Logo.png',
    description:
      'Vade Secure is a leader in predictive email defense, protecting 1 billion mailboxes worldwide. We help MSPs protect their  SMBs Microsoft 365 users from advanced email threats.',
    link: '/technology-partners/vade-secure',
    label: 'Vade ',
    type: ['public_cloud_services', 'security_risk_management', 'workplace'],
  },
  {
    img: 'https://www.mindware.net/ContentFiles/529Logo.jpg',
    description:
      'Veritas Technologies empowers businesses of all sizes to discover the truth in information—their most important digital asset. Ninety-four percent of Fortune 100 companies rely on Veritas today.',
    link: '/technology-partners/veritas1',
    label: 'Veritas',
  },
  {
    img: 'https://www.mindware.net/ContentFiles/225Logo.png',
    description:
      'Vertiv brings together hardware, software, analytics and ongoing services to ensure its customers’ vital applications run continuously, perform optimally and grow with their business needs.',
    label: 'Vertiv',
    type: ['infrastructure_operations'],
  },
  {
    img: 'https://www.mindware.net/ContentFiles/226Logo.png',
    description:
      'Xerox is a technology leader focused on the intersection of digital and physical, using automation and next-generation personalization to redefine productivity, drive growth and security.',
    link: '/technology-partners/xerox',
    label: 'Xerox',
    type: ['workplace'],
  },
];

export const cardTechPartnersSelect = [
  {
    label: 'All',
    value: 'all',
  },
  {
    label: 'Data & Analytics',
    value: 'data_analytics',
  },
  {
    label: 'Infrastructure & Operations',
    value: 'infrastructure_operations',
  },
  { label: 'Internet of Things', value: 'internet_of_things' },
  { label: 'Public Cloud Services', value: 'public_cloud_services' },
  { label: 'Security & Risk Management', value: 'security_risk_management' },
  { label: 'Workplace', value: 'workplace' },
];
export const dataPageTechnologyPartners: PageAppType = {
  banner: {
    imgUrl: 'https://www.mindware.net/ContentFiles/9BannerImage.jpg',
    title: 'Technnology Partners',
  },
  key: 'technnology Partners',
  footerBox: {
    title: 'Get in touch with us',
    description:
      'Mindware covers a wide range of technologies; come explore our extensive portfolio to learn more about how we can help with your business needs.',
    url: '/contact-us',
    urlLabel: 'contact us',
  },
};
export const dataPageAboutUs: PageAppType = {
  banner: {
    imgUrl: 'https://www.mindware.net/ContentFiles/22BannerImage.jpg',
    title: 'About Us',
  },
  key: 'About Us',
};

export const boxSideToSideAbout: boxSideToSideList[] = [
  {
    title: 'A LEADING DISTRIBUTOR OF TOP IT TECHNOLOGIES IN MEA',
    description: [
      'At Mindware, we strive to establish long-term, mutually-beneficial partnerships with vendors and channel organizations in the Middle East and Africa, by combining industry-leading integrated solutions with an uncompromising commitment to delivering the world-class, human-centric services and support our partners need to succeed.',
      'Develop and maintain a world-class company culture based on integrity, empowerment and adaptability to attract, develop, and retain the region’s brightest talent; thereby enabling us to consistently provide unparalleled support to our partners and vendors.',
    ],
  },
  {
    title: 'WORLD-CLASS EXPERTISE, WITH LOCAL COMMITMENT',
    description: [
      'At Mindware, relationships are our foremost priority, and we believe success lies in being as close to our customers and partners as possible. We have therefore invested to establish a strong footprint across the Middle East and Africa. This ensures that our dedicated sales and technical resources are always available – WHEN you need them, and WHERE you need them.',
    ],
  },
];
export const countAbout: counterType[] = [
  {
    name: 'Channel Partners',
    count: 4000,
    end: '+',
  },
  {
    name: 'Market Leading Vendors',
    count: 45,
    end: '+',
  },
  {
    name: 'Transactions per Year',
    count: 35000,
    end: '+',
  },
  {
    name: 'Countries',
    count: 15,
  },
  {
    name: 'across 12 Warehouses',
    count: 90000,
    end: 'sqft',
  },
];

export const formContactUs: any = [
  {
    type: 'text',
    name: 'first_name',
    label: 'First Name',
    required: true,
    colspan: 1,
  },
  {
    type: 'text',
    name: 'last_name',
    label: 'Last Name',
    required: true,
    colspan: 1,
  },
  {
    type: 'text',
    name: 'email',
    label: 'Email Address',
    required: true,
    colspan: 1,
  },
  {
    type: 'country',
    name: 'country',
    label: 'Country',
    required: true,
    colspan: 1,
  },
  {
    type: 'number',
    name: 'phone',
    label: 'Phone Number',
    required: true,
    colspan: 1,
  },
  {
    type: 'text',
    name: 'company',
    label: 'Company Name',
    required: true,
    colspan: 1,
  },
  {
    type: 'select',
    name: 'inquiry',
    label: 'Inquiry Type',
    required: true,
    colspan: 1,
    data: [
      {
        label: 'Finance',
        value: 'Finance',
      },
      {
        label: 'HR',
        value: 'HR',
      },
      {
        label: 'Logistics',
        value: 'Logistics',
      },
      {
        label: 'Request a Demo',
        value: 'Request a Demo',
      },
      {
        label: 'Sales',
        value: 'Sales',
      },
      {
        label: 'Start your Project',
        value: 'Start your Project',
      },
      {
        label: 'Become a Cloud Partner',
        value: 'Become a Cloud Partner',
      },
    ],
  },
  {
    type: 'select',
    name: 'solution',
    label: 'Which Solution Are You Interested In?',
    required: true,
    colspan: 1,
    data: [
      {
        label: 'Acer',
        value: 'Acer',
      },
      {
        label: 'Acronis',
        value: 'Acronis',
      },
      {
        label: 'Archer',
        value: 'Archer',
      },
      {
        label: 'Arcserve',
        value: 'Arcserve',
      },
      {
        label: 'Azure',
        value: 'Azure',
      },
      {
        label: 'Barracuda',
        value: 'Barracuda',
      },
      {
        label: 'Black Box',
        value: 'Black Box',
      },
      {
        label: 'BROADCOM',
        value: 'BROADCOM',
      },
      {
        label: 'Censornet',
        value: 'Censornet',
      },
      {
        label: 'Cibecs',
        value: 'Cibecs',
      },
      {
        label: 'Citrix',
        value: 'Citrix',
      },
      {
        label: 'Cloudflare',
        value: 'Cloudflare',
      },
      {
        label: 'Dell',
        value: 'Dell',
      },
      {
        label: 'EATON',
        value: 'EATON',
      },
      {
        label: 'EC - Council',
        value: 'EC - Council',
      },
      {
        label: 'Entrust',
        value: 'Entrust',
      },
      {
        label: 'ESET',
        value: 'ESET',
      },
      {
        label: 'Forcepoint',
        value: 'Forcepoint',
      },
      {
        label: 'Google Nest',
        value: 'Google Nest',
      },
      {
        label: 'HTC Vive',
        value: 'HTC Vive',
      },
      {
        label: 'Huawei',
        value: 'Huawei',
      },
      {
        label: 'Inferrix',
        value: 'Inferrix',
      },
      {
        label: 'Ivanti',
        value: 'Ivanti',
      },
      {
        label: 'Juniper',
        value: 'Juniper',
      },
      {
        label: 'Keysight Technologies',
        value: 'Keysight Technologies',
      },
      {
        label: 'Kodak Alaris',
        value: 'Kodak Alaris',
      },
      {
        label: 'Lenovo',
        value: 'Lenovo',
      },
      {
        label: 'M365',
        value: 'M365',
      },
      {
        label: 'Microsoft',
        value: 'Microsoft',
      },
      {
        label: 'Mitel',
        value: 'Mitel',
      },
      {
        label: 'NETWITNESS',
        value: 'NETWITNESS',
      },
      {
        label: 'Nexans',
        value: 'Nexans',
      },
      {
        label: 'One Identity',
        value: 'One Identity',
      },
      {
        label: 'Oracle',
        value: 'Oracle',
      },
      {
        label: 'OUTSEER - An RSA Company',
        value: 'OUTSEER - An RSA Company',
      },
      {
        label: 'PNY',
        value: 'PNY',
      },
      {
        label: 'Quest',
        value: 'Quest',
      },
      {
        label: 'R&M',
        value: 'R&M',
      },
      {
        label: 'Riverbed',
        value: 'Riverbed',
      },
      {
        label: 'Rubrik',
        value: 'Rubrik',
      },
      {
        label: 'SecurID',
        value: 'SecurID',
      },
      {
        label: 'Software AG',
        value: 'Software AG',
      },
      {
        label: 'spiderSilk',
        value: 'spiderSilk',
      },
      {
        label: 'TP LINK',
        value: 'TP LINK',
      },
      {
        label: 'Trellix',
        value: 'Trellix',
      },
      {
        label: 'Trend Micro',
        value: 'Trend Micro',
      },
      {
        label: 'Ubiquiti',
        value: 'Ubiquiti',
      },
      {
        label: 'Vade',
        value: 'Vade',
      },
      {
        label: 'Veritas',
        value: 'Veritas',
      },
      {
        label: 'Vertiv',
        value: 'Vertiv',
      },
      {
        label: 'Xerox',
        value: 'Xerox',
      },
    ],
  },
  {
    type: 'textarea',
    name: 'message',
    label: 'Message',
    required: true,
    colspan: 2,
  },
];

export const dataPageContactUs: PageAppType = {
  banner: {
    imgUrl: 'https://www.mindware.net/ContentFiles/15BannerImage.jpg',
    title: 'Contact Us',
  },
  key: 'contact Us',
  listCard: {
    title: 'Contact Details',
    data: [
      {
        label: 'Head Office - United Arab Emirates',
        urlImage: 'https://www.mindware.net/ContentFiles/48Image.jpg',
        location: {
          name: 'Mindware FZ LLC',
          address:
            '10th Floor, Cayan Business Center,Barsha Heights, office 1001',
        },
        additional: [
          { key: 'PO BOX', value: '55609, Dubai, United Arab Emirates' },
          { key: 'Tel', value: '+971 4 4500 600' },
          { key: '', value: 'sales@mindware.net' },
        ],
      },
      {
        label: 'Algeria',

        urlImage: 'https://www.mindware.net/ContentFiles/269Image.jpg',
        location: {
          name: 'Southcomp Distribution SARL',
          address: 'KOUBA, Coopérative Les IRIS, Villa 02',
        },
      },
      {
        label: 'Côte d’Ivoire',
        urlImage: 'https://www.mindware.net/ContentFiles/268Image.jpg',
        location: {
          name: 'Polaris Distribution SARL',
          address:
            'Abidjan, 17 Rue des Ferronniers Lot 70, zone 3, Treichville',
        },
        additional: [
          { key: 'Tel', value: '21751947' },
          { key: 'Fax', value: '21254817' },
        ],
      },
      {
        label: 'Kingdom of Saudi Arabia',
        urlImage: 'https://www.mindware.net/ContentFiles/49Image.jpg',
        location: {
          name: 'Aklaniat Technologies LTD',
          address: 'Alrabwah, Fatimah Alzahra Street,Bldg. 6601',
        },
        additional: [
          { key: 'PO BOX', value: '10586, Riyadh 11334, KSA' },
          { key: 'Tel', value: '+966 1 215 3126' },
          { key: 'Fax', value: '+966 1 215 3127' },
          { key: '', value: 'ksa_sales@mindware.net' },
        ],
      },
      {
        label: 'Kuwait',
        urlImage: 'https://www.mindware.net/ContentFiles/50Image.jpg',
        location: {
          name: 'Mindware Computer Service Company',
          address:
            'Dar Al Awadi Tower, Mall Area, 2nd floor, Of. 5119, Entrance 51, Ahmed Al Jaber Street, Kuwait City, Kuwait',
        },
        additional: [
          { key: 'Tel', value: '+965 2 232 2927' },
          { key: 'Fax', value: '+965 2 232 2993' },
          { key: '', value: 'kuwait_sales@mindware.net' },
        ],
      },
      {
        label: 'Lebanon',
        urlImage: 'https://www.mindware.net/ContentFiles/51Image.jpg',
        location: {
          name: 'Mindware SAL',
          address: 'Corniche Al Nahr,Holcom Bldg., 4th Floor,Beirut, Lebanon',
        },
        additional: [
          { key: 'PO BOX', value: '55609, Dubai, United Arab Emirates' },
          { key: 'Tel', value: '+961 1 440 752' },
          { key: '', value: 'Leb_sales@mindware.net' },
        ],
      },

      {
        label: 'Morocco',
        urlImage: 'https://www.mindware.net/ContentFiles/270Image.jpg',
        location: {
          name: 'Southcomp Distribution MAROC',
          address: ' Casablanca',
        },
      },
      {
        label: 'Pakistan',
        urlImage: 'https://www.mindware.net/ContentFiles/52Image.jpg',
        location: {
          name: '',
          address:
            'Emirates Tower, M-13, Of. 314,F-7 Markaz, Islamabad, Pakistan',
        },
        additional: [
          { key: 'Tel', value: '+92 51 209 9189' },
          { key: 'Fax', value: '+92 51 209 9112' },
          { key: '', value: 'Pak_sales@mindware.net' },
        ],
      },
      {
        label: 'Tunisie',
        urlImage: 'https://www.mindware.net/ContentFiles/271Image.jpg',
        location: {
          name: 'Southcomp Distribution Tunisie',
          address:
            'Tunisie, Imm. Crystal Palace – Bur 2.B.2/2.B.3, Les Berges du Lac - Tunis',
        },
      },
      {
        label: 'Regional Contacts',
        urlImage: 'https://www.mindware.net/images/office6.jpg',

        additional: [
          { key: 'Bahrain:', value: 'Bahrain_Sales@mindware.net' },
          { key: 'Egypt:', value: 'Egypt_Sales@mindware.net' },
          { key: 'Iraq:', value: 'Iraq_Sales@mindware.net' },
          { key: 'Jordan:', value: 'Jordan_Sales@mindware.net' },
          { key: 'Oman:', value: 'Oman_Sales@mindware.net' },
          { key: 'Qatar:', value: 'qatar@mindware.net' },
        ],
      },
    ],
  },
};

export const dataPageBecomePartners: PageAppType = {
  banner: {
    imgUrl: 'https://www.mindware.net/ContentFiles/15BannerImage.jpg',
    title: 'Become a Partner',
    urlBack: '/channel-partners',
    backTitle: 'channel-partners',
  },
  key: 'Become a Partner',
};

export const formBecomePartners: any = [
  {
    type: 'header',
    label: 'Personal Details',
  },
  {
    type: 'text',
    name: 'first_name',
    label: 'First Name',
    required: true,
    colspan: 1,
  },
  {
    type: 'text',
    name: 'last_name',
    label: 'Last Name',
    required: true,
    colspan: 1,
  },
  {
    type: 'text',
    name: 'job_title',
    label: 'Job Title',
    required: true,
    colspan: 1,
  },
  {
    type: 'hr',
    label: 'hr1',
  },

  {
    type: 'header',
    label: 'Company Details',
  },

  {
    type: 'text',
    name: 'company',
    label: 'Company Name',
    required: true,
    colspan: 1,
  },
  {
    type: 'text',
    name: 'street_address',
    label: 'Street Address',
    required: true,
    colspan: 1,
  },
  {
    type: 'text',
    name: 'street_address_line',
    label: 'Street Address Line 2',
    required: false,
    colspan: 1,
  },
  {
    type: 'text',
    name: 'city',
    label: 'City',
    required: true,
    colspan: 1,
  },

  {
    type: 'text',
    name: 'state_provice',
    label: 'State / Province',
    required: true,
    colspan: 1,
  },
  {
    type: 'text',
    name: 'po_box',
    label: 'PO BOX',
    required: true,
    colspan: 1,
  },
  {
    type: 'country',
    name: 'country',
    label: 'Country',
    required: true,
    colspan: 1,
  },
  {
    type: 'text',
    name: 'vat',
    label: 'VAT Or Registration Number',
    required: true,
    colspan: 1,
  },
  {
    type: 'text',
    name: 'email',
    label: 'Email Address',
    required: true,
    colspan: 1,
  },

  {
    type: 'number',
    name: 'phone',
    label: 'Phone Number',
    required: true,
    colspan: 1,
  },
  {
    type: 'text',
    name: 'website',
    label: 'Website',
    required: true,
    colspan: 1,
  },
  {
    type: 'textarea',
    name: 'message',
    label: 'Your Company Currently Sells',
    required: true,
    colspan: 2,
  },
  {
    type: 'select',
    name: 'hear_from',
    label: 'How Did You Hear About Us?',
    required: true,
    colspan: 1,
    data: [
      {
        label: 'Media',
        value: 'Media',
      },
      {
        label: 'Referral',
        value: 'Referral',
      },
      {
        label: 'Social Media',
        value: 'Social Media',
      },
    ],
  },
  {
    type: 'select',
    name: 'solution',
    label: 'Which Solution Are You Interested In?',
    required: true,
    colspan: 1,
    data: [
      {
        label: 'Acer',
        value: 'Acer',
      },
      {
        label: 'Acronis',
        value: 'Acronis',
      },
      {
        label: 'Archer',
        value: 'Archer',
      },
      {
        label: 'Arcserve',
        value: 'Arcserve',
      },
      {
        label: 'Azure',
        value: 'Azure',
      },
      {
        label: 'Barracuda',
        value: 'Barracuda',
      },
      {
        label: 'Black Box',
        value: 'Black Box',
      },
      {
        label: 'BROADCOM',
        value: 'BROADCOM',
      },
      {
        label: 'Censornet',
        value: 'Censornet',
      },
      {
        label: 'Cibecs',
        value: 'Cibecs',
      },
      {
        label: 'Citrix',
        value: 'Citrix',
      },
      {
        label: 'Cloudflare',
        value: 'Cloudflare',
      },
      {
        label: 'Dell',
        value: 'Dell',
      },
      {
        label: 'EATON',
        value: 'EATON',
      },
      {
        label: 'EC - Council',
        value: 'EC - Council',
      },
      {
        label: 'Entrust',
        value: 'Entrust',
      },
      {
        label: 'ESET',
        value: 'ESET',
      },
      {
        label: 'Forcepoint',
        value: 'Forcepoint',
      },
      {
        label: 'Google Nest',
        value: 'Google Nest',
      },
      {
        label: 'HTC Vive',
        value: 'HTC Vive',
      },
      {
        label: 'Huawei',
        value: 'Huawei',
      },
      {
        label: 'Inferrix',
        value: 'Inferrix',
      },
      {
        label: 'Ivanti',
        value: 'Ivanti',
      },
      {
        label: 'Juniper',
        value: 'Juniper',
      },
      {
        label: 'Keysight Technologies',
        value: 'Keysight Technologies',
      },
      {
        label: 'Kodak Alaris',
        value: 'Kodak Alaris',
      },
      {
        label: 'Lenovo',
        value: 'Lenovo',
      },
      {
        label: 'M365',
        value: 'M365',
      },
      {
        label: 'Microsoft',
        value: 'Microsoft',
      },
      {
        label: 'Mitel',
        value: 'Mitel',
      },
      {
        label: 'NETWITNESS',
        value: 'NETWITNESS',
      },
      {
        label: 'Nexans',
        value: 'Nexans',
      },
      {
        label: 'One Identity',
        value: 'One Identity',
      },
      {
        label: 'Oracle',
        value: 'Oracle',
      },
      {
        label: 'OUTSEER - An RSA Company',
        value: 'OUTSEER - An RSA Company',
      },
      {
        label: 'PNY',
        value: 'PNY',
      },
      {
        label: 'Quest',
        value: 'Quest',
      },
      {
        label: 'R&M',
        value: 'R&M',
      },
      {
        label: 'Riverbed',
        value: 'Riverbed',
      },
      {
        label: 'Rubrik',
        value: 'Rubrik',
      },
      {
        label: 'SecurID',
        value: 'SecurID',
      },
      {
        label: 'Software AG',
        value: 'Software AG',
      },
      {
        label: 'spiderSilk',
        value: 'spiderSilk',
      },
      {
        label: 'TP LINK',
        value: 'TP LINK',
      },
      {
        label: 'Trellix',
        value: 'Trellix',
      },
      {
        label: 'Trend Micro',
        value: 'Trend Micro',
      },
      {
        label: 'Ubiquiti',
        value: 'Ubiquiti',
      },
      {
        label: 'Vade',
        value: 'Vade',
      },
      {
        label: 'Veritas',
        value: 'Veritas',
      },
      {
        label: 'Vertiv',
        value: 'Vertiv',
      },
      {
        label: 'Xerox',
        value: 'Xerox',
      },
    ],
  },
];
