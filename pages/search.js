import { format } from "date-fns"
import { useRouter } from "next/dist/client/router"
import Footer from "../components/Footer"
import Header from "../components/Header"
import InfoCard from "../components/InfoCard"
import Map from "../components/Map"

function Search({searchResults}) {
    console.log(searchResults)
    const router=useRouter()
    const {location, startDate, endDate, noOfGuests}=router.query
    
    const formattedStartDate=format(new Date(startDate), "dd MMMM yy")
    const formattedEndDate=format(new Date(endDate), "dd MMMM yy")
    const range=`${formattedStartDate} - ${formattedEndDate}`
    return (
        <div>
            <Header placeholder={`${location} | ${range} | ${noOfGuests}`}/>
            <main className="flex">
                <section className="flex-grow px-6 pt-14">
                    <p className="text-xs">300+ Stays - {range} - For {noOfGuests} guests</p>
                    <h1 className="mt-2 mb-6 text-3xl font-semibold">Stays In {location}</h1>
                    <div className="hidden mb-5 space-x-3 text-gray-800 lg:inline-flex whitespace-nowrap">
                        <p className="button">Cancellation Flexibility</p>
                        <p className="button">Type Of Place</p>
                        <p className="button">Price</p>
                        <p className="button">Rooms and Beds</p>
                        <p className="button">More Filters</p>
                    </div>

                    <div className="flex flex-col">
                    {searchResults.map(({img, location, title, description, star, price, total})=>(
                        <InfoCard img={img} location={location} title={title} description={description} star={star} price={price} total={total} key={img} />
                        ))}
                        </div>
                </section>
                <section className="hidden xl:inline-flex xl:min-w-[500px]">
                    <Map searchResults={searchResults}/>
                </section>
            </main>
            <Footer/>
        </div>
    )
}

export async function getServerSideProps(){
    const searchResults=await fetch("https://links.papareact.com/isz").then(res=>res.json())
    return {
        props: {
            searchResults
        }
    }
}

export default Search
