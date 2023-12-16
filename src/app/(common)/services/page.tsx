import Banner from '@/components/Banner';
import BoxSideToSide from '@/components/BoxSideToSide';
import Card from '@/components/Card';
import FooterBox from '@/components/FooterBox';
import ListCard from '@/components/ListCard';
import { dataPageServices } from '@/lib/data';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Services | Mindware',
};

export default function Solutions() {
  return (
    <section className="flex flex-col flex-1">
      <Banner {...dataPageServices.banner} />

      {dataPageServices.boxSideToSide && (
        <BoxSideToSide {...dataPageServices.boxSideToSide} />
      )}

      {dataPageServices.listCard && (
        <ListCard
          ContentCard={Card}
          dataCard={dataPageServices.listCard.data}
          title={dataPageServices.listCard.title}
        />
      )}

      {dataPageServices.footerBox && (
        <FooterBox {...dataPageServices.footerBox} />
      )}
    </section>
  );
}
