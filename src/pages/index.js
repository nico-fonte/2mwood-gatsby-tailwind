import React from 'react';
import Button from '../components/Button';
import Card from '../components/Card';
import Layout from '../components/layout/Layout';
import SplitSection from '../components/SplitSection';
import PavimentiIcon from '../svg/PavimentiIcon';
import SerramentiIcon from '../svg/SerramentiIcon';
import CreazioniIcon from '../svg/CreazioniIcon';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { FaPhone } from 'react-icons/fa';
import { FaEnvelope } from 'react-icons/fa';

const Index = () => (
  <Layout>
    <section className="pt-20">
      <div className="w-full relative">
        <div class="absolute w-full h-full opacity-70 top-0 left-0 z-10 bg-gradient-to-r from-gray-600 via-amber-500"></div>

        <div className="absolute z-20 flex flex-col items-center w-full justify-center h-full">
          <div className="text-white font-bold text-2xl sm:text-4xl lg:text-6xl">
            Riqualificazione e Creazione
          </div>
          <div className="text-white text-md lg:text-2xl mt-2 font-medium">
            Al servizio del nostro cliente
          </div>
        </div>
        <img src="https://i.ibb.co/QbTwCSB/hero.jpg" />
      </div>
      {/* <div className="container mx-auto px-8 lg:flex">
        <div className="text-center lg:text-left lg:w-1/2">
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-none">
            Main title of your landing page
          </h1>
          <p className="text-xl lg:text-2xl mt-6 font-light">
            Free landing page template to promote your business startup and generate leads for the
            offered services
          </p>
          <p className="mt-8 md:mt-12">
            <Button size="lg">Get Started</Button>
          </p>
          <p className="mt-4 text-gray-600">Sed fermentum felis ut cursu</p>
        </div>
        <div className="lg:w-1/2">
          <HeroImage />
        </div>
      </div> */}
    </section>
    <section id="features" className="py-20 lg:pb-28 lg:pt-28 lg:mx-20">
      <div className="container mx-auto text-center">
        <div className="flex flex-col sm:flex-row sm:-mx-3 mt-12">
          <div className="flex-1 px-3">
            <AnchorLink href="#serramenti">
              <Card className="mb-8">
                <div className="w-32 mx-auto mb-4">
                  <SerramentiIcon />
                </div>
                <p className="font-medium text-xl text-primary uppercase">Serramenti</p>
                {/* <p className="mt-4">
                An enim nullam tempor gravida donec enim ipsum blandit porta justo integer odio
                velna vitae auctor integer.
              </p> */}
              </Card>
            </AnchorLink>
          </div>
          <div className="flex-1 px-3">
            <AnchorLink href="#pavimenti">
              <Card className="mb-8">
                <div className="w-32 mx-auto mb-4">
                  <PavimentiIcon />
                </div>
                <p className="font-medium text-xl text-primary uppercase">Pavimenti</p>
                {/* <p className="mt-4">
                An enim nullam tempor gravida donec enim ipsum blandit porta justo integer odio
                velna vitae auctor integer.
              </p> */}
              </Card>
            </AnchorLink>
          </div>
          <div className="flex-1 px-3">
            <AnchorLink href="#creazioni">
              <Card className="mb-8">
                <div className="w-32 mx-auto mb-4">
                  <CreazioniIcon />
                </div>
                <p className="font-medium text-xl text-primary uppercase">Creazioni</p>
                {/* <p className="mt-4">
                An enim nullam tempor gravida donec enim ipsum blandit porta justo integer odio
                velna vitae auctor integer.
              </p> */}
              </Card>
            </AnchorLink>
          </div>
        </div>
      </div>
    </section>

    <SplitSection
      id="serramenti"
      primarySlot={
        <div className="lg:pr-32 xl:pr-48">
          <h3 className="text-5xl font-light leading-tight text-primary">Serramenti</h3>
          <p className="mt-8 text-2xl font-light leading-tight">
            Per noi riqualificare un serramento in legno significa ridare vita ad un materiale
            naturale fondamentale alla nostra esistenza.
          </p>
          <p className="mt-8 text-md font-light leading-relaxed">
            Riqualificare un componente della nostra casa, una parte della vostra abitazione che può
            essere riutilizzato al massimo dei livelli per molti anni ancora senza essere gettato.
            Trattamenti battericidi, finiture personalizzate, inserimento di vetri certificati e
            guarnizioni a tenuta termo acustica. Richiedici informazioni con sopralluogo.
          </p>
        </div>
      }
      secondarySlot={<img src="https://images.pexels.com/photos/5997996/pexels-photo-5997996.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />}
    />
    <SplitSection
      id="pavimenti"
      reverseOrder
      primarySlot={
        <div className="lg:pl-32 xl:pl-48">
          <h3 className="text-5xl font-light leading-tight text-primary">Pavimenti</h3>
          <p className="mt-8 text-2xl font-light leading-tight">
            Più il tempo passa e più il legno ci regala sfumature e tonalità della sua maturazione
          </p>
          <p className="mt-8 text-md font-light leading-relaxed">
            Come per i serramenti anche il pavimento in legno dopo anni di duro servizio sente
            necessità di essere trattato. Levigatura con appositi strumenti, trattamenti di
            verniciatura o oliatura e resine ridonano l’originale splendore a queste superfici per
            molti anni ancora senza rinunciare magari ad un legno prestigioso che aspettava solo di
            essere riconsiderato.
          </p>
        </div>
      }
      secondarySlot={<img src="https://i.ibb.co/W22Gbgc/Untitled.png" />}
    />
    <SplitSection
      id="creazioni"
      primarySlot={
        <div className="lg:pr-32 xl:pr-48">
          <h3 className="text-5xl font-light leading-tight text-primary">Creazioni</h3>
          <p className="mt-8 text-2xl font-light leading-tight">
            La nostra passione ed esperienza ci porta ogni giorno a migliorare
          </p>
          <p className="mt-8 text-md font-light leading-relaxed">
            Miglioriamo i nostri servizi e realizzazioni offrendo un servizio a 360° su interventi
            chiavi in mano o su articoli personalizzati, garantendo in ogni caso il nostro lavoro
            con la serietà che ci distingue.
          </p>
        </div>
      }
      secondarySlot={<img src="https://images.pexels.com/photos/6284235/pexels-photo-6284235.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />}
    />

    {/* <section id="stats" className="py-20 lg:pt-32">
      <div className="container mx-auto text-center">
        <LabelText className="text-gray-600">Our customers get results</LabelText>
        <div className="flex flex-col sm:flex-row mt-8 lg:px-24">
          <div className="w-full sm:w-1/3">
            <StatsBox primaryText="+100%" secondaryText="Stats Information" />
          </div>
          <div className="w-full sm:w-1/3">
            <StatsBox primaryText="+100%" secondaryText="Stats Information" />
          </div>
          <div className="w-full sm:w-1/3">
            <StatsBox primaryText="+100%" secondaryText="Stats Information" />
          </div>
        </div>
      </div>
    </section>
    <section id="testimonials" className="py-20 lg:py-40">
      <div className="container mx-auto">
        <LabelText className="mb-8 text-gray-600 text-center">What customers are saying</LabelText>
        <div className="flex flex-col md:flex-row md:-mx-3">
          {customerData.map((customer) => (
            <div key={customer.customerName} className="flex-1 px-3">
              <CustomerCard customer={customer} />
            </div>
          ))}
        </div>
      </div>
    </section> */}
    <section id="contatti" className="container mx-auto my-20 px-8 mb-40">
      <div className="p-6 bg-primary-darker rounded-lg text-center text-white shadow">
        <h3 className="text-2xl md:text-5xl font-semibold">Contattaci per un preventivo su misura!</h3>
        <p className="mt-8 text-lg md:text-xl text-white font-thin">
          Quis lectus nulla at volutpat diam ut. Enim lobortis scelerisque fermentum dui faucibus
          in.
        </p>
        <p className="mt-8">
          <a
            href="tel: 333 - 1234567"
            aria-label="Il nostro telefono"
            title="Il nostro telefono"
            className="transition-colors duration-300 hover:text-white"
          >
            <Button size="xl" className="w-full md:w-auto mb-4 md:mb-0 md:mr-4 shadow">
              <FaPhone className="inline" /> Telefono
            </Button>
          </a>
          <a
            href="mailto:info@2mwood.com"
            aria-label="La nostra email"
            title="La nostra email"
            className="transition-colors duration-300 hover:text-deep-purple-800"
          >
            <Button size="xl" className="w-full md:w-auto shadow" href="mailto:info@2mwood.com">
              <FaEnvelope className="inline" /> E-mail
            </Button>
          </a>
        </p>
      </div>
    </section>
  </Layout>
);

export default Index;
