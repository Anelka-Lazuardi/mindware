import Banner from '@/components/Banner';
import ListCard from '@/components/ListCard';
import SectionText from '@/components/SectionText';
import Wrapper from '@/components/layout/Wrapper';
import { dataPageContactUs } from '@/lib/data';
import { cn } from '@/lib/utils';
import { Metadata } from 'next';
import Image from 'next/image';
import FormField from './FormField';

export const metadata: Metadata = {
  title: 'Contact Us | Mindware',
};

type Props = {
  card: any;
};

const Card = (props: Props) => {
  const { card } = props;
  return (
    <div className="flex flex-col shadow-lg cursor-pointer relative ">
      <div
        className={cn(
          'h-[186px] w-full  bg-cover bg-center relative overflow-hidden',
          'xl:h-[250px]'
        )}
      >
        <Image
          src={card.urlImage}
          fill
          alt={card.label}
          className="hover:scale-110  duration-500 ease-in-out transition-transform  object-cover "
          sizes="100%"
        />
      </div>
      <div className="flex flex-col gap-9 py-10 px-5  flex-grow ">
        <h3 className="text-primary text-2xl font-bold min-h-[60px] 2xl:min-h-[30px]">
          {card.label}
        </h3>

        {card.location && (
          <div className="w-full">
            <h5 className="text-primaryDark text-lg font-bold  2xl:min-h-[30px]">
              {card.location.name}
            </h5>
            <p className=" text-sm lg:text-lg max-w-xs font-[300] text-[#1D203C] ">
              {card.location.address}
            </p>
          </div>
        )}
        {card.additional && (
          <div className="w-full flex flex-col gap-2">
            {card.additional.map((add: any, index: string) => (
              <p
                className=" text-sm lg:text-sm  font-[300] text-[#1D203C] "
                key={index}
              >
                <span className="font-bold">{add.key}</span> {add.value}
              </p>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default function ContactUs() {
  return (
    <section className="flex flex-col flex-1">
      <Banner {...dataPageContactUs.banner} />
      <Wrapper className=" mt-10">
        <SectionText
          title={'Contact Form'}
          url=""
          desciption="How can we assist you today? Please fill out the form below and let us know your concern or inquiry."
        />
      </Wrapper>
      <Wrapper className="w-full my-20">
        <FormField />
      </Wrapper>

      {dataPageContactUs.listCard && (
        <ListCard
          ContentCard={Card}
          dataCard={dataPageContactUs.listCard.data}
          title={dataPageContactUs.listCard.title}
        />
      )}
    </section>
  );
}
