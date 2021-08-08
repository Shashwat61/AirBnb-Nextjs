import Image from 'next/image'
import {SearchIcon} from '@heroicons/react/solid'
import {GlobeAltIcon,MenuIcon,UserCircleIcon,UserIcon} from '@heroicons/react/solid'
import { useState } from 'react'
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker } from 'react-date-range';
import { useRouter } from 'next/dist/client/router';

function Header({placeholder}) {
    const [search,setSearch]=useState('')
    const [startDate,setStartDate]=useState(new Date())
    const [endDate,setEndDate]=useState(new Date())
    const [noOfGuests,setNoOfGuests]=useState(1)
    const router=useRouter()

    const handleSelect=(ranges)=>{
        setStartDate(ranges.selection.startDate)
        setEndDate(ranges.selection.endDate)
    }
    
    const selectionRange={
        startDate,
        endDate,
        key: 'selection'
    }
    const reset=()=>{
        setSearch('')
    }
    const searchLocation=()=>{
        router.push({
            pathname: "/search",
            query: {
                location: search,
                startDate: startDate.toISOString(),
                endDate: endDate.toISOString(),
                noOfGuests,
            }
        })
    }
    return (
        <header className="sticky top-0 z-50 grid grid-cols-3 p-5 bg-white shadow-md md:px-10">
            
            {/* left section */}
            <div onClick={()=>router.push('/')} className="relative flex items-center h-10 my-auto cursor-pointer" >
                <Image src="https://links.papareact.com/qd3" layout="fill"
                objectFit="contain" objectPosition="left"
                />
            </div>
            {/* middle section */}
            <div className="flex items-center py-2 border-2 rounded-full md:shadow-md" >
                <input value={search} onChange={(e)=>setSearch(e.target.value)} type="text" className="flex-grow pl-5 text-sm text-gray-600 bg-transparent outline-none" placeholder={placeholder || "search"}/>
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
            {search && (
                <div className="flex flex-col col-span-3 mx-auto mt-2">
                <DateRangePicker
                ranges={[selectionRange]}
                minDate={new Date()}
                rangeColors={["#FD5B61"]}
                onChange={handleSelect}
                />  
                <div className="flex items-center mb-4 border-b">
                    <h2 className="flex-grow text-2xl font-semibold">Number of Guests</h2>
                    <UserIcon className="h-5"/>
                    <input type="number" value={noOfGuests}
                     onChange={(e)=>setNoOfGuests(e.target.value)} min={1} className="w-12 pl-2 text-lg text-red-400 outline-none"/>
                </div>
                <div className="flex ">
                    <button onClick={reset} className="flex-grow text-gray-500">Cancel</button>
                    <button onClick={searchLocation} className="flex-grow text-red-400">Search</button>
                </div>
                </div>
                
            )}
            
        </header>
    )
}

export default Header
