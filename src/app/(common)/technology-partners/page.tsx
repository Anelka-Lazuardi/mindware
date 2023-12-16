'use client';
import Banner from '@/components/Banner';
import CardTech from '@/components/CardTech';
import FooterBox from '@/components/FooterBox';
import Wrapper from '@/components/layout/Wrapper';
import {
  cardTechPartners,
  cardTechPartnersSelect,
  dataPageTechnologyPartners,
} from '@/lib/data';
import { Select, SelectItem } from '@nextui-org/react';
import { useState } from 'react';
import { FiFilter } from 'react-icons/fi';

const handleFilterCard = (value: string) => {
  if (value === 'all') return cardTechPartners;

  const result = cardTechPartners.filter(
    (d) => d.type && d.type.includes(value)
  );

  return result;
};

export default function TechnologyPartners() {
  const [value, setValue] = useState<string>(cardTechPartnersSelect[0].value);

  const cardFiltered = handleFilterCard(value);

  const handleSelectionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setValue(e.target.value);
  };

  return (
    <section className="flex flex-col flex-1">
      <Banner {...dataPageTechnologyPartners.banner} />
      <div className="bg-[#F3F3F3] p-5  ">
        <Wrapper className="w-full flex text-primary h-[100px] divide-x-2 border gap-5 bg-white p-10 items-center  divide-primary">
          <div className="flex gap-2 items-center ">
            <FiFilter size="1.5em" />
            <p className="font-bold text-md ">Filter By</p>
          </div>
          <div className="flex-grow pl-5 ">
            <Select
              className="max-w-xs text-primary "
              selectedKeys={[value]}
              onChange={handleSelectionChange}
              variant="underlined"
              arria-label="Select Filter"
              aria-labelledby="select filter"
            >
              {cardTechPartnersSelect.map((ct) => (
                <SelectItem key={ct.value} value={ct.value}>
                  {ct.label}
                </SelectItem>
              ))}
            </Select>
          </div>
        </Wrapper>
      </div>
      <Wrapper>
        <div className="grid grid-cols-1 lg:grid-cols-4  xl:grid-cols-5 py-20 gap-5">
          {cardFiltered.map((card, index) => (
            <CardTech card={card} key={index} />
          ))}
        </div>
      </Wrapper>

      {dataPageTechnologyPartners.footerBox && (
        <FooterBox {...dataPageTechnologyPartners.footerBox} />
      )}
    </section>
  );
}
