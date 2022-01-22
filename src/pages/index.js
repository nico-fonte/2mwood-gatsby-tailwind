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
import { FaChevronCircleDown } from 'react-icons/fa';

import Image from '../components/Image';

const Index = () => (
  <Layout>
    <section className="sm:pt-20">
      <div className="w-full relative">
        <div class="absolute w-full h-full opacity-70 top-0 left-0 z-10 bg-gradient-to-r from-gray-600 via-amber-500"></div>

        <div className="absolute z-20 flex flex-col items-center w-full justify-center h-full">
          <div className="px-4 text-white text-center font-bold text-4xl lg:text-6xl">
            Riqualificazione e Creazione
          </div>
          <FaChevronCircleDown size="40" className="mt-40 block sm:hidden animate-bounce" />
        </div>
        <img className="object-cover h-screen sm:h-auto" src="https://i.ibb.co/QbTwCSB/hero.jpg" />
      </div>
    </section>
    <section id="features" className="py-14 md:py-20 lg:pb-28 lg:pt-28 lg:mx-20">
      <div className="container mx-auto text-center">
        <div className="flex flex-col sm:flex-row sm:-mx-3 mt-12">
          <div className="flex-1 px-3">
            <AnchorLink href="#serramenti">
              <Card className="mb-8">
                <div className="w-32 mx-auto mb-4">
                  <SerramentiIcon />
                </div>
                <p className="font-medium text-xl text-primary uppercase">Serramenti</p>
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
      secondarySlot={<Image src="20211203_120851.jpg" className="mx-auto" />}
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
     
      secondarySlot={<Image src="20211223_125042.jpg" className="mx-auto" />}
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
      secondarySlot={
        <div className="">
          <Image src="20211218_121453.jpg" className="relative mx-auto" />
        </div>
      }
    />
    <section id="contatti" className="container mx-auto my-20 px-8 mb-40">
      <div className="p-6 bg-primary-darker rounded-lg text-center text-white shadow">
        <h3 className="text-2xl md:text-5xl font-semibold">
          Contattaci per un preventivo su misura!
        </h3>
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
