import { linkMenu } from '@/lib/data';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import Wrapper from './Wrapper';
import Image from 'next/image';
import LinkMenu from '../LinkMenu';

type Props = {};

const Footer = (props: Props) => {
  return (
    <section className={cn('w-full  bg-primaryDark relative')}>
      <Wrapper className={cn('grid grid-cols-1 divide-y')}>
        <Wrapper className="py-0">
          <div
            className={cn(
              'flex flex-col divide-y',
              'lg:flex-row lg:divide-y-0 lg:divide-x'
            )}
          >
            <div className={cn('w-full')}>
              <LinkMenu classDiv="grid grid-cols-2 gap-3 py-10 xl:flex  lg:gap-2 lg:justify-between  text-white" />
            </div>
          </div>
        </Wrapper>
        <Wrapper>
          <div
            className={cn(
              'text-white w-full  items-center  flex flex-col  py-5 opacity-50',
              'lg:flex-row  lg:justify-between  '
            )}
          >
            <div className="w-fit">
              <p className="">2023 All rights reserved </p>
            </div>

            <div className="w-fit relative lg:-top-3">
              <div className="flex items-end justify-center gap-2 w-fit mx-auto">
                <p className="relative -top-2 ">Part of the</p>
                <div className="w-[130px] relative">
                  <Image
                    src="https://www.mindware.net/images/midis.svg"
                    width={0}
                    height={0}
                    alt="Logo mdis"
                    sizes="100%"
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
            <div className="w-fit">
              <p className="">Privacy Policy </p>
            </div>
          </div>
        </Wrapper>
      </Wrapper>
    </section>
  );
};

export default Footer;
