import { cn } from '@/lib/utils';
import { ClassValue } from 'clsx';

type Props = {
  children: React.ReactNode;
  className?: ClassValue;
};

const Wrapper = (props: Props) => {
  return (
    <div
      className={cn(
        'w-full px-5 py-10 mx-auto',
        ' lg:py-0 lg:max-w-4xl xl:max-w-6xl 2xl:max-w-8xl',
        props.className
      )}
    >
      {props.children}
    </div>
  );
};

export default Wrapper;
