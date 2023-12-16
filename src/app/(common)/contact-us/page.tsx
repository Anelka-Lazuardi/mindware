import Banner from '@/components/Banner';
import SectionText from '@/components/SectionText';
import Wrapper from '@/components/layout/Wrapper';
import { dataPageContactUs } from '@/lib/data';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us | Mindware',
};
// Thank you for getting in touch! We appreciate you contacting us. We try to respond as soon as possible, so a representative will get back to you the soonest.

export default function ContactUs() {
  return (
    <section className="flex flex-col flex-1">
      <Banner {...dataPageContactUs.banner} />
      <Wrapper>
        <SectionText
          title={'Contact Form'}
          url=""
          desciption="How can we assist you today? Please fill out the form below and let us know your concern or inquiry."
          classNameTitle="text-3xl font-bold xl:leading-normal "
        />
      </Wrapper>
      <Wrapper className="flex-grow lg:flex">
        <div className="grid grid-cols-2 gap-5 w-full py-20">
          <div className="flex flex-col max-w-lg gap-2">
            <label htmlFor="fisrtName" className="text-primaryDark text-lg ">
              First Name
            </label>
            <input
              type="text"
              name="fisrtName"
              id="fisrtName"
              className="ring-2 ring-[#afafaf] rounded-sm p-3 focus:ring-primaryDark"
            />
          </div>
          <div className="flex flex-col  max-w-lg gap-2">
            <label htmlFor="lastName" className="text-primaryDark text-lg ">
              Last Name
            </label>
            <input
              type="text"
              name="lastName"
              id="lastName"
              className="ring-2 ring-[#afafaf] rounded-sm p-3 focus:ring-primaryDark"
            />
          </div>
        </div>
      </Wrapper>
    </section>
  );
}
