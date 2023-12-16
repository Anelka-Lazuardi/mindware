import { cn } from '@/lib/utils';
import React from 'react';

type Props = {
  open: boolean;
  setOpen: (open: boolean) => void;
  onHeader: boolean;
};

function Hamburger({ open, setOpen, onHeader }: Props) {
  return (
    <div
      className={cn(
        'flex gap-1 flex-col  cursor-pointer group',
        open && 'gap-0 '
      )}
      onClick={() => setOpen(!open)}
    >
      <span
        className={cn(
          'w-8 h-1  rounded-2xl group-hover:w-10 duration-300 ease-in-out',
          onHeader ? 'bg-slate-900' : 'bg-white',
          open
            ? 'w-3  -rotate-45 origin-left group-hover:w-3 relative -bottom-1 bg-white '
            : ''
        )}
      ></span>
      <span
        className={cn(
          'w-5 h-1 bg-slate-900 rounded-xl group-hover:w-10 duration-300 ease-in-out',
          onHeader ? 'bg-slate-900' : 'bg-white',
          open && 'w-6 group-hover:w-6 bg-white'
        )}
      ></span>
      <span
        className={cn(
          'w-10 h-1 bg-slate-900 rounded-xl',
          onHeader ? 'bg-slate-900' : 'bg-white',
          open && 'w-3  rotate-45 origin-left relative -top-1 bg-white'
        )}
      ></span>
    </div>
  );
}

export default Hamburger;
