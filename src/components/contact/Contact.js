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
    <div className="max-w-2xl bg-white py-10 px-20 w-3/5 rounded-3xl transform rotate-8">

      <div className="text-5xl font-bold mb-6 text-center transform -rotate-8">
        Contact me ?
      </div>

      <form 
        className="grid grid-cols-2 gap-4 max-w-xl m-auto transform -rotate-8"
        method="POST"
      >

        <div className="col-span-2 lg:col-span-1">
          <input 
            type="text" 
            className="border-solid border-gray-400 border-2 p-3 md:text-xl w-full rounded-lg" 
            placeholder="Name" required
            id="name"
            />
        </div>

        <div className="col-span-2 lg:col-span-1">
          <input 
            type="phone" 
            className="border-solid border-gray-400 border-2 p-3 md:text-xl w-full rounded-lg" 
            placeholder="Phone number"
            id="phone"
          />
        </div>

        <div className="col-span-2">
          <input 
            type="email" 
            className="border-solid border-gray-400 border-2 p-3 md:text-xl w-full rounded-lg" 
            placeholder="Email Address"
            />
        </div>

        

        <div className="col-span-2">
          <textarea 
            cols="30" rows="8" 
            class="border-solid border-gray-400 border-2 p-3 md:text-xl w-full rounded-lg" 
            placeholder="Message"
            id="message"
            type="text"
          >

          </textarea>
        </div>

        <div className="col-span-2 text-right">
          <button 
            className="animate-float bg-indigo-500 px-10 py-3 text-xl uppercase mt-10 rounded-lg"
            type="submit"
          >
            Submit
          </button>
        </div>

    </form>
</div>
    </div>
  );
}

export default Contact;