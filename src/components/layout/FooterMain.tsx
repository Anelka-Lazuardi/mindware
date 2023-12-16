import { linkMenu } from '@/lib/data';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import Wrapper from './Wrapper';
import LinkMenu from '../LinkMenu';

type Props = {};

const FooterMain = (props: Props) => {
  return (
    <section
      className={cn(
        'w-full flex flex-col bg-primaryDark relative ',
        'lg-layer '
      )}
    >
      <Wrapper className="py-0">
        <div
          className={cn(
            'flex flex-col divide-y',
            'lg:flex-row lg:divide-y-0 lg:divide-x'
          )}
        >
          <div className={cn('flex w-full my-5  gap-4  ', 'lg:my-0')}>
            <span className="w-[5px] h-[30px] bg-secondary rounded-3xl" />
            <div className="flex flex-col gap-7">
              <h1 className="text-white text-3xl font-bold">Get In Touch!</h1>
              <p className="text-md text-white max-w-[18rem] lg:max-w-[23rem] xl:max-w-[32rem]">
                Whether you have a question or any enquiry, our team is ready to
                answer all your requests.
              </p>
              <div className="flex text-white gap-3 items-center  ">
                <Link
                  href={'/'}
                  className="text-sm flex items-center  py-2 px-8  ring-2 rounded-2xl ring-white hover:bg-white hover:text-primary "
                >
                  CONTACT DETAILS
                </Link>
              </div>
            </div>
          </div>
          <div className={cn('w-full')}>
            <LinkMenu classDiv="grid grid-cols-2 gap-3 py-10 lg:gap-2 lg:py-0  lg:max-w-xs  mx-auto xl:gap-5 xl:max-w-md text-white" />
          </div>
        </div>
      </Wrapper>
      <Wrapper className="lg:absolute lg:bottom-14 lg:left-1/2 lg:-translate-x-1/2 ">
        <hr className="lg:hidden" />
        <div
          className={cn(
            'text-white  text-center flex flex-col gap-5 py-5',
            'lg:flex-row lg:divide-y-0 lg:justify-between lg:relative lg:text-left lg:-bottom-10'
          )}
        >
          <div className="w-full">
            <p className="opacity-50">2023 All rights reserved </p>
          </div>
          <div className="w-full lg:text-center">
            <p className="opacity-50">Privacy Policy </p>
          </div>
          <div className="w-full lg:text-right ">
            <p className="opacity-50">
              Designed & Developed by Born Interactive
            </p>
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default FooterMain;
