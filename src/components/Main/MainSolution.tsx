import Carousel from '@/components/Carousel';
import { solutionCards } from '@/lib/data';
import { cn } from '@/lib/utils';
import CarouselSololution from '../CarouselSolution';
import SectionText from '../SectionText';
import Wrapper from '../layout/Wrapper';
import { inView, animate, useInView } from 'framer-motion';
import { useEffect, useRef } from 'react';

type Props = {};

const MainSolution = (props: Props) => {
  return (
    <section
      className={cn(
        'w-full  bg-cover bg-center bg-main-background ',
        'lg-layer'
      )}
    >
      <div className="w-full overflow-hidden">
        <Wrapper>
          <div
            className={cn(
              'w-full flex flex-col gap-10',
              'lg:flex-row  xl:gap-0'
            )}
          >
            <SectionText
              title="Solutions"
              desciption="Our constantly evolving portfolio of best-in-class technologies keeps our customers and partners at the leading edge of the rapidly advancing IT world"
              url="/"
              buttonLabel="Learn More"
              className="max-w-sm"
            />
            <div className="w-full">
              <Carousel
                dataCarousel={solutionCards}
                ContentCarousel={CarouselSololution}
              />
            </div>
          </div>
        </Wrapper>
      </div>
    </section>
  );
};

export default MainSolution;
