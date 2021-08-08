import { useState } from 'react'
import ReactMapGL, {Marker,Popup} from 'react-map-gl'
import  getCenter  from 'geolib/es/getCenter'
function Map({searchResults}) {
    const [selectedLocation,setSelectedLocation]=useState({})
    
    // transform searchResults object into {lat,long} object
    const coordinates=searchResults.map(result=>(
        {
            longitude: result.long,
            latitude: result.lat,
        }
        ))
        console.log(coordinates)
        // the latitude and longitude of the center of location coordinates
        const center=getCenter(coordinates)
        const [viewport,setViewPort]=useState({
            width:'100%',
            height:'100%',
            latitude:center.latitude,
            longitude:center.longitude,
            zoom:11,
        })
        console.log(center)
    return (
        <ReactMapGL
        mapStyle='mapbox://styles/akadazed/cks2w7yx48c5718nxmv3zen18'
        mapboxApiAccessToken={process.env.mapbox_key}
        {...viewport}
        onViewportChange={(nextViewport)=>setViewPort(nextViewport)} 
        >
        {searchResults.map(result=>(
            <div key={result.long}>
                <Marker
                longitude={result.long}
                latitude={result.lat}
                offsetLeft={-20}
                offsetTop={-10}
                >
                    <p onClick={()=>setSelectedLocation(result)} role="img"
                    className="text-2xl cursor-pointer animate-bounce"
                    aria-label="push-pin"
                    >📌</p>

                </Marker>
               {/* this is the popup that should show if we click on the marker */}
               {selectedLocation.long === result.long ? (
                   <Popup closeOnClick={true}
                   onClose={()=>setSelectedLocation({})}
                   latitude={result.lat}
                   longitude={result.long}
                   >
                       {result.title}
                   </Popup>
               ):(
                   false
                   )}
            </div>
        ))} 
            
        </ReactMapGL>
    )
}

export default Map
