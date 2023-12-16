'use client';
import { dataCarousel } from '@/lib/data';
import { cn } from '@/lib/utils';
import { useState } from 'react';
import CarouselHero from '../CarouselHero';
import Wrapper from '../layout/Wrapper';

type Props = {};

const MainHero = (props: Props) => {
  const [activeCarousel, setActiveCarousel] = useState<number>(0);

  return (
    <section className="w-full relative lg:snap-start">
      <CarouselHero {...dataCarousel[activeCarousel]} key={activeCarousel} />
      <Wrapper className="relative  ">
        <div
          className={cn(
            'absolute  left-1/2 -translate-x-1/2 flex gap-5 z-10 bottom-64',
            'lg:flex lg:w-full lg:p-5 lg:bottom-24'
          )}
        >
          {dataCarousel.map((carousel, index) => (
            <span
              className={cn(
                'dot-carousel',
                activeCarousel === index && 'bg-white'
              )}
              onClick={() => setActiveCarousel(index)}
              key={carousel.title}
            />
          ))}
        </div>
      </Wrapper>
    </section>
  );
};

export default MainHero;
