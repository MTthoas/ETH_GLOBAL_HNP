import React from 'react';
import Love from '../assets/love.png'

import { useAccount } from 'wagmi'

import './Landpage';
import {getProjects, shortenString} from "./projects/api.ts";
import {useQuery} from "react-query";

function Landpage(props: any) {

    const { address } = useAccount()

    const {isLoading, isError, isSuccess, data} = useQuery({queryKey: ["get projects", address], queryFn: () => getProjects()})

    if (isLoading) return 'Loading...'

    if (isError || !isSuccess) return 'An error has occurred: '

    if (data.length === 0) return 'No projects found'

    return (
        <div>

            <section className="bg-white gradiant">
            <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12 mt-24">
                <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl ">Every
                    penny <span className="text-green">counted</span>, every action <span
                        className="text-green">visible. </span></h1>
                <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 ">Enlightening the
                    path of generosity with clarity and trust.</p>
                <div className="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
                    <a href="#" className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center rounded-lg bg-green text-white">
                        <img src={Love} className="w-5 h-5 mr-3 mt-1"/>
                        Support projects
                    </a>  
                    <a href="#" className="inline-flex justify-center items-center py-3 px-5 text-dark border rounded-lg">
                         Learn more
                    </a>  
                </div>
                @
            </div>
        </section>

            <section className="mb-24">
                <div className="max-w-screen-xl px-5 mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-4 sm:grid-cols-2 gap-5">
                        {data.map((project, index) => (
                            <div key={index}
                                 className="group relative w-full h-120 flex items-end justify-start text-left bg-cover bg-center"
                                 style={{backgroundImage: `url(https://gateway.lighthouse.storage/ipfs/${project.photo})`}}>

                                <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-transparent"></div>

                                <div
                                    className="absolute inset-0 bg-gradient-to-b from-black via-gray-800 to-transparent opacity-0 group-hover:opacity-50 transition ease-in-out duration-500"></div>
                                <div
                                    className="absolute top-0 right-0 left-0 mx-5 mt-2 flex justify-between items-center">
                                    <div></div>
                                    {/* <a href="#" className="text-xs bg-indigo-600 text-white px-5 py-2 uppercase hover:bg-white hover:text-indigo-600 transition ease-in-out duration-500">{image.tag}</a> */}
                                    <div className="text-white font-regular flex flex-col justify-start">
                                        <span className="text-3xl leading-0 font-semibold">{project.name}</span>
                                        <span className="-mt-3"></span>
                                    </div>
                                </div>
                                <main className="p-5 z-10">
                                    <a href="#"
                                       className="text-md tracking-tight font-medium leading-7 font-regular text-white hover:underline">{shortenString(project.description, 30)}</a>
                                </main>
                            </div>
                        ))}
                    </div>
                </div>
            </section>


        </div>
    );
}

export default Landpage;