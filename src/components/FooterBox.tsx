import { footerBox } from '@/lib/type';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import React from 'react';

const FooterBox = (props: footerBox) => {
  const { title, description, url, urlLabel } = props;
  return (
    <div className="p-10">
      <div
        className={cn(
          'bg-primary text-white flex items-center flex-col gap-5 py-14 px-5 text-center',
          'lg:ggap-0 lg:px-20 lg:flex-row  lg:text-left'
        )}
      >
        <div className="flex flex-col gap-5 w-full ">
          <h1 className="text-white text-3xl">{title}</h1>
          <p className="max-w-2xl ">{description}</p>
        </div>
        <div className="w-full">
          <div className="w-fit mx-auto lg:mx-0 lg:ml-auto">
            <Link
              href={url}
              className="uppercase text-sm flex items-center  py-2 px-8  ring-2 rounded-2xl ring-white hover:bg-white hover:text-primary "
            >
              {urlLabel}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterBox;
