import { createWeb3Modal, defaultWagmiConfig } from '@web3modal/wagmi/react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import { WagmiConfig } from 'wagmi'
import { arbitrum, mainnet } from 'viem/chains'

import Header from './modules/Header'

import Landpage from './modules/Landpage';
import OrganizationPage from "./modules/projects/OrganizationPage.tsx";
import {QueryClient, QueryClientProvider} from "react-query";
import CreateProject from "./modules/projects/CreateProject.tsx";
import React from "react";
import {Toaster} from "react-hot-toast";
import ProjectPage from "./modules/projects/ProjectPage.tsx";
import ProjectList from './modules/projects/ProjectList';
import Footers from './modules/Footers.tsx';

const projectId = process.env.WALLET_ID ?? "undefined"

console.log(projectId)

const metadata = {
  name: 'Web3Modal',
  description: 'Web3Modal Example',
  url: 'https://web3modal.com',
  icons: ['https://avatars.githubusercontent.com/u/37784886']
}

const chains = [mainnet, arbitrum]
const wagmiConfig = defaultWagmiConfig({ chains, projectId, metadata })

createWeb3Modal({ wagmiConfig, projectId, chains })

export const API_URL = "http://localhost:3000"

export default function App() {
    const queryClient = new QueryClient()


  return (
    <WagmiConfig config={wagmiConfig}>
        <QueryClientProvider client={queryClient}>
		<Router>
            <div className="body mx-auto">
                <Toaster/>
                <Header/>
                <Routes>
                    <Route path="/" element={<Landpage/>}/>
                    <Route path="/organization/:id" element={<OrganizationPage/>}/>
                    <Route path="/projectList" element={<ProjectList/>}/>
                    <Route path="/project/:id" element={<ProjectPage/>}/>
                    <Route path="/create-project" element={<CreateProject/>}/>
                    {/* <Route path="/dashboard" element={<Dashboard/>}/> */}
                </Routes>
                <Footers/>
            </div>
        

        </Router>
        </QueryClientProvider>
    </WagmiConfig>
  )
}