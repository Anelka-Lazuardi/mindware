import { cn } from '@/lib/utils';
import { ClassValue } from 'clsx';
import Link from 'next/link';
import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

type Props = {
  title: string;
  desciption?: string;
  url: string;
  buttonLabel?: string;
  secondDesciption?: string;
  className?: ClassValue;
  classNameTitle?: ClassValue;
};

const SectionText = (props: Props) => {
  const {
    title,
    desciption,
    url,
    buttonLabel,
    secondDesciption = null,
    className,
    classNameTitle,
  } = props;

  return (
    <div className={cn('flex gap-4 relative', 'lg:shrink-0', className)}>
      <div className="w-1 h-8 bg-secondary rounded-lg relative top-1 "></div>
      <div className="flex-grow flex-1 flex flex-col gap-4 xl:gap-8">
        <h1 className={cn('text-primary text-3xl font-bold', classNameTitle)}>
          {title}
        </h1>
        {desciption && (
          <p className="text-md font-[300] xl:pr-5">{desciption}</p>
        )}
        {secondDesciption && (
          <p className="text-md font-[300]">{secondDesciption}</p>
        )}
        {buttonLabel && (
          <div className="flex text-secondary gap-3 items-center  ">
            <Link href={url} className="text-sm flex   items-center peer ">
              {buttonLabel}
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

export default SectionText;
