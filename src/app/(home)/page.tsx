'use client';
import DotSidebar from '@/components/Main/DotSidebar';
import MainHero from '@/components/Main/MainHero';
import MainInsight from '@/components/Main/MainInsight';
import MainPathners from '@/components/Main/MainPathners';
import MainPromotion from '@/components/Main/MainPromotion';
import MainSolution from '@/components/Main/MainSolution';
import FooterMain from '@/components/layout/FooterMain';
import HeaderMain from '@/components/layout/HeaderMain';
import { useIntersectionObserver } from '@/hooks/useInterSectionObserver';
import { cn } from '@/lib/utils';
import { useEffect, useRef, useState } from 'react';

export default function Home() {
  const mainHeroRef = useRef<HTMLDivElement>(null);
  const mainSolutionRef = useRef<HTMLDivElement>(null);
  const mainPathnersRef = useRef<HTMLDivElement>(null);
  const mainPromotionRef = useRef<HTMLDivElement>(null);
  const mainInsightRef = useRef<HTMLDivElement>(null);
  const mainFooterRef = useRef<HTMLDivElement>(null);

  const [activeDot, setActiveDot] = useState<number>(0);
  // Add refs for other components as needed

  const isVisibleMainHero = useIntersectionObserver(mainHeroRef, {
    threshold: 0.5,
  });
  const isVisibleMainSolution = useIntersectionObserver(mainSolutionRef, {
    threshold: 0.5,
  });
  const isVisibleMainPathners = useIntersectionObserver(mainPathnersRef, {
    threshold: 0.5,
  });
  const isVisibleMainPromotion = useIntersectionObserver(mainPromotionRef, {
    threshold: 0.5,
  });
  const isVisibleMainInsight = useIntersectionObserver(mainInsightRef, {
    threshold: 0.5,
  });
  const isVisibleFooter = useIntersectionObserver(mainFooterRef, {
    threshold: 0.5,
  });

  useEffect(() => {
    if (isVisibleMainHero) setActiveDot(0);
    if (isVisibleMainSolution) setActiveDot(1);
    if (isVisibleMainPathners) setActiveDot(2);
    if (isVisibleMainPromotion) setActiveDot(3);
    if (isVisibleMainInsight) setActiveDot(4);
    if (isVisibleFooter) setActiveDot(5);
  }, [
    isVisibleMainHero,
    isVisibleMainSolution,
    isVisibleMainPathners,
    isVisibleMainPromotion,
    isVisibleMainInsight,
    isVisibleFooter,
  ]);

  const propsDot = {
    activeDot,
    mainHeroRef,
    mainSolutionRef,
    mainPathnersRef,
    mainPromotionRef,
    mainInsightRef,
    mainFooterRef,
  };

  return (
    <main
      className={cn(
        'min-h-screen w-full  overflow-scroll hide-scroll snap-y snap-mandatory h-screen  '
      )}
    >
      <HeaderMain activePage={activeDot} />
      <div ref={mainHeroRef}>
        <MainHero />
      </div>
      <div ref={mainSolutionRef}>
        <MainSolution />
      </div>
      <div ref={mainPathnersRef}>
        <MainPathners />
      </div>
      <div ref={mainPromotionRef}>
        <MainPromotion />
      </div>
      <div ref={mainInsightRef}>
        <MainInsight />
      </div>
      <div ref={mainFooterRef}>
        <FooterMain />
      </div>
      <DotSidebar {...propsDot} />
    </main>
  );
}
