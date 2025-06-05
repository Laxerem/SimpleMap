import L, { LatLngExpression } from "leaflet";
import React, { PropsWithChildren } from "react";
import { Marker } from "react-leaflet";

export interface ITextMarker {
    position: LatLngExpression
    text: string
    size: [number, number],
    className?: string
}

interface TextMarkerProps {
    data: ITextMarker
}

const TextMarker: React.FC<PropsWithChildren<TextMarkerProps>> = ({data}) => {

    const customText = L.divIcon({
        html: `<p>${data.text}</p>`,
        className: data.className || "default_text_marker",
        iconSize: data.size, // Размер блока текста
        iconAnchor: [50, 40], // Центр текста
    });

    return (
        <Marker position={data.position} icon={customText}></Marker>
    )
}

export default TextMarker