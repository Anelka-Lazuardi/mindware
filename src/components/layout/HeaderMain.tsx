'use client';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import { CiSearch } from 'react-icons/ci';
import Wrapper from './Wrapper';
import Link from 'next/link';
import { useState } from 'react';

type Props = {
  activePage: number;
};

const helperCheck = (activePage: number): boolean => {
  return [0, 5].includes(activePage);
};

const HeaderMain = (props: Props) => {
  const [openSearch, setOpenSearch] = useState<boolean>(false);
  const { activePage } = props;

  const logo = helperCheck(activePage) ? 'logo-white' : 'logo-color';
  const colorIcon = helperCheck(activePage) ? 'white' : 'black';

  return (
    <section
      className={cn(
        'w-full   z-10 relative  justify-center items-center hidden',
        'lg:flex'
      )}
    >
      <Wrapper className="fixed p-0 top-10">
        <div className="flex justify-between items-center px-5">
          <div className="relative ">
            <Link href={'/'} aria-label={'Logo Header'}>
              <Image
                src={`/svg/${logo}.svg`}
                alt={logo}
                width={180}
                height={53}
              />
            </Link>
          </div>
          <div className="flex  justify-center items-center gap-5 relative z-40">
            <div
              className="w-full  cursor-pointer"
              onClick={() => setOpenSearch(true)}
            >
              <CiSearch color={colorIcon} size="1.5em" />
            </div>
            <Link
              href={'https://uae.mindwarecloud.com/'}
              aria-label={'MARKETPLACE '}
              className="button-header text-white  w-full text-center"
              target="_blank"
            >
              MARKETPLACE
            </Link>
            <Link
              href={'http://store.mindware.net/'}
              aria-label={'STORE '}
              className="button-header text-white w-full  text-center"
              target="_blank"
            >
              STORE
            </Link>
          </div>
        </div>
      </Wrapper>

      <div
        className={cn(
          'fixed w-full -z-1 bg-[#222e77] left-0 top-0  flex justify-center items-center opacity-0 duration-500 transition-opacity ease-in-out',
          openSearch && 'opacity-90 z-20 h-screen'
        )}
        onClick={() => setOpenSearch(false)}
      >
        <div className="max-w-3xl w-full ">
          {openSearch && (
            <input type="text" className="w-full z-60 relative bg-black" />
          )}
        </div>
      </div>
    </section>
  );
};

export default HeaderMain;
