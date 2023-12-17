import { cn } from '@/lib/utils';
import Image from 'next/image';
import React from 'react';
import Wrapper from './layout/Wrapper';
import { BoxPartnerType2 } from '@/lib/type';

type Props = {
  listBox: BoxPartnerType2[];
};

const BoxWithImage = (props: Props) => {
  const { listBox } = props;

  return (
    <div className="w-full ">
      {listBox.map((box, index) => (
        <div
          className={cn(
            'flex flex-col py-5 ',
            index % 2 == 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'
          )}
          key={index}
        >
          <div
            className={cn(
              'w-full bg-black h-[430px] relative overflow-hidden',
              'lg:w-[42%]'
            )}
          >
            <Image
              src={box.url}
              fill
              alt={box.label}
              sizes="100%"
              className="object-cover object-top hover:scale-125 duration-500 ease-in-out transition-all cursor-pointer"
            />
          </div>

          <div className={cn('w-full flex py-10', 'lg:w-[58%]')}>
            <Wrapper
              className={cn(
                'w-full flex-1 ',
                index % 2 == 0 && 'lg:bg-[#F3F3F3]'
              )}
            >
              <div className="max-w-3xl  mx-auto ">
                <h1 className="text-2xl font-bold text-primary py-5 xl:py-10">
                  {box.label}
                </h1>
                {box.description.map((text, indexLine) => (
                  <p
                    className="leading-relaxed font-[300]  text-[#0C1238] "
                    key={indexLine}
                  >
                    {text}
                  </p>
                ))}
              </div>
            </Wrapper>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BoxWithImage;
