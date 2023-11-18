import { useWeb3Modal } from '@web3modal/wagmi/react';
import React, { useState, useEffect } from 'react';
import { useConnect, useAccount, useDisconnect } from 'wagmi';

const ConnectButton: React.FC = () => {
  const [loading, setLoading] = useState(false);

  const { open } = useWeb3Modal() 
  const { address } = useAccount()

  const handleConnect = async () => {
    if(!address){
      setLoading(true);
    }

    try {
      open()
      // setLoading(false);
    } catch (error) { 
      console.error(error);
    }
  };

  useEffect(() => {
    if (address) {
      setLoading(false);
    }
  }, [address]);


  if (loading == true) {
    return <button className="bg-green text-white px-4 py-2 rounded flex items-center">
      <div className="animate-spin h-4 w-4 border-2 border-white border-t-transparent mr-2 rounded-full"></div>
      Loading...
    </button>;
  }

  if (address) {
    return <div className="flex items-center">
      <button className="bg-green text-white px-4 py-2 rounded flex items-center" onClick={handleConnect}>
        {address.substring(0, 6)}...{address.substring(address.length - 4)}
        <svg className="ml-2 w-4 h-4" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M19 9l-7 7-7-7"></path>
        </svg>
      </button>
    </div>;
  }

  return <button className="bg-green text-white px-4 py-2 rounded" onClick={handleConnect}>
    Connect to Wallet
  </button>;
};

export default ConnectButton;
