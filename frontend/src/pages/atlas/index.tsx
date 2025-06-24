import React from "react"
import AtlasContainer from "./atlas"
import './styles/index.scss'

const atlas_images = [
    "/atlas.png",
    "/atlas-2.png",
    "/atlas-3.png",
    "/atlas-4.png",
    "/atlas-5.png"
]

const AtlasPage: React.FC = () => {

    return(
        <main>
            <AtlasContainer images={atlas_images}/>
        </main>
    )
}

export default AtlasPage