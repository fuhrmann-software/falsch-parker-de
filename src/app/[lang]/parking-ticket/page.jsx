import React from 'react';
import { Container } from '@/components/container/container';
import { FaqSection } from '@/components/faq/faqSection';
import { DivideBanner } from '@/components/divideBanner/divideBanner';
import BlankIcon from '@/images/global/icons/divideIcons/blank.svg';
import PortfolioIcon from '@/images/parking-ticket/icons/portfolio.svg';
import { NoParking } from '@/components/noParking/noParking';
import { SeeHowItWorks } from '@/components/seeHowItWorks/seeHowItWorks';
import { AppDescription } from '@/components/appDescription/appDescription';
import { WrongParkers } from '@/components/wrongParkers/wrongParkers';
import { Claim } from '@/components/claim/claim';
import { ParkingManagement } from '@/app/[lang]/parking-ticket/components/parkingManagement';
import { ParkingCards } from '@/app/[lang]/parking-ticket/components/parkingCards';
import { CCTVAi } from '@/components/cctv/cctvAi';
import { ReceivedParkingFine } from '@/app/[lang]/parking-ticket/components/receivedParkingFine';
import { CancelOrder } from '@/app/[lang]/parking-ticket/components/cancelOrder';
import { parkingTicketData } from '@/components/faq/faqData';
import { buildMetadata } from '@/utils/metadata';

export const metadata = buildMetadata('parkingTicket');

const ParkingTicketPage = () => {
  const targetElement = 'parking-ticket-how-it-works';
  return (
    <Container>
      <div className='mb-[172px] mt-[80px] max-md:mb-[60px]'>
        <DivideBanner
          titleComponent='h1'
          title='Digitale Umtriebsentschädigung ausstellen. Für Firmen / und Privatnutzer.'
          subtitle='Unsere FalschParker-Appandwendung bietet eine breite Palette
          von Funktionen, die über die Ausstellung digitaler Umtriebsentschädigungen
          hinausgehen und das Parkraummanagement optimal unterstützen. Dank unseres
          entwickeltes Automatisierungsprozesses übernimmt unsere App die meisten
          Aufgaben, angefangen von der Halterauskunft über das Rechnungswesen bis hin
          zum Inkasso. So können Sie sich auf das Wesentliche konzentrieren und
          Zeit sowie Ressourcen effizient nutzen'
          images={[BlankIcon, PortfolioIcon]}
        />
      </div>

      <NoParking targetElement={targetElement} />

      <section>
        <SeeHowItWorks targetRef={targetElement} />
        <AppDescription />
        <WrongParkers />
      </section>

      <div className='mt-[20px] max-md:mb-[100px] md:mb-[172px]'>
        <Claim />
      </div>

      <ParkingManagement />

      <div className='my-5 md:my-[150px]'>
        <ParkingCards />
      </div>

      <CCTVAi />

      <div className='max-md:mt-5 md:mt-[172px]'>
        <CancelOrder />
      </div>

      <FaqSection data={parkingTicketData} />

      <div className='max-md:mb-[100px] md:mb-[80px]'>
        <ReceivedParkingFine />
      </div>
    </Container>
  );
};

export default ParkingTicketPage;
