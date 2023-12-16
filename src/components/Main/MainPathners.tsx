'use client';
import { partnersBox } from '@/lib/data';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import SectionText from '../SectionText';
import { motion, useAnimate } from 'framer-motion';
import Wrapper from '../layout/Wrapper';

type Props = {};

const MainPathners = (props: Props) => {
  return (
    <section
      className={cn(
        'w-full  bg-cover bg-center bg-main-background flex  ',
        'lg-layer'
      )}
    >
      <Wrapper className="w-full">
        <div className={cn('flex flex-col gap-10', 'lg:grid lg:grid-cols-2')}>
          <div
            className={cn(
              'relative grid grid-cols-2  w-full max-w-xs gap-5 mx-auto',
              'lg:max-w-2xl'
            )}
          >
            {partnersBox.map((box, index) => (
              <div
                className={cn(
                  'w-full  relative flex ',
                  [1, 3].includes(index)
                    ? '-top-14 justify-start'
                    : 'justify-end'
                )}
                key={index}
              >
                <motion.div
                  className={cn(
                    'w-[150px]  h-[150px] relative hover:bg-primary   bg-slate-800 group  ',
                    'lg:w-[200px] lg:h-[200px]',
                    'xl:w-[235px] xl:h-[235px]'
                  )}
                  initial={{ opacity: 0, transform: 'translateY(50px)' }}
                  whileInView={{ opacity: 1, transform: 'translateX(0)' }}
                  transition={{ duration: 0.9, ease: 'easeInOut' }}
                  viewport={{ once: true }}
                >
                  <Image
                    src={box.url}
                    fill
                    alt={box.label}
                    className="absolute object-cover   transition-all group-hover:opacity-0 duration-500 ease-in-out"
                    // priority
                    sizes="100%"
                  />
                  <p
                    className={cn(
                      ' w-full text-white text-xl absolute text-center top-1/2 -translate-y-1/2 group-hover:opacity-0 duration-1000 ease-in-out transition-opacity font-bold',
                      'xl:text-3xl'
                    )}
                  >
                    {box.label}
                  </p>
                  <p
                    className={cn(
                      'w-full px-2  text-center py-5 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-in-out text-xs',
                      'lg:text-sm lg:absolute lg:top-1/2 lg:-translate-y-1/2',
                      'xl:text-lg'
                    )}
                  >
                    {box.description}
                  </p>
                </motion.div>
              </div>
            ))}
          </div>

          <SectionText
            title="Over 4,000 Regional Partners And Growing"
            desciption="Our partners are core to our success, and we make empowering and enabling our channel our foremost priority."
            secondDesciption="Through ongoing research into customer aspirations, market developments, and technological advancements, we co-develop innovations with our partners that enable them to enhance their value proposition and capitalize on new opportunities.        "
            url="/"
            buttonLabel="Get To Know Our Channel Partners"
            classNameTitle="lg:text-4xl xl:text-5xl"
          />
        </div>
      </Wrapper>
    </section>
  );
};

export default MainPathners;
