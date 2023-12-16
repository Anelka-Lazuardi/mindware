import Link from 'next/link';
import { IconType } from 'react-icons';

type Props = {
  url: string;
  Icon: IconType;
  name: string;
  size: string;
};

const IconLink = (props: Props) => {
  const { url, Icon, name, size } = props;
  return (
    <Link href={url} target="_blank" aria-label={name}>
      <Icon color="white" size={size} />
    </Link>
  );
};

export default IconLink;
