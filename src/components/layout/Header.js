import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"
import LogoIcon from '../../svg/LogoIcon';
import AnchorLink from 'react-anchor-link-smooth-scroll';


function Header({ siteTitle }) {
  const [isExpanded, toggleExpansion] = useState(false)

  return (
    <div className="fixed w-full top-0 z-50 bg-gradient-to-r bg-black">
    <nav className="mx-auto flex flex-wrap items-center justify-between p-3  self-center px-8">
    <div className="flex items-center text-2xl">
        <AnchorLink href="#top">
        <div className="w-48">
          <LogoIcon />
        </div>
        </AnchorLink>
      </div>
      <div className="block lg:hidden">
        <button
          onClick={() => toggleExpansion(!isExpanded)}
          className="flex items-center px-3 py-2 text-white"
        >
        { isExpanded ? 
          <svg
            className="w-3 h-3 fill-current"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Close</title>
            <path d="M11.469,10l7.08-7.08c0.406-0.406,0.406-1.064,0-1.469c-0.406-0.406-1.063-0.406-1.469,0L10,8.53l-7.081-7.08
							c-0.406-0.406-1.064-0.406-1.469,0c-0.406,0.406-0.406,1.063,0,1.469L8.531,10L1.45,17.081c-0.406,0.406-0.406,1.064,0,1.469
							c0.203,0.203,0.469,0.304,0.735,0.304c0.266,0,0.531-0.101,0.735-0.304L10,11.469l7.08,7.081c0.203,0.203,0.469,0.304,0.735,0.304
							c0.267,0,0.532-0.101,0.735-0.304c0.406-0.406,0.406-1.064,0-1.469L11.469,10z"></path>
          </svg>
          
          :

          <svg
            className="w-3 h-3 fill-current"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M3.314,4.8h13.372c0.41,0,0.743-0.333,0.743-0.743c0-0.41-0.333-0.743-0.743-0.743H3.314
								c-0.41,0-0.743,0.333-0.743,0.743C2.571,4.467,2.904,4.8,3.314,4.8z M16.686,15.2H3.314c-0.41,0-0.743,0.333-0.743,0.743
								s0.333,0.743,0.743,0.743h13.372c0.41,0,0.743-0.333,0.743-0.743S17.096,15.2,16.686,15.2z M16.686,9.257H3.314
								c-0.41,0-0.743,0.333-0.743,0.743s0.333,0.743,0.743,0.743h13.372c0.41,0,0.743-0.333,0.743-0.743S17.096,9.257,16.686,9.257z"></path>
          </svg>

        }

        </button>
      </div>
      <div
        className={`${
          isExpanded ? `block` : `hidden`
        } pb-10 sm:pb-0 w-full block flex-end lg:flex lg:items-center lg:w-auto`}
      >
        <div className="text-center text-xs lg:flex">

        <AnchorLink className="uppercase block mt-8 lg:ml-4 mx-4 text-white lg:inline-block lg:mt-0 lg:border-b-2 lg:border-black lg:hover:border-primary transition duration-300" href="#serramenti" onClick={() => toggleExpansion(!isExpanded)}>
          Serramenti
        </AnchorLink>
        <AnchorLink className="uppercase block mt-8 lg:ml-4 mx-4 text-white lg:inline-block lg:mt-0 lg:border-b-2 lg:border-black lg:hover:border-primary transition duration-300" href="#pavimenti" onClick={() => toggleExpansion(!isExpanded)}>
          Pavimenti
        </AnchorLink>
        <AnchorLink className="uppercase block mt-8 lg:ml-4 mx-4 text-white lg:inline-block lg:mt-0 lg:border-b-2 lg:border-black lg:hover:border-primary transition duration-300" href="#creazioni" onClick={() => toggleExpansion(!isExpanded)}>
          Creazioni
        </AnchorLink>
        <AnchorLink className="uppercase block mt-8 lg:ml-4 mx-4 text-white lg:inline-block lg:mt-0 lg:border-b-2 lg:border-black lg:hover:border-primary transition duration-300" href="#contatti" onClick={() => toggleExpansion(!isExpanded)}>
          Contatti
        </AnchorLink>

        </div>
      </div>
    </nav>
    </div>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: `2mwood`,
}
export default Header
