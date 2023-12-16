import React from 'react';
import Wrapper from './layout/Wrapper';
import { BannerType } from '@/lib/type';

const Banner = (props: BannerType) => {
  const { imgUrl, title } = props;
  return (
    <div
      className={`w-full h-[450px]  overflow-hidden relative  bg-no-repeat bg-cover bg-fixed bg-center flex`}
      style={{ backgroundImage: `url(${imgUrl})` }}
    >
      <div className="absolute w-full h-[450px] bg-[rgba(29,32,50,.51)] " />
      {title && (
        <Wrapper className="relative self-end mb-32">
          <h1 className="text-white text-5xl lg:text-6xl relative font-bold uppercase ">
            {title}
          </h1>
        </Wrapper>
      )}
    </div>
  );
};
export default Banner;
