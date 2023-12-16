import React, { useState, useEffect } from 'react';
import { carouselType } from '@/lib/type';
import { motion, useAnimate } from 'framer-motion';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import Wrapper from './layout/Wrapper';

const CarouselHero = (props: carouselType) => {
  return (
    <div className=" w-full relative bg-[rgba(34,46,120,.56)] ">
      <Image
        src={props.urlImage}
        fill
        alt={props.title}
        className={cn(
          'absolute object-cover object-right duration-500 transition-transform ease-linear',
          'lg:object-left'
        )}
        priority
      />

      <div className="bg-[rgba(34,46,120,.56)]  w-full h-screen absolute " />
      <Wrapper className="w-full relative">
        <div
          className={cn(
            'mx-auto h-screen   flex flex-col  justify-center text-white z-[5] relative  overflow-hidden'
          )}
        >
          <motion.div
            className="gap-5 flex flex-col text-center "
            initial={{ opacity: 0, transform: 'translateX(50px)' }}
            animate={{ opacity: 1, transform: 'translateX(0)' }}
            transition={{ duration: 0.3 }}
          >
            <h2
              className={cn(
                'text-2xl font-bold  leading-tight',
                'lg:text-left lg:text-5xl lg:max-w-md lg:leading-tight',
                'xl:max-w-xl',
                '2xl:max-w-2xl'
              )}
            >
              {props.title}
            </h2>
            <p
              className={cn(
                'text-center text-lg font-[300] leading-tight ',
                'lg:text-left lg:text-md lg:max-w-md lg:leading-tight',
                'xl:max-w-xl',
                '2xl:max-w-3xl'
              )}
            >
              {props.description}
            </p>
            <div className={cn('mt-4', 'lg:flex lg:p-1')}>
              <button className="ring-2 rounded-3xl px-10 py-3 text-xs font-bold ring-white hover:bg-white hover:text-primary duration-500 transition-all ease-in-out">
                {props.button}
              </button>
            </div>
          </motion.div>
        </div>
      </Wrapper>
    </div>
  );
};

export default CarouselHero;
