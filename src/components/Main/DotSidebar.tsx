import { cn } from '@/lib/utils';
import React, { RefObject, Ref } from 'react';

type Props = {
  activeDot: number;
  mainHeroRef: RefObject<HTMLDivElement>;
  mainSolutionRef: RefObject<HTMLDivElement>;
  mainPathnersRef: RefObject<HTMLDivElement>;
  mainPromotionRef: RefObject<HTMLDivElement>;
  mainInsightRef: RefObject<HTMLDivElement>;
  mainFooterRef: RefObject<HTMLDivElement>;
};

const DotSidebar = (props: Props) => {
  const {
    activeDot,
    mainHeroRef,
    mainSolutionRef,
    mainPathnersRef,
    mainPromotionRef,
    mainInsightRef,
    mainFooterRef,
  } = props;

  const handleClickDot = (ref: RefObject<HTMLDivElement>) => () => {
    if (ref) ref.current?.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <div
      className={cn(
        'w-24 absolute left-0 z-50 top-1/2 hidden -translate-y-1/2 ',
        'lg:block'
      )}
    >
      <div className="flex flex-col gap-2 items-center">
        <span
          className={cn(
            'dot-sidebar ',
            activeDot === 0 ? 'opacity-100 scale-150' : 'opacity-50'
          )}
          onClick={handleClickDot(mainHeroRef)}
        />
        <span
          className={cn(
            'dot-sidebar ',
            activeDot === 1 ? 'opacity-100 scale-150' : 'opacity-50'
          )}
          onClick={handleClickDot(mainSolutionRef)}
        />
        <span
          className={cn(
            'dot-sidebar ',
            activeDot === 2 ? 'opacity-100 scale-150' : 'opacity-50'
          )}
          onClick={handleClickDot(mainPathnersRef)}
        />
        <span
          className={cn(
            'dot-sidebar ',
            activeDot === 3 ? 'opacity-100 scale-150' : 'opacity-50'
          )}
          onClick={handleClickDot(mainPromotionRef)}
        />
        <span
          className={cn(
            'dot-sidebar ',
            activeDot === 4 ? 'opacity-100 scale-150' : 'opacity-50'
          )}
          onClick={handleClickDot(mainInsightRef)}
        />
        <span
          className={cn(
            'dot-sidebar ',
            activeDot === 5 ? 'opacity-100 scale-150' : 'opacity-50'
          )}
          onClick={handleClickDot(mainFooterRef)}
        />
      </div>
    </div>
  );
};

export default DotSidebar;
