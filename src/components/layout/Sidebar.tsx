'use client';
import { IconLinkData } from '@/lib/data';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import { useState } from 'react';
import { CiSearch } from 'react-icons/ci';
import Hamburger from '../Hamburger';
import IconLink from '../IconLink';
import MenuSidebar from '../MenuSidebar';
import Wrapper from './Wrapper';
import Link from 'next/link';

type Props = {};

const Sidebar = (props: Props) => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <aside className={cn('w-full bg-white  py-4 px-5', 'lg:py-0')}>
      <div
        className={cn(
          'flex flex-row items-center justify-between w-full  z-[55]  relative ',
          'lg:hidden'
        )}
      >
        <div className="h-8 relative w-36 ">
          <Image
            src={`/svg/logo-${open ? 'white' : 'color'}.svg`}
            fill
            alt="Logo Full Color"
          />
        </div>
        <Hamburger open={open} setOpen={setOpen} onHeader />
      </div>
      <div
        className={cn(
          'w-full z-30 top-0 left-0 bg-primarySide fixed min-h-screen px-5 pt-20 text-white flex flex-col gap-8 transition-opacity  duration-700 ease-in-out ',
          !open && 'opacity-0 scale-0',
          'lg:w-24 lg:opacity-100 lg:scale-100   '
        )}
      >
        <div
          className={cn(
            'absolute top-12 w-full  hidden',
            'lg:left-1/2 lg:-translate-x-1/2 lg:flex lg:justify-center'
          )}
        >
          <Hamburger open={open} setOpen={setOpen} onHeader={false} />
        </div>
        <div className={cn('flex w-full justify-between gap-5', 'lg:hidden')}>
          <Link
            href={'https://uae.mindwarecloud.com/'}
            aria-label={'MARKETPLACE '}
            className="button-header text-white w-full text-center"
            target="_blank"
          >
            MARKETPLACE
          </Link>
          <Link
            href={'http://store.mindware.net/'}
            aria-label={'STORE '}
            className="button-header text-white w-full text-center"
            target="_blank"
          >
            STORE
          </Link>
        </div>
        <div
          className={cn(
            'flex w-full outline outline-white rounded-2xl px-2',
            'lg:hidden'
          )}
        >
          <input
            type="text"
            className="w-full bg-transparent color-white ring-0 outline-none px-2 text-sm"
            placeholder="Enter your keywords..."
          />
          <CiSearch
            color="white"
            size="2.5em"
            className="cursor-pointer"
            onClick={() => console.log(1)}
          />
        </div>

        <div className="w-full lg:hidden">
          <MenuSidebar />
        </div>

        <div
          className={cn(
            'flex items-center gap-11 justify-center w-full mt-4  ',
            'lg:flex-col lg:gap-5 lg:absolute lg:bottom-10 lg:left-1/2 lg:-translate-x-1/2  '
          )}
        >
          {IconLinkData.map((value, index) => (
            <IconLink
              url={value.url}
              key={index}
              Icon={value.Icon}
              name={value.name}
              size={'1.4em'}
            />
          ))}
        </div>
      </div>
      <div
        className={cn(
          'h-screen  fixed left-24 z-[15]  w-0',
          open && 'lg:w-full  lg:flex  justify-center items-center'
        )}
      >
        <div
          className={cn(
            ' bg-primarySide w-0 h-screen transition-all duration-700 ease-in-out text-white overflow-hidden ',
            open &&
              'lg:w-[320px] xl:w-[400px] 2xl:w-[450px]  lg:overflow-visible  '
          )}
        >
          <div className={cn('flex justify-center mt-10')}>
            <div className="flex flex-col gap-10">
              <Image
                src={'/svg/logo-white.svg'}
                alt="Logo White"
                width={180}
                height={53}
              />
              <MenuSidebar />
            </div>
          </div>
        </div>
        <div
          className="flex-grow h-screen "
          onClick={() => setOpen(false)}
        ></div>
      </div>
    </aside>
  );
};

export default Sidebar;
