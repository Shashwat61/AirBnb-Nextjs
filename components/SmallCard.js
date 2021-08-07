import Image from "next/image";

function SmallCard({img, distance, location}) {
    return (
        <div className="flex items-center m-2 mt-5 space-x-4 transition duration-200 ease-out transform cursor-pointer rounded-xl hover:bg-gray-100 hover:scale-105">
            {/* left hand side */}
            <div className="relative w-16 h-16 ">
                <Image
                src={img}
                layout="fill"
                className="rounded-lg"
                />
            </div>
            {/* right side  */}
            <div>

            <h2>{location}</h2>
            <h3>{distance}</h3>
            </div>
        </div>
    )
}

export default SmallCard
