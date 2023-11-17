import { createWeb3Modal, defaultWagmiConfig } from '@web3modal/wagmi/react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { WagmiConfig } from 'wagmi'
import { arbitrum, mainnet } from 'viem/chains'

import Header from './modules/Header'

import Landpage from './modules/Landpage';

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

export default function App() {
  return (
    <WagmiConfig config={wagmiConfig}>
		<Header/>
		<Router>
            <div className="body">
                <Routes>
                    <Route path="/" element={<Landpage/>}/>
                    {/* <Route path="/dashboard" element={<Dashboard/>}/> */}
                </Routes>
            </div>
        

        </Router>
    </WagmiConfig>
  )
}