import React from 'react';
import { LazyLoadImage} from 'react-lazy-load-image-component';
import './Navbar.css';
import content from '../../content';
import { Link as ScrollLink } from 'react-scroll';
function Navbar(){
    return (
        <div class= "sticky top-0 z-100"
      style={{
        background: '#091c29',
      }}
    >
      <div className="flex items-center justify-between w-10/12 mx-auto py-3 text-white font-dosis">
        <LazyLoadImage
            className="h-20"
            src={content.nav.logo}
            effect="blur"
            placeholderSrc={process.env.PUBLIC_URL + '/img/nomadev.png'}
        />
        <div>
          {content.nav.links.map((link, index) => {
            return (
              <ScrollLink to={link.to} smooth={true}>
                <span key={index} className="text-xl mr-4">
                  {link.text}
                </span>
              </ScrollLink>
            );
          })}
        </div>
      </div>
    </div>
    )
}

export default Navbar;