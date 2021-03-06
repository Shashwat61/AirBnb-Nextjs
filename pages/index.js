import { useRouter } from 'next/dist/client/router'
import Head from 'next/head'
import Banner from '../components/Banner'
import Footer from '../components/Footer'
import Header from '../components/Header'
import LargeCard from '../components/LargeCard'
import MediumCard from '../components/MediumCard'
import SmallCard from '../components/SmallCard'

export default function Home({data,cardsData}) {
  console.log(data)
  return (
    <div className="">
      <Head>
        <title>AirBnB</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

     {/* Header */}
     <Header/>
     {/* Banner */}
     <Banner/>
     <main className="px-8 mx-auto sm:px-16 max-w-7xl">
       <section className="pt-6">
         <h2 className="pb-5 text-4xl font-semibold">Explore Nearby</h2>
         {/* pull some data from a serve  */}

         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
         {data.map(item=>(
           <SmallCard key={item.img} img={item.img} distance={item.distance} location={item.location} />
         ))}
           </div>
       </section>
       <section>
         <h2 className="py-8 text-4xl font-semibold">Live Anywhere</h2>
         <div className="flex p-3 -ml-3 space-x-3 overflow-scroll scrollbar-hide">
           
         {cardsData.map(({img, title})=>(
           <MediumCard img={img} title={title} key={img}/>
           ))}
           </div>
       </section>
       <LargeCard
       img='https://links.papareact.com/4cj'
       title="The Greatest Outdoors"
       description="Wishlists curated by Airbnb"
       buttonText="Get Inspired"
       />
     </main>
     <Footer/>
    </div>
  )
}

export async function getStaticProps(){
  const data=await fetch('https://links.papareact.com/pyp').then(res=>res.json())
  // const data=await exploreData.json()
  // console.log(data)
  const cardsData=await fetch('https://links.papareact.com/zp1').then(res=>res.json())
  return {
    props: {
      data,
      cardsData
    }
  }
}