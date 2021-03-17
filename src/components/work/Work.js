import './Work.css';
import content from '../../content';

import SwiperCore, { Navigation, Pagination, Scrollbar} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/swiper-bundle.css';
// install Swiper modules
SwiperCore.use([Navigation, Pagination, Scrollbar]);

function Work(){
    return (
        <div 
            className="min-h-screen" 
            id="mywork"
        >
            <h1 className="text-5xl mx-auto font-bold pt-32">{content.work.title}</h1>
            <Swiper 
                tag="section" 
                wrapperTag="ul" 
                navigation 
                loop="true"
                centeredSlides="true"
                slidesPerView= "1"
                spaceBetween= "10"
                breakpoints={{
                    // default va
                    // when window width is >= 320px
                    320: {
                        slidesPerView: 1,
                        spaceBetween: 10,
                        width: 300
                    },
                    // when window width is >= 480px
                    480: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                        width: 440
                    },
                    // when window width is >= 640px
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 40,
                        width: 600
                    },
                    // when window width is >= 900px
                    900: {
                        slidesPerView: 3,
                        spaceBetween: 50,
                        width: 1200
                    }
                  }}
            >
            <div className="my-4">
                {content.work.data.map(
                    (link, index) => {
                        return(
                            <SwiperSlide 
                                key={`slide-${index}`} 
                                tag="li" 
                            >
                                <div className="rounded-2xl overflow-hidden shadow-lg">
                                    <img class="w-full" src={link.img} alt={`Slide ${index}`}></img>
                                    <div class="px-6 py-4">
                                        <p class="text-gray-700 font-semibold text-2xl">{link.title}</p>
                                    </div>
                                    <div class="px-6 pt-4 pb-2">
                                        {link.technos.map(
                                            (link) => {
                                                return(
                                                    <span class="inline-block bg-gray-500 rounded-full px-1 py-1 text-sm font-semibold text-gray-200 mr-1 mb-1">{link}</span>
                                                )
                                            }
                                        )}
                                    </div>
                                    <div className="flex justify-center align-baseline pb-4">
                                        <a 
                                            href={link.linkToProjectView} 
                                            target="_blank"
                                            class="font-bold text-xl mb-2 mr-4"
                                        >
                                            {content.work.buttonMore.text}
                                        </a>
                                        <a 
                                            href={link.linkGitHub} 
                                            target="_blank"
                                        >
                                            <img src={content.work.logo.github}></img>
                                        </a>
                                    </div>
                                </div>
                            </SwiperSlide>
                        )
                    }
                )}

            </div>
            </Swiper>   
        </div>
    )
}

export default Work;