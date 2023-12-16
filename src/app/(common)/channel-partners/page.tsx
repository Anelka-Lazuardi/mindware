import Banner from '@/components/Banner';
import BoxSideToSide from '@/components/BoxSideToSide';
import BoxWithImage from '@/components/BoxWithImage';
import FooterBox from '@/components/FooterBox';
import { dataPageChannelPartners } from '@/lib/data';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Channel Partners | Mindware',
};

export default function ChannelPartners() {
  return (
    <section className="flex flex-col flex-1">
      <Banner {...dataPageChannelPartners.banner} />

      {dataPageChannelPartners.boxSideToSide && (
        <BoxSideToSide {...dataPageChannelPartners.boxSideToSide} />
      )}

      {dataPageChannelPartners.listBox && (
        <BoxWithImage listBox={dataPageChannelPartners.listBox} />
      )}

      {dataPageChannelPartners.footerBox && (
        <FooterBox {...dataPageChannelPartners.footerBox} />
      )}
    </section>
  );
}
