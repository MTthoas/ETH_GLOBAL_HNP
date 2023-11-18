import React from 'react';
import Love from '../assets/love.png'

import { useAccount } from 'wagmi'

function Landpage(props: any) {

    const { address } = useAccount()

    console.log(address)

    const images = [
        {
          url: 'https://images.unsplash.com/photo-1507427100689-2bf8574e32d4?q=80&w=2187&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          title: "Dr. Abdullah Abdullah's Presidential Election Campaign",
          tag: 'Politics',
          date: '25 May'
        },    {
            url: 'https://images.unsplash.com/photo-1605714007165-c15eac9c647b?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Njd8fGFzc29jaWF0aW9uJTIwaHVtYW5pdGFyaWFufGVufDB8fDB8fHwy',
            title: "Dr. Abdullah Abdullah's Presidential Election Campaign",
            tag: 'Politics',
            date: '25 May'
          },
          {
            url: 'https://images.unsplash.com/photo-1519821172144-4f87d85de2a1?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGZvcmVzdHxlbnwwfHwwfHx8Mg%3D%3D',
            title: "Dr. Abdullah Abdullah's Presidential Election Campaign",
            tag: 'Forest',
            date: '25 May'
          },
          {
            url: 'https://images.unsplash.com/photo-1585119192228-f072c53bc55c?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cG9sbHV0aW9ufGVufDB8fDB8fHwy',
            title: "Dr. Abdullah Abdullah's Presidential Election Campaign",
            tag: 'Politics',
            date: '25 May'
          },
      ];

    return (
        <div>

        <section className="bg-white dark:bg-gray-900">
            <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12 mt-24">
                {/* <a href="#" className="inline-flex justify-between items-center py-1 px-1 pr-4 mb-12 text-sm text-dark bg-gray-100 rounded-full border " role="alert">
                    <span className="text-xs bg-primary-600 rounded-full  px-4 py-1.5 mr-3">New</span> <span className="text-sm font-medium">Flowbite is out! See what's new</span> 
                    <svg className="ml-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
                </a> */}
                <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">We invest in the world’s <span className="text-green">potential </span></h1>
                <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.</p>
                <div className="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
                    <a href="#" className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center rounded-lg bg-green text-white">
                        <img src={Love} className="w-5 h-5 mr-3 mt-1"/>
                         Donation
                    </a>  
                    <a href="#" className="inline-flex justify-center items-center py-3 px-5 text-dark border rounded-lg">
                         Learn more
                    </a>  
                </div>

            </div>
        </section>

        <section className="mb-24">
        <div className="max-w-screen-xl px-5 mx-20">
            <div className="grid grid-cols-1 md:grid-cols-4 sm:grid-cols-2 gap-5">
            {images.map((image, index) => (
                <div key={index} className="group relative w-full h-120 flex items-end justify-start text-left bg-cover bg-center" 
                    style={{ backgroundImage: `url(${image.url})` }}>

                <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-transparent"></div>

                <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-800 to-transparent opacity-0 group-hover:opacity-50 transition ease-in-out duration-500"></div>
                <div className="absolute top-0 right-0 left-0 mx-5 mt-2 flex justify-between items-center">
                    <div></div>
                    {/* <a href="#" className="text-xs bg-indigo-600 text-white px-5 py-2 uppercase hover:bg-white hover:text-indigo-600 transition ease-in-out duration-500">{image.tag}</a> */}
                    <div className="text-white font-regular flex flex-col justify-start">
                    <span className="text-3xl leading-0 font-semibold">{image.date.split(' ')[0]}</span>
                    <span className="-mt-3">{image.date.split(' ')[1]}</span>
                    </div>
                </div>
                <main className="p-5 z-10">
                    <a href="#" className="text-md tracking-tight font-medium leading-7 font-regular text-white hover:underline">{image.title}</a>
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