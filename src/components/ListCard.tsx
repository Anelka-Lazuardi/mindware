import React from 'react';
import Wrapper from './layout/Wrapper';
import SectionText from './SectionText';
import { cn } from '@/lib/utils';
import { CardsType } from '@/lib/type';

type Props = {
  ContentCard: JSX.ElementType;
  title: string;
  dataCard: CardsType[];
};

const ListCard = (props: Props) => {
  const { title, dataCard, ContentCard } = props;

  return (
    <div className="bg-[#f3f3f3] py-20 f">
      <Wrapper className="flex-grow lg:flex flex-col gap-5 ">
        <SectionText
          title={title}
          url=""
          classNameTitle="text-3xl font-bold"
          className="py-10"
        />
        <div className={cn('grid grid-cols-1 gap-5', 'md:grid-cols-3 ')}>
          {dataCard.map((card, index) => (
            <ContentCard key={index} card={card} />
          ))}
        </div>
      </Wrapper>
    </div>
  );
};

export default ListCard;
