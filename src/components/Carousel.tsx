'use client';
import { CardsType, NewsCardsType } from '@/lib/type';
import { useRouter } from 'next/navigation';
import { useRef, useState } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import Slider from 'react-slick';
import { motion, useAnimate } from 'framer-motion';

type Props = {
  ContentCarousel: JSX.ElementType;
  dataCarousel: CardsType[] | NewsCardsType[];
};

const Carousel = (props: Props) => {
  const { ContentCarousel, dataCarousel } = props;

  const [slider, setSlider] = useState<any>(null);
  const move = useRef<boolean>(true);
  const router = useRouter();

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    variableWidth: true,
    swipeToSlide: true,
    touchThreshold: 10,
    beforeChange: function (index: number) {
      move.current = false;
    },
    afterChange: function (index: number) {
      move.current = true;
    },
  };

  const next = () => {
    slider?.slickNext();
  };
  const previous = () => {
    slider?.slickPrev();
  };

  const redirectPage = (card: CardsType | NewsCardsType) => () => {
    if (move.current) {
      if ('urlPdf' in card) {
        if (card.urlPdf) {
          window.open(card.urlPdf, '_blank');
        } else {
          router.push(card.url, { scroll: false });
        }
      } else {
        router.push(card.url, { scroll: false });
      }
    }
  };

  return (
    <div className="flex flex-col relative gap-10">
      <motion.div
        initial={{ opacity: 0, transform: 'translateY(50px)' }}
        whileInView={{ opacity: 1, transform: 'translateX(0)' }}
        transition={{ duration: 0.9, ease: 'easeInOut' }}
        viewport={{ once: true }}
        className="h-[375px] relative  "
      >
        <Slider {...settings} ref={(c: any) => setSlider(c)}>
          {dataCarousel.map((card, index) => (
            <ContentCarousel
              key={index}
              redirectPage={redirectPage}
              card={card}
              index={index}
            />
          ))}
        </Slider>
      </motion.div>
      <div className="flex  flex-row text-black relative lg:-left-32  lg:-top-14">
        <div className="flex gap-1 items-center rounded-lg bg-slate-300 p-2">
          <IoIosArrowBack
            size={'2em'}
            className="cursor-pointer hover:-translate-x-2 duration-150 ease-linear"
            onClick={previous}
          />
          <IoIosArrowForward
            size={'2em'}
            className="cursor-pointer  hover:translate-x-2 duration-150 ease-linear"
            onClick={next}
          />
        </div>
      </div>
    </div>
  );
};

export default Carousel;
