import React from 'react';
import {Link, useParams} from "react-router-dom";
import {useQuery} from "react-query";
import {getProjectInfos} from "./api.ts";
import Loading from "../Loading.tsx";
import Love from '../../assets/love.png'


const ProjectPage = () => {
    const {id} = useParams()
    if (id == undefined) return "Error, please try again later"

    const {isLoading, isError, isSuccess, data} = useQuery({queryKey: ["get project", id], queryFn: () => getProjectInfos(id)})

    if (isLoading) return <Loading/>

    if (isError || !isSuccess) return 'An error has occurred: '


    const lines = data.description.split('\n');

    const paragraphs = lines.map((line, index) => (
        <p key={index}>{line}</p>
    ));

    const image = 
        {
          url: 'https://images.unsplash.com/photo-1507427100689-2bf8574e32d4?q=80&w=2187&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          title: "Dr. Abdullah Abdullah's Presidential Election Campaign",
          tag: 'Politics',
          date: '25 May'
        };

    return (
        <div>
            <section className="max-w-screen-xl px-5 mx-auto">
                <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">

                <div className="max-w-screen-xl px-5 mx-auto">
                    <div className="group relative w-96 h-120 flex items-end justify-start text-left bg-cover bg-center" 
                            style={{ backgroundImage: `url(${image.url})` }}>

                        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-transparent"></div>

                        <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-800 to-transparent opacity-0 group-hover:opacity-50 transition ease-in-out duration-500"></div>
                        <div className="absolute top-0 right-0 left-0 mx-5 mt-2 flex justify-between items-center">
                            <div></div>
                            {/* <a href="#" className="text-xs bg-indigo-600 text-white px-5 py-2 uppercase hover:bg-white hover:text-indigo-600 transition ease-in-out duration-500">{image.tag}</a> */}
                         
                        </div>
                        
                        </div>       
                    </div>            
                    <div className="max-w-screen-xl px-5 mx-auto">
                        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Let's create more tools and ideas that brings us together.</h2>
                        <a> Association : Unicef </a>
                        <p className="my-6 text-sm">Flowbite helps you connect with friends and communities of people who share your interests. Connecting with your friends and family as well as discovering new ones is easy with features like Groups.</p>
                        <div className="group relative bg-white rounded-lg shadow-lg overflow-hidden">
                            <div className="p-5">
                                <p className="text-lg font-semibold text-gray-800">${"100"} of ${"1000"} goal</p>
                                <div className="w-full bg-gray-light rounded-full h-2.5 dark:bg-gray-700">
                                <div className="bg-green h-2.5 rounded-full" style={{ width: `${(100 / 1000) * 100}%` }}></div>
                                </div>
                                <p className="text-gray-600 mt-2">{"1500"} donors</p>
                            </div>
                        </div>
                        <div className="flex my-6">
                            <div className="py-5 pr-4">
                                <button type="button" className="text-white bg-green hover:bg-green/90 focus:ring-4 focus:outline-none focus:ring-[#050708]/50 font-medium rounded-lg text-sm px-5 py-3 text-center inline-flex items-center dark:focus:ring-[#050708]/50 dark:hover:bg-[#050708]/30  mr-4">
                                <img src={Love} className="w-4 h-4 mr-3"/>                                
                                Make a donation
                                </button>                     

                                <button type="button" className="text-dark  focus:ring-4 focus:outline-none border focus:ring-[#050708]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#050708]/50 dark:hover:bg-[#050708]/30 ">             
                                    Learn more
                                </button>             
                             </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ProjectPage;