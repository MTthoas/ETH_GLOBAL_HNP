import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import { getProjectInfos } from './api';
import Loading from '../Loading';
import Love from '../../assets/love.png';

const ProjectPage = () => {
    const { id } = useParams<{ id: string }>();
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const { isLoading, isError, isSuccess, data } = useQuery({
    queryKey: ['get project', id],
    queryFn: () => getProjectInfos(id),
  });

  if (isLoading) return <Loading />;
  if (isError || !isSuccess) return 'An error has occurred: ';
  if (!data) return 'No project data available';

  const paragraphs = data.description.split('\n').map((line, index) => (
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
                                <button type="button" 
                                onClick={handleOpen}
                                className="text-white bg-green hover:bg-green/90 focus:ring-4 focus:outline-none focus:ring-[#050708]/50 font-medium rounded-lg text-sm px-5 py-3 text-center inline-flex items-center dark:focus:ring-[#050708]/50 dark:hover:bg-[#050708]/30  mr-4">
                                <img src={Love} className="w-4 h-4 mr-3"/>                                
                                Make a donation
                                </button>               

                                {open && (
                                   <div className="fixed inset-0 z-10 overflow-y-auto border border-black">
                                    <div className="flex items-end justify-center min-h-screen py-10 pb-20 text-center sm:block sm:p-0">
                                        <div className="fixed inset-0 transition-opacity" aria-hidden="true">
                                        <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
                                        </div>

                                        {/* This element is to trick the browser into centering the modal contents. */}
                                        <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

                                        <div className="inline-block overflow-hidden align-bottom bg-white rounded-lg text-left shadow-xl transform transition-all py-8 border sm:align-middle sm:max-w-lg sm:w-full">
                                        <div className="px-4 pt-5 pb-4 bg-white sm:p-6 sm:pb-4">
                                            <div className="sm:flex sm:items-start">
                                            <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 mx-auto rounded-full bg-green-100 sm:mx-0 sm:h-10 sm:w-10">
                                                <img src={Love} alt="Love" className="w-6 h-6" />
                                            </div>
                                            <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                                                <h3 className="text-lg font-medium leading-6 text-gray-900">
                                                Make a Donation
                                                </h3>
                                                <div className="mt-2">
                                                <p className="text-sm text-gray-500">
                                                    Enter the amount you would like to donate.
                                                </p>
                                                <input type="number" className="w-full px-3 py-2 mt-2 bg-gray-50 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500" placeholder="Donation amount" />
                                                <div className="mt-4">
                                                    <span className="text-sm font-medium text-gray-700">Choose the currency:</span>
                                                    <div className="mt-2">
                                                    <label className="inline-flex items-center">
                                                        <input type="radio" className="form-radio text-green-600 border-gray-300" name="currencyType" value="crypto" />
                                                        <span className="ml-2">Crypto</span>
                                                    </label>
                                                    <label className="inline-flex items-center ml-6">
                                                        <input type="radio" className="form-radio text-green-600 border-gray-300" name="currencyType" value="fiat" />
                                                        <span className="ml-2">Fiat</span>
                                                    </label>
                                                    </div>
                                                </div>
                                                <select className="w-full px-3 py-2 mt-2 bg-gray-50 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500">
                                                    <option value="BTC">Bitcoin (BTC)</option>
                                                    <option value="ETH">Ethereum (ETH)</option>
                                                    <option value="USD">US Dollar (USD)</option>
                                                    {/* Add more currencies here */}
                                                </select>
                                                </div>
                                            </div>
                                            </div>
                                        </div>
                                        <div className="px-10 py-3 bg-gray-50 flex mx-8">
                                            <button type="button" className="inline-flex justify-center w-full px-8 mr-5 py-2 text-base font-medium text-white bg-green border border-transparent rounded-md shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:ml-3 sm:w-auto sm:text-sm">
                                            Donate Now
                                            </button>
                                            <button type="button" className="inline-flex justify-center w-full px-8 py-2 mt-3 text-base font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:mt-0 sm:w-auto sm:text-sm" onClick={handleClose}>
                                            Cancel
                                            </button>
                                        </div>
                                        </div>
                                    </div>
                                    </div>

                                )}

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