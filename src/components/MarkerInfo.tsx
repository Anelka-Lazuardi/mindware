import Image from 'next/image';
import React from 'react';

type Props = {};

const MarkerInfo = (props: Props) => {
  return (
    <div className="flex absolute bottom-10 left-10 gap-5">
      <div className="flex gap-3 justify-center items-center ">
        <Image
          src="/svg/locationPinDark.svg"
          width={0}
          height={0}
          className="h-auto w-[15px]"
          alt="Main Offices"
        />
        <p className="text-primary text-sm font-bold">Main Offices</p>
      </div>
      <div className="flex gap-3 justify-center items-center ">
        <Image
          src="/svg/locationPin.svg"
          width={0}
          height={0}
          className="h-auto w-[15px]"
          alt="Regional Offices"
        />
        <p className="text-primary text-sm font-bold">Regional Offices</p>
      </div>
    </div>
  );
};

export default MarkerInfo;
