import './Work.css';
import content from '../../content';

import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, Autoplay} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/swiper-bundle.css';
// install Swiper modules
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

function Work(){
    SwiperCore.use([Autoplay]);
    return (
        <div className="min-h-screen" id="mywork">
            <h1 className="text-5xl mx-auto font-bold pt-6">My projects</h1>
            <Swiper tag="section" wrapperTag="ul" navigation pagination slideToClickedSlide={true} loop="true">

            {content.work.data.map(
                (link, index) => {
                    return(
                        <SwiperSlide key={`slide-${index}`} tag="li" className="flex items-center justify-center">
            <div class="max-w-sm rounded overflow-hidden shadow-lg">
                <img class="w-full" src={link.img} alt={`Slide ${index}`}></img>
                <div class="px-6 py-4">
                    <p class="text-gray-700 text-base">{link.title}</p>
                </div>
                <div class="px-6 pt-4 pb-2">
                    {link.technos.map(
                        (link) => {
                            return(
                                <span class="inline-block bg-gray-500 rounded-full px-3 py-1 text-sm font-semibold text-gray-200 mr-2 mb-2">{link}</span>
                            )
                        }
                    )}
                </div>
                        <div>
                        <button href={link.linkToProjectView} class="font-bold text-xl mb-2">{content.work.buttonMore.text}</button>
                        <a href={link.linkGitHub}>
                            <img src={content.work.logo.github}>

                            </img>
                        </a>
                        </div>
                

            </div>
        </SwiperSlide>
                    )
                }
            )
        
        

}

                
            </Swiper>   
        </div>
    )
}

export default Work;