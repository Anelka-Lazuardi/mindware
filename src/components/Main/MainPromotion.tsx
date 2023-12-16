'use client';
import { cn } from '@/lib/utils';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import SectionText from '../SectionText';
import Wrapper from '../layout/Wrapper';

type Props = {};

const MainPromotion = (props: Props) => {
  return (
    <section
      className={cn(
        'w-full flex flex-col bg-cover bg-center bg-main-background py-10 ',
        'lg-layer lg:py-0'
      )}
    >
      <Wrapper className="py-0">
        <SectionText
          title="Promotions"
          desciption=""
          url="/"
          buttonLabel="view All Promotions"
        />
      </Wrapper>
    </section>
  );
};

export default MainPromotion;
