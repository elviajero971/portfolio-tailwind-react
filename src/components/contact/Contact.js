import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

import content from '../../content';

function Contact() {
  
  return (
  <div
    className="min-h-screen flex items-center justify-center align-middle static mb-16"
      id="mycontact"
  >
    <div className="max-w-4xl bg-white py-10 px-10 lg:w-4/5 w-full rounded-3xl transform md:rotate-8">
      <div className="text-5xl font-bold mb-6 text-center transform">
        {content.contact.title}
      </div>
      <div className="text-3xl">
      {content.contact.desc.map((paragraph)=>{
                    return <p>{paragraph}</p>
                })}
      </div>
    </div>
  </div>
  );
}

export default Contact;