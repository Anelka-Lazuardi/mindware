import Banner from '@/components/Banner';
import SectionText from '@/components/SectionText';
import Wrapper from '@/components/layout/Wrapper';
import { dataPageBecomePartners } from '@/lib/data';
import { Metadata } from 'next';
import FormField from './FormField';

export const metadata: Metadata = {
  title: 'Become a Partner | Mindware',
};

type Props = {};

export default function ContactUs() {
  return (
    <section className="flex flex-col flex-1">
      <Banner {...dataPageBecomePartners.banner} />
      <Wrapper className=" mt-10">
        <SectionText
          title={'Become A Partner'}
          url=""
          desciption="Thank you for your interest in becoming one of our channel partners. Becoming a Mindware partner establishes a strategic relationship with your company and Mindware. Join us by filling out the partner application below."
        />
      </Wrapper>
      <Wrapper className="w-full my-20">
        <FormField />
      </Wrapper>
    </section>
  );
}
