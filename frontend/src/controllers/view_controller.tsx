import { Map } from "leaflet"
import React, { PropsWithChildren, useEffect } from "react"
import { useMapContext } from "../context/map/map_context"
import useSound from "use-sound"
import whoosh from '../../public/whoosh.mp3'

interface ViewControllerProps {
    map: Map
}

const ViewController: React.FC<PropsWithChildren<ViewControllerProps>> = ({ map }) => {
    const [play, { stop }] = useSound(whoosh, { interrupt: true });
  
    const { viewContext, zoomContext } = useMapContext();
  
    useEffect(() => {
        stop()
        map.flyTo(viewContext, 8, { animate: true, duration: 2, easeLinearity: 1 });
        play()
    }, [viewContext, map, play, stop]);
  
    useEffect(() => {
      map.setZoom(zoomContext);
    }, [zoomContext, map]);
  
    return null;
  };
  
  export default ViewController;