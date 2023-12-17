import React from 'react';

type Props = {
  name: string;
};

const NoResource = (props: Props) => {
  return (
    <div className="flex flex-row  w-full items-center  mt-28 ">
      <p className="text-md">
        There are currently no {props.name} to display, please check again
        later.
      </p>
    </div>
  );
};

export default NoResource;
