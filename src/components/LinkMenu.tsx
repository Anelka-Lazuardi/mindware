import { linkMenu } from '@/lib/data';
import { cn } from '@/lib/utils';
import { ClassValue } from 'clsx';
import Link from 'next/link';

type Props = {
  classDiv?: ClassValue;
  classLink?: ClassValue;
};

const LinkMenu = (props: Props) => {
  return (
    <div className={cn(props.classDiv)}>
      {linkMenu.map((link, index) => (
        <Link
          key={index}
          href={link.url}
          className={cn(
            props.classLink,
            'hover:opacity-60 duration-500 ease-out',
            link.label === 'News & Insights' && 'text-red-400'
          )}
          aria-label={link.label}
        >
          {link.label}
        </Link>
      ))}
    </div>
  );
};

export default LinkMenu;
