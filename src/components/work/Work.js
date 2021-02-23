import './Work.css';
import content from '../../content';
function Work(){
    return (
        <div className="min-h-screen flex items-center justify-center flex-col relative">
            <h1 className="static">My projects</h1>
            <div className="static flex items-center justify-center w-8/12">
                
                <div className="
                    card-work
                    bg-red-500 absolute 
                    z-50 top-0
                    shadow-2xl border-2 
                    rounded-lg
                    ">
                    <div className="py-4 px-4">
                        <h1 className="m-4  font-dosis text-xl font-bold">Whiteboard</h1>
                        <h3 class="text-lg">Stack</h3>
                        <div className="flex flex-wrap">
                            <p className="px-6 py-3 m-4 bg-blue-300 hover:bg-blue-600  flex justify-around text-white rounded-lg shadow-2xl">
                                HTML - CSS
                            </p>
                            <p className="px-6 py-3 m-4 bg-blue-300 hover:bg-blue-600 flex justify-around text-white rounded-lg shadow-2xl">
                                Ruby-On-Rails
                            </p>
                            <p className="px-6 py-3 m-4 bg-blue-300 hover:bg-blue-600 flex justify-around text-white rounded-lg shadow-2xl">
                                bootstrap
                            </p>
                            <p className="px-6 py-3 m-4 bg-blue-300 hover:bg-blue-600 flex justify-around text-white rounded-lg shadow-2xl">
                                jQuery
                            </p>
                        </div>
                        <button className=" bg-yellow-500 px-20 py-3 m-4 text-xl uppercase rounded-lg">{content.header.btnText}</button>
                    </div>
                </div>
                <div className="absolute card-work mx-auto transform rotate-4 z-40 top-0 hover:z-70 shadow-2xl border-2 rounded-lg bg-opacity-100 bg-yellow-500">
                    Project 2
                </div>
                <div className="bg-red-500 absolute card-work mx-auto transform rotate-8 z-30 top-0 hover:z-70 shadow-2xl border-2 rounded-lg bg-opacity-100 ">
                    Project 3
                </div>
                <div className="absolute card-work mx-auto transform rotate-12 z-20 top-0 hover:z-70 shadow-2xl border-2 rounded-lg bg-opacity-100 bg-blue-500">
                    Project 4
                </div>   
            </div>
        </div>
    )
}

export default Work;