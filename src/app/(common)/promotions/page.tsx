import Banner from '@/components/Banner';
import NoResource from '@/components/NoResource';
import Wrapper from '@/components/layout/Wrapper';
import { dataPagePromotions } from '@/lib/data';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Promotions | Mindware',
};

export default function Events() {
  return (
    <section className="flex flex-col flex-1">
      <Banner {...dataPagePromotions.banner} />
      <Wrapper className="flex-grow lg:flex">
        <NoResource name={dataPagePromotions.key} />
      </Wrapper>
    </section>
  );
}
