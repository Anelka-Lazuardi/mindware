import TabAbout from '@/components/About/TabAbout';
import Banner from '@/components/Banner';
import { dataPageAboutUs } from '@/lib/data';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us | Mindware',
};

export default function AboutUs() {
  return (
    <section className="flex flex-col flex-1">
      <Banner {...dataPageAboutUs.banner} />
      <TabAbout />
    </section>
  );
}
