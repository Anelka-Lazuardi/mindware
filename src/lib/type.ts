import { IconType } from 'react-icons';

interface LabelUrlType {
  label: string;
  url: string;
}

export interface CardsType extends LabelUrlType {
  description: string;
  urlImage: string;
}

export interface NewsCardsType extends CardsType {
  urlPdf?: string;
}

export interface carouselType {
  title: string;
  description: string;
  urlImage: string;
  button: string;
}

export interface linkMenuType extends LabelUrlType {}

export interface BoxPartnerType extends LabelUrlType {
  description: string;
}

export interface IconLinkType {
  url: string;
  name: string;
  Icon: IconType;
}

export interface BannerType {
  imgUrl: string;
  title?: string;
  urlBack?: '/channel-partners';
  backTitle?: 'channel-partners';
}

export interface PageAppType {
  banner: BannerType;
  content?: any;
  key: string;
  footerBox?: footerBox;
  boxSideToSide?: boxSideToSide;
  listCard?: objectCard | any;
  listBox?: BoxPartnerType2[];
}

export interface footerBox {
  title: string;
  description: string;
  url: string;
  urlLabel: string;
}

export interface boxSideToSide {
  title: string;
  description: string;
}
export interface boxSideToSideList {
  title: string;
  description: string[];
}
export interface objectCard {
  title: string;
  data: CardsType[];
}

export interface BoxPartnerType2 extends LabelUrlType {
  description: string[];
}

export interface cardTechType {
  img: string;
  description?: string;
  link?: string;
  label: string;
  type?: string[];
}

export interface counterType {
  name: string;
  count: number;
  end?: string;
}

export interface FormType {
  type: string;
  name: string;
  label: string;
  required: boolean;
  colspan: number;
  data?: FormTypeData[];
}

export interface FormTypeData {
  value: string;
  label: string;
}
