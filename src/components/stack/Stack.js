import '../stack/Stack.css';
import content from '../../content';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Link as ScrollLink } from 'react-scroll';
function Stack(){
    return (
        <div className="min-h-screen flex flex-col items-center justify-center font-dosis pt-32" id="stack">
            <h1 className="text-5xl font-bold">{content.stack.title}</h1>
            <div className="flex flex-wrap justify-center mt-10">
                {content.stack.tech.map((tech,index)=>{
                    return <span className={`${index % 2 === 0 ?'animate-float':'animate-refloat'} w-40 h-40 bg-white shadow-2xl m-2 rounded-full flex items-center p-3`}>
                        <LazyLoadImage src={tech.img} alt={tech.alt} />
                    </span>
                })}
            </div>
            <p className="w-11/12 md:max-w-xl text-xl text-center mt-10">{content.stack.desc}</p>
            <ScrollLink to="mywork" smooth={true}>
                <svg class="pt-6 animate-float" width="6rem" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M15.707 4.293a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-5-5a1 1 0 011.414-1.414L10 8.586l4.293-4.293a1 1 0 011.414 0zm0 6a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-5-5a1 1 0 111.414-1.414L10 14.586l4.293-4.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
            </ScrollLink>
        </div>
    )
}

export default Stack;