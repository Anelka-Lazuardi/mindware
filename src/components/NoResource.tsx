import React from 'react';

type Props = {
  name: string;
};

const NoResource = (props: Props) => {
  return (
    <div className="flex flex-row bg-white w-full items-center">
      <p className="text-md">
        There are currently no {props.name} to display, please check again
        later.
      </p>
    </div>
  );
};

export default NoResource;
