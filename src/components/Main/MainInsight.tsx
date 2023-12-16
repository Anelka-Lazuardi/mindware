'use client';
import { newsCards } from '@/lib/data';
import { cn } from '@/lib/utils';
import Carousel from '../Carousel';
import CarouselNews from '../CarouselNews';
import SectionText from '../SectionText';
import Wrapper from '../layout/Wrapper';

type Props = {};

const MainInsight = (props: Props) => {
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
              'lg:flex-row lg:gap-10 xl:gap-32'
            )}
          >
            <SectionText
              title="Latest Insights"
              desciption=""
              url="/"
              buttonLabel="Viw All Insight"
            />

            <div className="w-full">
              <Carousel
                dataCarousel={newsCards}
                ContentCarousel={CarouselNews}
              />
            </div>
          </div>
        </Wrapper>
      </div>
    </section>
  );
};

export default MainInsight;
