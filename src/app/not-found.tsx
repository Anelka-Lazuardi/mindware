import Banner from '@/components/Banner';
import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';
import Wrapper from '@/components/layout/Wrapper';
import { dataPageNotFound } from '@/lib/data';
import { cn } from '@/lib/utils';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pege Not Foud | Mindware',
};

export default function NotFound() {
  return (
    <div className="flex flex-col min-h-screen ">
      <Header />

      <Banner {...dataPageNotFound.banner} />

      <Wrapper className="flex-grow lg:flex">
        <div
          className={cn('flex w-full my-5  gap-4 ', 'lg:my-0 lg:items-center')}
        >
          <span className="w-[5px] h-[30px] bg-secondary rounded-3xl" />
          <div className={cn('flex flex-col gap-7', 'lg:flex-row')}>
            <h1 className="text-primary text-3xl font-bold">PAGE NOT FOUND</h1>
            <p className="text-md  max-w-[20rem] lg:max-w-[23rem] xl:max-w-[32rem]">
              The page you are looking for was not found.
            </p>
          </div>
        </div>
      </Wrapper>
      <Footer />
    </div>
  );
}
