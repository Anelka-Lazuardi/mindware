'use client';
import { NewsCardsType } from '@/lib/type';
import Image from 'next/image';

type Props = {
  index: number;
  card: NewsCardsType;
  redirectPage: (card: NewsCardsType) => () => {};
};

const CarouselNews = (props: Props) => {
  const { index, card, redirectPage } = props;
  return (
    <div
      className="flex flex-col shadow-lg cursor-pointer "
      key={index}
      style={{ width: '287px' }}
      onClick={redirectPage(card)}
    >
      <div
        className={
          'h-[186px] w-full  bg-cover bg-center relative overflow-hidden'
        }
        key={index}
      >
        <Image
          src={card.urlImage}
          fill
          alt={card.label}
          className="hover:scale-110  duration-500 ease-in-out transition-transform  object-cover "
          sizes="100%"
          // priority
        />
      </div>
      <div className="flex flex-col gap-4 py-5 px-5 h-[216px]  border-b-[6px] border-b-[rgba(43,57,144,0.25)] border-solid">
        <h3 className="text-slate-400">{card.label}</h3>
        <p className="text-primary text-lg">{card.description}</p>
      </div>
    </div>
  );
};

export default CarouselNews;
