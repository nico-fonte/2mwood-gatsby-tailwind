import React from 'react';
import LogoIcon from '../../svg/LogoIcon';
import { MenuItems } from "./MenuItems";
import AnchorLink from 'react-anchor-link-smooth-scroll';



const Footer = () => (
<footer className="mt-8 container px-8 mx-auto text-white">
      <div className="pt-8"></div>
      <div className="grid gap-10 row-gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-4 ">
        <div className="sm:col-span-2">
        <div className="w-48">
          <LogoIcon />
        </div>
          <div className="mt-6 lg:max-w-sm"></div>
        </div>
        <div className="space-y-2 text-xs mb-4">
          <p className="text-lg lg:text-sm font-bold tracking-wide mb-3">
            Contatti
          </p>
          <ul className="text-sm md:text-xs text-light">
          <li className="flex mb-2 md:mb-0">
            <p className="mr-1">Telefono:</p>
            <a
              href="tel: 333 - 1234567"
              aria-label="Il nostro telefono"
              title="Il nostro telefono"
              className="transition-colors duration-300 hover:text-white"
            >
              333 - 1234567
            </a>
          </li>
          <li className="flex">
            <p className="mr-1">Email:</p>
            <a
              href="mailto:info@2mwood.com"
              aria-label="La nostra email"
              title="La nostra email"
              className="transition-colors duration-300 hover:text-deep-purple-800"
            >
              info@2mwood.com
            </a>
          </li>
          </ul>
        </div>
        <div className="space-y-2 text-xs">
          <p className="text-lg lg:text-sm font-bold tracking-wide mb-3">
            Link rapidi
          </p>
          <ul className="text-sm md:text-xs text-light mb-3 space-y-2 lg:mb-0 sm:space-y-0">
            <li><AnchorLink href="#serramenti" className="hover:text-primary">Serramenti</AnchorLink></li>
            <li><AnchorLink href="#pavimenti" className="hover:text-primary">Pavimenti</AnchorLink></li>
            <li><AnchorLink href="#creazioni" className="hover:text-primary">Creazioni</AnchorLink></li>
          </ul>
        </div>

      </div>
      <div className="flex flex-col-reverse justify-between pt-3 pb-24 border-t border-gray-600 lg:flex-row">
        <span className="text-xs">
          © {new Date().getFullYear()} 2MWOOD. Tutti i diritti riservati{" "}
        </span>
          {/* <span className="hidden sm:inline"> | </span>{" "} */}
          <span className="text-xs"> P.IVA 0000000000000</span>
      </div>
    </footer>
);

export default Footer;
