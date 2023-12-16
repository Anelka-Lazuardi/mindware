import Banner from '@/components/Banner';
import BoxSideToSide from '@/components/BoxSideToSide';
import Card from '@/components/Card';
import FooterBox from '@/components/FooterBox';
import ListCard from '@/components/ListCard';
import { dataPageSolutions } from '@/lib/data';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Solutions | Mindware',
};

export default function Solutions() {
  return (
    <section className="flex flex-col flex-1">
      <Banner {...dataPageSolutions.banner} />

      {dataPageSolutions.boxSideToSide && (
        <BoxSideToSide {...dataPageSolutions.boxSideToSide} />
      )}

      {dataPageSolutions.listCard && (
        <ListCard
          ContentCard={Card}
          dataCard={dataPageSolutions.listCard.data}
          title={dataPageSolutions.listCard.title}
        />
      )}

      {dataPageSolutions.footerBox && (
        <FooterBox {...dataPageSolutions.footerBox} />
      )}
    </section>
  );
}
