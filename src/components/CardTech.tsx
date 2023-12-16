import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

type cardProps = {
  img: string;
  link?: string;
  description?: string;
  label: string;
};
type Props = {
  card: cardProps;
};

const CardTech = (props: Props) => {
  const card = props.card;
  return (
    <div
      className={cn(
        'border flex justify-center items-center  cursor-pointer group hover:bg-primary relative ',
        'aspect-auto py-10 border-b-4 border-b-[#2b3990]',
        'lg:aspect-square 2xl:max-h-[240px] overflow-hidden'
      )}
    >
      <Image
        src={card.img}
        width={0}
        height={0}
        alt={card.label}
        className="group-hover:opacity-0 duration-500 ease-in-out transition-all group-hover:-z-10 lg:w-full h-auto px-10 w-[300px]"
        sizes="100%"
      />
      <div className="absolute w-full text-sm top-0 pt-10 px-5 opacity-0 group-hover:opacity-100 duration-700 delay-100 ease-in-out transition-opacity text-clip">
        <p className="text-white text-xs text-center  ">{card.description}</p>
        {card.link && (
          <div className="flex gap-2  text-secondary items-center  justify-center w-full p-2  ">
            <Link
              href={card.link}
              className="text-sm flex   items-center peer "
            >
              Learn More
            </Link>
            <FaArrowRight
              size={'1em'}
              className={'peer-hover:translate-x-3 duration-200 ease-in-out'}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default CardTech;
