import Logo from '../assets/logo.png'

import ConnectButton from './ConnectButton'

export default function Header(){

    return (
        <>
        <header className="bg-white">
            <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2 lg:px-8" aria-label="Global">
                <div className="flex lg:flex-1">
                <a href="#" className="-m-1.5 p-1.5">
                    <div className="flex pt-3">
                    <span className="sr-only mt-4">Your Company</span>
                    <img className="h-20 w-auto" src={Logo} alt=""/>
                    <div className="flex flex-col">
                        <span className="text-sm font-semibold leading-5 text-gray-900 mt-5">Your Company</span>
                        <span className="text-xs font-semibold leading-5 text-gray-500">Lorem ibsum Ouin da</span>
                    </div>
                    </div>

                </a>
                </div>
                <div className="flex lg:hidden">
                <button type="button" className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700">
                    <span className="sr-only">Open main menu</span>
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                </button>
                </div>
                <div className="hidden lg:flex lg:gap-x-12">
                <div className="relative">
                    <button type="button" className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900" aria-expanded="false">
                    Lorem
                    <svg className="h-5 w-5 flex-none text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
                    </svg>
                    </button>

                </div>

                <a href="#" className="text-sm font-semibold leading-6 text-gray-900">Lorem</a>
                <a href="#" className="text-sm font-semibold leading-6 text-gray-900">Lorem</a>
                <a href="#" className="text-sm font-semibold leading-6 text-gray-900">Lorem</a>
                </div>
                <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                    <ConnectButton />                
                </div>
            </nav>
        </header>
        </>
    )


}