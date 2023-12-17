import React from 'react';
import Wrapper from './layout/Wrapper';
import { BannerType } from '@/lib/type';
import Link from 'next/link';
import { FaArrowLeft } from 'react-icons/fa';

// urlBack: '/channel-partners',
// backTitle: 'channel-partners',

const Banner = (props: BannerType) => {
  const { imgUrl, title, backTitle, urlBack } = props;
  return (
    <div
      className={`w-full h-[450px]  overflow-hidden relative  bg-no-repeat bg-cover bg-fixed bg-center flex `}
      style={{ backgroundImage: `url(${imgUrl})` }}
    >
      <div className="absolute w-full h-[450px] bg-[rgba(29,32,50,.51)] " />

      {title && (
        <Wrapper className="relative self-end mb-32">
          {urlBack && backTitle && (
            <div className="flex items-center gap-3 mb-5 cursor-pointer">
              <FaArrowLeft
                size={'1em'}
                className={
                  'hover:-translate-x-3 duration-200 ease-in-out text-white'
                }
              />
              <Link
                href={urlBack}
                className="flex   items-center peer text-lg text-white "
              >
                {backTitle}
              </Link>
            </div>
          )}

          <h1 className="text-white text-5xl lg:text-6xl relative font-bold uppercase ">
            {title}
          </h1>
        </Wrapper>
      )}
    </div>
  );
};
export default Banner;
