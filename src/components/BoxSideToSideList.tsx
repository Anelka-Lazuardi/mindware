import React from 'react';
import Wrapper from './layout/Wrapper';
import SectionText from './SectionText';
import { boxSideToSideList } from '@/lib/type';

const BoxSideToSideList = (props: boxSideToSideList) => {
  const { title, description } = props;
  return (
    <div className="bg-white py-32 ">
      <Wrapper className="grid grid-cols-1 gap-10  lg:grid-cols-2  ">
        <SectionText
          title={title}
          url=""
          classNameTitle="text-3xl font-bold xl:leading-normal"
        />
        <div className="pl-5 lg:pl-0 flex flex-col gap-8">
          {description.map((desc, index) => (
            <p className="text-md text-[#1D203C] font-[300]" key={index}>
              {desc}
            </p>
          ))}
        </div>
      </Wrapper>
    </div>
  );
};

export default BoxSideToSideList;
