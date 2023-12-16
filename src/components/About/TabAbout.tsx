'use client';
import { boxSideToSideAbout, countAbout } from '@/lib/data';
import { cn } from '@/lib/utils';
import { Tab, Tabs } from '@nextui-org/react';
import Image from 'next/image';
import AnimatedCounter from '../AnimatedCounter';
import BoxSideToSideList from '../BoxSideToSideList';
import Wrapper from '../layout/Wrapper';
import Map from '../Map';
import SectionText from '../SectionText';
import { FaArrowRight } from 'react-icons/fa';
import { useState } from 'react';
import { Key } from '@react-types/shared';

type Props = {};

const TabAbout = (props: Props) => {
  const [selectedKey, setSelectedKey] = useState<Key>('company overview');

  return (
    <div className="flex w-full flex-col  bg-[rgba(21,29,81,.64)] relative  flex-1 -top-16">
      <Tabs
        aria-label="Options"
        variant="underlined"
        classNames={{
          cursor: 'bg-secondary h-[4px] w-full -bottom-3  ',
          base: ' lg:max-w-4xl xl:max-w-6xl 2xl:max-w-8xl  mx-auto w-full   px-5  mx-auto',
          tabContent:
            'text-white text-xl  font-[300] group-data-[selected=true]:text-white ',
          tab: 'mr-5',
          tabList: 'py-3',
        }}
        selectedKey={selectedKey}
        onSelectionChange={setSelectedKey}
      >
        <Tab key="company overview" title="COMPANY OVERVIEW" className="p-0">
          <div className="bg-white">
            <BoxSideToSideList {...boxSideToSideAbout[0]} />
            <div className="w-full h-[450px] relative">
              <Image
                fill
                src={'https://www.mindware.net/images/missionvalue.jpg'}
                alt="About Box"
                sizes="100%"
                className="w-full h-auto object-cover object-center "
              />
              <Wrapper>
                <div className="w-full relative h-[450px]">
                  <div
                    className={cn(
                      'absolute bottom-0 translate-y-1/2 ',
                      'lg:-top-44'
                    )}
                  >
                    <div className="text-white bg-primary relative p-10 lg:h-[380px] lg:aspect-square lg:flex lg:justify-center lg:flex-col">
                      <h1 className="text-3xl font-bold mb-10">Vision</h1>
                      <p className="text-lg font-[300] ">
                        To become the distributor of choice for our vendors and
                        our partners in the Middle-East and Africa, by
                        delivering the best integrated technology solutions for
                        the digital transformation of the region
                      </p>
                    </div>
                  </div>
                </div>
              </Wrapper>
            </div>

            <Wrapper className=" w-full mt-52 overflow-hidden">
              <div className={cn('grid gap-10', 'lg:grid-cols-5 lg:gap-0')}>
                {countAbout.map((count, index) => (
                  <div className="text-center" key={index}>
                    <h1 className="text-5xl text-primary">
                      <AnimatedCounter from={0} to={count.count} />
                      <span>{count?.end}</span>
                    </h1>
                    <p className="pt-4 text-lg">{count.name}</p>
                  </div>
                ))}
              </div>
            </Wrapper>

            <div className="w-full mt-24 bg-[#d6e1ef] relative -bottom-16 lg:h-[400px]">
              <Wrapper className="flex flex-col gap-10">
                <SectionText
                  title={'Our Presence'}
                  url=""
                  desciption="Headquartered in Dubai, UAE since 1991, We have expanded our distribution reach regionally while growing our network of Partners."
                  classNameTitle="text-3xl font-bold xl:leading-normal "
                  className="max-w-xl pt-10"
                />
                <div className="flex text-secondary gap-3 items-center  ">
                  <button
                    className="text-sm flex   items-center peer "
                    onClick={() => setSelectedKey('our presence')}
                  >
                    Learn More
                  </button>
                  <FaArrowRight
                    size={'1em'}
                    className={
                      'peer-hover:translate-x-3 duration-200 ease-in-out'
                    }
                  />
                </div>
              </Wrapper>

              <div className="w-full  h-[400px] lg:absolute lg:right-0 lg:top-0 lg:w-1/2">
                <Map style={{ bottom: 0, height: 400 }} hideSatelite />
              </div>
            </div>
          </div>
        </Tab>
        <Tab key="our presence" title="OUR PRESENCE" className="p-0">
          <div className="bg-white relative">
            <BoxSideToSideList {...boxSideToSideAbout[1]} />
            <Map />
          </div>
        </Tab>
      </Tabs>
    </div>
  );
};

export default TabAbout;
