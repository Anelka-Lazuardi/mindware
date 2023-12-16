import { CardsType } from '@/lib/type';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

type Props = {
  card: CardsType;
};

const Card = (props: Props) => {
  const { card } = props;
  return (
    <div className="flex flex-col shadow-lg cursor-pointer relative ">
      <div
        className={cn(
          'h-[186px] w-full  bg-cover bg-center relative overflow-hidden',
          'xl:h-[250px]'
        )}
      >
        <Image
          src={card.urlImage}
          fill
          alt={card.label}
          className="hover:scale-110  duration-500 ease-in-out transition-transform  object-cover "
          sizes="100%"
        />
      </div>
      <div className="flex flex-col gap-9 py-10 px-5  flex-grow ">
        <h3 className="text-primary text-2xl font-bold min-h-[60px] 2xl:min-h-[30px]">
          {card.label}
        </h3>
        <p className=" text-sm lg:text-lg font-[300] text-[#1D203C] opacity-50">
          {card.description}
        </p>
      </div>
      <div className="flex gap-2  text-secondary items-center  justify-end w-full   p-10 ">
        <Link href={card.url} className="text-sm flex   items-center peer ">
          Learn More
        </Link>
        <FaArrowRight
          size={'1em'}
          className={'peer-hover:translate-x-3 duration-200 ease-in-out'}
        />
      </div>
    </div>
  );
};

export default Card;
