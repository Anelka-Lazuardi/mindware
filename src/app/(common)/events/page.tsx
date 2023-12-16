import Banner from '@/components/Banner';
import NoResource from '@/components/NoResource';
import Wrapper from '@/components/layout/Wrapper';
import { dataPageEvents } from '@/lib/data';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Events | Mindware',
};
export default function Events() {
  return (
    <section className="flex flex-col flex-1">
      <Banner {...dataPageEvents.banner} />
      <Wrapper className="flex-grow lg:flex">
        <NoResource name={dataPageEvents.key} />
      </Wrapper>
    </section>
  );
}
