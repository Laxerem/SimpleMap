import { GeoJSONProps, MapContainer, Marker, Popup, GeoJSON, TileLayer } from 'react-leaflet';

const MapComponent: React.FC = () => {
    const Geo_json: GeoJSON.FeatureCollection = {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {},
          "geometry": {
            "coordinates": [
              [
                [
                  -65.62695249312675,
                  -54.77912422989706
                ],
                [
                  -65.62695249312675,
                  -47.50828093599764
                ],
                [
                  -63.04443700760703,
                  -40.656077518500865
                ],
                [
                  -51.42311732276852,
                  -33.020707212332816
                ],
                [
                  -40.318300735033716,
                  -21.335116867739515
                ],
                [
                  -34.636766666890566,
                  -6.851001426380648
                ],
                [
                  -52.972626614080454,
                  4.491076657642324
                ],
                [
                  -66.14345559023086,
                  10.37824702116498
                ],
                [
                  -76.73176972211766,
                  10.378245970942984
                ],
                [
                  -80.08903985329337,
                  -2.992252218169014
                ],
                [
                  -74.14925438360207,
                  -12.449779792162857
                ],
                [
                  -70.79198425242637,
                  -19.15460945542361
                ],
                [
                  -70.79198413098823,
                  -29.93793909837097
                ],
                [
                  -73.89100258014943,
                  -41.32019013930618
                ],
                [
                  -74.66575722580542,
                  -50.947997533843356
                ],
                [
                  -73.37449948304575,
                  -54.39104267669955
                ],
                [
                  -65.62695249312675,
                  -54.77912422989706
                ]
              ]
            ],
            "type": "Polygon"
          }
        }
      ]
    }

    return(
        <>
        <MapContainer 
        center={[0,0]}
        zoom={2}
        style={{height: "100vh", width: '100%'}}
        maxZoom={10}
        minZoom={2}
        >
        <TileLayer
          url="https://services.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
          attribution="© ArcGIS © Esri"
        />

        <Marker position={[0,0]}>
            <Popup>ЭЙ ЧЕБУРЕК</Popup>
        </Marker>

        <GeoJSON data={Geo_json}/>
        </MapContainer>
        </>
    )
}

export default MapComponent;