'use client';
import { CardsType } from '@/lib/type';
import Image from 'next/image';

type Props = {
  index: number;
  card: CardsType;
  redirectPage: (card: CardsType) => () => {};
};

const CarouselSololution = (props: Props) => {
  const { index, card, redirectPage } = props;
  return (
    <div
      className={
        'h-[375px] w-full flex bg-cover bg-center relative  cursor-pointer bg-[rgba(0,0,0,.4)] overflow-hidden'
      }
      key={index}
      style={{ width: '287px' }}
      onClick={redirectPage(card)}
    >
      <Image
        src={card.urlImage}
        fill
        alt={card.label}
        className="hover:scale-110  duration-500 ease-in-out transition-transform mix-blend-darken object-cover "
        sizes="100%"
        // priority
      />
      <h1 className="text-white w-full text-center text-3xl font-bold absolute bottom-10 left-1/2 -translate-x-1/2  block ">
        {card.label}
      </h1>
    </div>
  );
};

export default CarouselSololution;
