import Image from 'next/image'
import {SearchIcon} from '@heroicons/react/solid'
import {GlobeAltIcon,MenuIcon,UserCircleIcon,UserIcon} from '@heroicons/react/solid'
function Header() {
    return (
        <header className="sticky top-0 z-50 grid grid-cols-3 p-5 bg-white shadow-md md:px-10">
            
            {/* left section */}
            <div className="relative flex items-center h-10 my-auto cursor-pointer" >
                <Image src="https://links.papareact.com/qd3" layout="fill"
                objectFit="contain" objectPosition="left"
                />
            </div>
            {/* middle section */}
            <div className="flex items-center py-2 border-2 rounded-full md:shadow-md" >
                <input type="text" className="flex-grow pl-5 text-sm text-gray-600 bg-transparent outline-none" placeholder="search"/>
                <SearchIcon className="hidden h-8 p-2 mx-auto text-white bg-red-400 rounded-full cursor-pointer md:mx-2 md:inline-flex"/>
            </div>
            {/* right */}
            <div className="flex items-center justify-end space-x-4 text-gray-500" >
                <p className="hidden cursor-pointer md:inline">Become a Host</p>
                <GlobeAltIcon className="h-6" />
                <div className="flex items-center p-2 space-x-2 border-2 rounded-full" >
                    <MenuIcon className="h-6" />
                    <UserCircleIcon className="h-6"/>
                </div>
            </div>
        </header>
    )
}

export default Header
