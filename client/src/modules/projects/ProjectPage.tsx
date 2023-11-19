import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import { getProjectInfos } from './api';
import Loading from '../Loading';
import Love from '../../assets/love.png';
import yellow from '../../assets/yellow.png';

// Smart Contract Interaction Imports
import { ethers } from 'ethers';
import ContractABI from '../../contracts/TokenTransferorABI.json';

const ProjectPage = () => {
    const { id } = useParams<{ id: string }>();
    const [open, setOpen] = useState(false);
    const [donationAmount, setDonationAmount] = useState(0);
    const [currency, setCurrency] = useState('Bitcoin');

    // Contract Interaction Setup
    const contractAddress = ContractABI.Contract.link;
    const provider = new ethers.providers.Web3Provider(window.ethereum!);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(contractAddress, ContractABI.Contract.abi, signer);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const { isLoading, isError, isSuccess, data } = useQuery({
        queryKey: ['get project', id],
        queryFn: () => getProjectInfos(id),
    });

    // Handle Donation Submit
    const handleDonate = async () => {
        console.log(donationAmount)
        console.log(currency)
        // Example params - replace with actual values needed for your function
        // You'll need to convert 'donationAmount' and 'currency' to the format your contract expects

        const tx3 = await contract.allowlistDestinationChain("12532609583862916517", true)
        await tx3.wait();

        const tx2 = await contract.transferTokensPayNative("12532609583862916517", "adresseReceiver", "ADAD", 1000)
        await tx2.wait();

    };

    if (isLoading) return <Loading />;
    if (isError || !isSuccess) return 'An error has occurred: ';
    if (!data) return 'No project data available';

  if (isLoading) return <Loading />;
  if (isError || !isSuccess) return 'An error has occurred: ';
  if (!data) return 'No project data available';


  const blockchains: BlockchainOption[] = [
    { id: 'btc', name: 'Bitcoin' },
    { id: 'eth', name: 'Ethereum' },
    // Ajoutez d'autres blockchains ici
  ];
  

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
                                        {/* ...existing modal content... */}
                                        <input 
                                            type="number" 
                                            className="w-full px-3 py-2 mt-2 bg-gray-50 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500" 
                                            placeholder="Donation amount"
                                            value={donationAmount}
                                            onChange={(e) => setDonationAmount(e.target.value)}
                                        />
                                        <select 
                                            className="w-full px-3 py-2 mt-2 bg-gray-50 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
                                            value={currency}
                                            onChange={(e) => setCurrency(e.target.value)}
                                        >
                                            <option value="BTC">Bitcoin (BTC)</option>
                                            <option value="ETH">Ethereum (ETH)</option>
                                            <option value="USD">US Dollar (USD)</option>
                                            {/* Add more currencies here */}
                                        </select>
                                    </div>
                                    <div className="px-10 py-3 bg-gray-50 flex mx-8">
                            <button 
                                type="button" 
                                className="inline-flex justify-center w-full px-8 mr-5 py-2 text-base font-medium text-white bg-green border border-transparent rounded-md shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:ml-3 sm:w-auto sm:text-sm"
                                onClick={handleDonate}
                            >
                                Donate Now
                            </button>
                            <button 
                                type="button" 
                                className="inline-flex justify-center w-full px-8 py-2 mt-3 text-base font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:mt-0 sm:w-auto sm:text-sm" 
                                onClick={handleClose}
                            >
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


            <section className="max-w-screen-xl px-5 mx-auto">
            <div className="max-w-screen-xl px-5 mx-12">
                    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    File name
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Size
                                </th>
                                {/* <th scope="col" className="px-6 py-3">
                                    Approvement
                                </th> */}
                                <th scope="col" className="px-6 py-3">
                                    Approvement
                                </th>
                                {/* <th scope="col" className="px-6 py-3">
                                    <span className="sr-only">Edit</span>
                                </th> */}
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    Bill n°29283
                                </th>
                                <td className="px-6 py-4">
                                    12kb
                                </td>
                                {/* <td className="px-6 py-4">
                                    Approved by 12 donators
                                </td> */}
                                <td className="px-6  py-4  flex mt-4">
                                    <img src={yellow} className="w-5 h-5 mr-3 "/>
                                    <a className="pb-2"> Approved by 12 donators </a>
                                </td>
                                {/* <td className="py-4">
                                    <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline"> Approve </a>
                                </td> */}
                                <td className="px-2 py-4 text-right">
                                <button type="button" className="pt-2 text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-xs px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 me-2 mb-1">
                                    <svg aria-hidden="true" className="w-6 h-5 me-2 -ms-1" viewBox="0 0 2405 2501" fill="none" xmlns="http://www.w3.org/2000/svg"> <g clip-path="url(#clip0_1512_1323)"> <path d="M2278.79 1730.86L2133.62 2221.69L1848.64 2143.76L2278.79 1730.86Z" fill="#E4761B" stroke="#E4761B" stroke-width="5.94955"/> <path d="M1848.64 2143.76L2123.51 1767.15L2278.79 1730.86L1848.64 2143.76Z" fill="#E4761B" stroke="#E4761B" stroke-width="5.94955"/> <path d="M2065.2 1360.79L2278.79 1730.86L2123.51 1767.15L2065.2 1360.79ZM2065.2 1360.79L2202.64 1265.6L2278.79 1730.86L2065.2 1360.79Z" fill="#F6851B" stroke="#F6851B" stroke-width="5.94955"/> <path d="M1890.29 1081.17L2285.34 919.338L2265.7 1007.99L1890.29 1081.17ZM2253.21 1114.48L1890.29 1081.17L2265.7 1007.99L2253.21 1114.48Z" fill="#763D16" stroke="#763D16" stroke-width="5.94955"/> <path d="M2253.21 1114.48L2202.64 1265.6L1890.29 1081.17L2253.21 1114.48ZM2332.34 956.82L2265.7 1007.99L2285.34 919.338L2332.34 956.82ZM2253.21 1114.48L2265.7 1007.99L2318.65 1052.01L2253.21 1114.48Z" fill="#763D16" stroke="#763D16" stroke-width="5.94955"/> <path d="M1542.24 2024.17L1641 2055.7L1848.64 2143.75L1542.24 2024.17Z" fill="#E2761B" stroke="#E2761B" stroke-width="5.94955"/> <path d="M2202.64 1265.6L2253.21 1114.48L2296.64 1147.8L2202.64 1265.6ZM2202.64 1265.6L1792.71 1130.55L1890.29 1081.17L2202.64 1265.6Z" fill="#763D16" stroke="#763D16" stroke-width="5.94955"/> <path d="M1987.86 617.696L1890.29 1081.17L1792.71 1130.55L1987.86 617.696Z" fill="#763D16" stroke="#763D16" stroke-width="5.94955"/> <path d="M2285.34 919.338L1890.29 1081.17L1987.86 617.696L2285.34 919.338Z" fill="#763D16" stroke="#763D16" stroke-width="5.94955"/> <path d="M1987.86 617.696L2400.16 570.1L2285.34 919.338L1987.86 617.696Z" fill="#763D16" stroke="#763D16" stroke-width="5.94955"/> <path d="M2202.64 1265.6L2065.2 1360.79L1792.71 1130.55L2202.64 1265.6Z" fill="#F6851B" stroke="#F6851B" stroke-width="5.94955"/> <path d="M2382.31 236.33L2400.16 570.1L1987.86 617.696L2382.31 236.33Z" fill="#763D16" stroke="#763D16" stroke-width="5.94955"/> <path d="M2382.31 236.33L1558.3 835.45L1547.59 429.095L2382.31 236.33Z" fill="#E2761B" stroke="#E2761B" stroke-width="5.94955"/> <path d="M934.789 380.309L1547.59 429.095L1558.3 835.449L934.789 380.309Z" fill="#F6851B" stroke="#F6851B" stroke-width="5.94955"/> <path d="M1792.71 1130.55L1558.3 835.449L1987.86 617.696L1792.71 1130.55Z" fill="#763D16" stroke="#763D16" stroke-width="5.94955"/> <path d="M1792.71 1130.55L2065.2 1360.79L1682.65 1403.04L1792.71 1130.55Z" fill="#E4761B" stroke="#E4761B" stroke-width="5.94955"/> <path d="M1682.65 1403.04L1558.3 835.449L1792.71 1130.55L1682.65 1403.04Z" fill="#E4761B" stroke="#E4761B" stroke-width="5.94955"/> <path d="M1987.86 617.696L1558.3 835.45L2382.31 236.33L1987.86 617.696Z" fill="#763D16" stroke="#763D16" stroke-width="5.94955"/> <path d="M940.144 2134.24L1134.69 2337.11L869.939 2096.16L940.144 2134.24Z" fill="#C0AD9E" stroke="#C0AD9E" stroke-width="5.94955"/> <path d="M1848.64 2143.75L1940.86 1793.33L2123.51 1767.15L1848.64 2143.75Z" fill="#CD6116" stroke="#CD6116" stroke-width="5.94955"/> <path d="M151.234 1157.92L487.978 803.917L194.666 1115.67L151.234 1157.92Z" fill="#E2761B" stroke="#E2761B" stroke-width="5.94955"/> <path d="M2123.51 1767.15L1940.86 1793.33L2065.2 1360.79L2123.51 1767.15ZM1558.3 835.449L1230.48 824.74L934.789 380.309L1558.3 835.449Z" fill="#F6851B" stroke="#F6851B" stroke-width="5.94955"/> <path d="M2065.2 1360.79L1940.86 1793.33L1930.74 1582.12L2065.2 1360.79Z" fill="#E4751F" stroke="#E4751F" stroke-width="5.94955"/> <path d="M1682.65 1403.04L2065.2 1360.79L1930.74 1582.12L1682.65 1403.04Z" fill="#CD6116" stroke="#CD6116" stroke-width="5.94955"/> <path d="M1230.48 824.74L1558.3 835.449L1682.65 1403.04L1230.48 824.74Z" fill="#F6851B" stroke="#F6851B" stroke-width="5.94955"/> <path d="M1230.48 824.74L345.784 6.08252L934.79 380.309L1230.48 824.74ZM934.195 2258.58L165.513 2496.56L12.0146 1910.53L934.195 2258.58Z" fill="#E4761B" stroke="#E4761B" stroke-width="5.94955"/> <path d="M265.465 1304.27L555.803 1076.41L799.14 1132.93L265.465 1304.27Z" fill="#763D16" stroke="#763D16" stroke-width="5.94955"/> <path d="M799.139 1132.93L555.803 1076.41L686.098 538.567L799.139 1132.93Z" fill="#763D16" stroke="#763D16" stroke-width="5.94955"/> <path d="M194.666 1115.67L555.803 1076.41L265.465 1304.27L194.666 1115.67Z" fill="#763D16" stroke="#763D16" stroke-width="5.94955"/> <path d="M1930.74 1582.12L1780.81 1506.56L1682.65 1403.04L1930.74 1582.12Z" fill="#CD6116" stroke="#CD6116" stroke-width="5.94955"/> <path d="M194.666 1115.67L169.083 980.618L555.803 1076.41L194.666 1115.67Z" fill="#763D16" stroke="#763D16" stroke-width="5.94955"/> <path d="M1749.88 1676.72L1780.81 1506.56L1930.74 1582.12L1749.88 1676.72Z" fill="#233447" stroke="#233447" stroke-width="5.94955"/> <path d="M1940.86 1793.33L1749.88 1676.72L1930.74 1582.12L1940.86 1793.33Z" fill="#F6851B" stroke="#F6851B" stroke-width="5.94955"/> <path d="M555.803 1076.41L169.082 980.618L137.55 866.982L555.803 1076.41ZM686.098 538.567L555.803 1076.41L137.55 866.982L686.098 538.567ZM686.098 538.567L1230.48 824.74L799.139 1132.93L686.098 538.567Z" fill="#763D16" stroke="#763D16" stroke-width="5.94955"/> <path d="M799.14 1132.93L1230.48 824.74L1422.65 1411.96L799.14 1132.93ZM1422.65 1411.96L826.508 1399.47L799.14 1132.93L1422.65 1411.96Z" fill="#E4761B" stroke="#E4761B" stroke-width="5.94955"/> <path d="M265.465 1304.27L799.14 1132.93L826.508 1399.47L265.465 1304.27ZM1682.65 1403.04L1422.65 1411.96L1230.48 824.74L1682.65 1403.04Z" fill="#F6851B" stroke="#F6851B" stroke-width="5.94955"/> <path d="M1780.81 1506.56L1749.88 1676.72L1682.65 1403.04L1780.81 1506.56Z" fill="#CD6116" stroke="#CD6116" stroke-width="5.94955"/> <path d="M345.784 6.08252L1230.48 824.74L686.098 538.567L345.784 6.08252Z" fill="#763D16" stroke="#763D16" stroke-width="5.94955"/> <path d="M12.0146 1910.53L758.088 1879.59L934.195 2258.58L12.0146 1910.53Z" fill="#E4761B" stroke="#E4761B" stroke-width="5.94955"/> <path d="M934.194 2258.58L758.088 1879.59L1124.58 1861.75L934.194 2258.58Z" fill="#CD6116" stroke="#CD6116" stroke-width="5.94955"/> <path d="M1749.88 1676.72L1940.86 1793.33L2046.16 2041.42L1749.88 1676.72ZM826.508 1399.47L12.0146 1910.53L265.465 1304.27L826.508 1399.47ZM758.088 1879.59L12.0146 1910.53L826.508 1399.47L758.088 1879.59ZM1682.65 1403.04L1731.43 1580.33L1495.83 1594.02L1682.65 1403.04ZM1495.83 1594.02L1422.65 1411.96L1682.65 1403.04L1495.83 1594.02Z" fill="#F6851B" stroke="#F6851B" stroke-width="5.94955"/> <path d="M1134.69 2337.11L934.194 2258.58L1631.48 2375.79L1134.69 2337.11Z" fill="#C0AD9E" stroke="#C0AD9E" stroke-width="5.94955"/> <path d="M265.465 1304.27L151.234 1157.91L194.666 1115.67L265.465 1304.27Z" fill="#763D16" stroke="#763D16" stroke-width="5.94955"/> <path d="M1710.61 2288.92L1631.48 2375.79L934.194 2258.58L1710.61 2288.92Z" fill="#D7C1B3" stroke="#D7C1B3" stroke-width="5.94955"/> <path d="M1748.09 2075.93L934.194 2258.58L1124.58 1861.75L1748.09 2075.93Z" fill="#E4761B" stroke="#E4761B" stroke-width="5.94955"/> <path d="M934.194 2258.58L1748.09 2075.93L1710.61 2288.92L934.194 2258.58Z" fill="#D7C1B3" stroke="#D7C1B3" stroke-width="5.94955"/> <path d="M137.55 866.982L110.777 409.462L686.098 538.567L137.55 866.982ZM194.665 1115.67L115.536 1035.35L169.082 980.618L194.665 1115.67Z" fill="#763D16" stroke="#763D16" stroke-width="5.94955"/> <path d="M1289.38 1529.76L1422.65 1411.96L1403.61 1699.92L1289.38 1529.76Z" fill="#CD6116" stroke="#CD6116" stroke-width="5.94955"/> <path d="M1422.65 1411.96L1289.38 1529.76L1095.43 1630.31L1422.65 1411.96Z" fill="#CD6116" stroke="#CD6116" stroke-width="5.94955"/> <path d="M2046.16 2041.42L2009.87 2014.65L1749.88 1676.72L2046.16 2041.42Z" fill="#F6851B" stroke="#F6851B" stroke-width="5.94955"/> <path d="M1095.43 1630.31L826.508 1399.47L1422.65 1411.96L1095.43 1630.31Z" fill="#CD6116" stroke="#CD6116" stroke-width="5.94955"/> <path d="M1403.61 1699.92L1422.65 1411.96L1495.83 1594.02L1403.61 1699.92Z" fill="#E4751F" stroke="#E4751F" stroke-width="5.94955"/> <path d="M89.3589 912.199L137.55 866.982L169.083 980.618L89.3589 912.199Z" fill="#763D16" stroke="#763D16" stroke-width="5.94955"/> <path d="M1403.61 1699.92L1095.43 1630.31L1289.38 1529.76L1403.61 1699.92Z" fill="#233447" stroke="#233447" stroke-width="5.94955"/> <path d="M686.098 538.567L110.777 409.462L345.784 6.08252L686.098 538.567Z" fill="#763D16" stroke="#763D16" stroke-width="5.94955"/> <path d="M1631.48 2375.79L1664.2 2465.03L1134.69 2337.12L1631.48 2375.79Z" fill="#C0AD9E" stroke="#C0AD9E" stroke-width="5.94955"/> <path d="M1124.58 1861.75L1095.43 1630.31L1403.61 1699.92L1124.58 1861.75Z" fill="#F6851B" stroke="#F6851B" stroke-width="5.94955"/> <path d="M826.508 1399.47L1095.43 1630.31L1124.58 1861.75L826.508 1399.47Z" fill="#E4751F" stroke="#E4751F" stroke-width="5.94955"/> <path d="M1495.83 1594.02L1731.43 1580.33L2009.87 2014.65L1495.83 1594.02ZM826.508 1399.47L1124.58 1861.75L758.088 1879.59L826.508 1399.47Z" fill="#F6851B" stroke="#F6851B" stroke-width="5.94955"/> <path d="M1495.83 1594.02L1788.55 2039.64L1403.61 1699.92L1495.83 1594.02Z" fill="#E4751F" stroke="#E4751F" stroke-width="5.94955"/> <path d="M1403.61 1699.92L1788.55 2039.64L1748.09 2075.93L1403.61 1699.92Z" fill="#F6851B" stroke="#F6851B" stroke-width="5.94955"/> <path d="M1748.09 2075.93L1124.58 1861.75L1403.61 1699.92L1748.09 2075.93ZM2009.87 2014.65L1788.55 2039.64L1495.83 1594.02L2009.87 2014.65Z" fill="#F6851B" stroke="#F6851B" stroke-width="5.94955"/> <path d="M2068.18 2224.07L1972.99 2415.05L1664.2 2465.03L2068.18 2224.07ZM1664.2 2465.03L1631.48 2375.79L1710.61 2288.92L1664.2 2465.03Z" fill="#C0AD9E" stroke="#C0AD9E" stroke-width="5.94955"/> <path d="M1710.61 2288.92L1768.92 2265.72L1664.2 2465.03L1710.61 2288.92ZM1664.2 2465.03L1768.92 2265.72L2068.18 2224.07L1664.2 2465.03Z" fill="#C0AD9E" stroke="#C0AD9E" stroke-width="5.94955"/> <path d="M2009.87 2014.65L2083.05 2059.27L1860.54 2086.04L2009.87 2014.65Z" fill="#161616" stroke="#161616" stroke-width="5.94955"/> <path d="M1860.54 2086.04L1788.55 2039.64L2009.87 2014.65L1860.54 2086.04ZM1834.96 2121.15L2105.66 2088.42L2068.18 2224.07L1834.96 2121.15Z" fill="#161616" stroke="#161616" stroke-width="5.94955"/> <path d="M2068.18 2224.07L1768.92 2265.72L1834.96 2121.15L2068.18 2224.07ZM1768.92 2265.72L1710.61 2288.92L1748.09 2075.93L1768.92 2265.72ZM1748.09 2075.93L1788.55 2039.64L1860.54 2086.04L1748.09 2075.93ZM2083.05 2059.27L2105.66 2088.42L1834.96 2121.15L2083.05 2059.27Z" fill="#161616" stroke="#161616" stroke-width="5.94955"/> <path d="M1834.96 2121.15L1860.54 2086.04L2083.05 2059.27L1834.96 2121.15ZM1748.09 2075.93L1834.96 2121.15L1768.92 2265.72L1748.09 2075.93Z" fill="#161616" stroke="#161616" stroke-width="5.94955"/> <path d="M1860.54 2086.04L1834.96 2121.15L1748.09 2075.93L1860.54 2086.04Z" fill="#161616" stroke="#161616" stroke-width="5.94955"/> </g> <defs> <clipPath id="clip0_1512_1323"> <rect width="2404" height="2500" fill="white" transform="translate(0.519043 0.132812)"/> </clipPath> </defs> </svg>
                                    Approve 
                                </button>
                                <button type="button" className="bg-blue-700  underline focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2.5 text-center inline-flex items-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                    Download
                                </button>
                                    {/* <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Download</a> */}
                                </td>
                            </tr>
                        </tbody>
                    </table>

                </div>
            </section>

        </div>
    );
};

export default ProjectPage;