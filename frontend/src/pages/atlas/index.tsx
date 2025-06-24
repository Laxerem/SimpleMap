import React from "react"
import AtlasContainer from "./atlas"
import './styles/index.scss'

const atlas_images = [
    "/atlas.png",
    "/Antarctica.png"
]

const AtlasPage: React.FC = () => {

    return(
        <main>
            <AtlasContainer images={atlas_images}/>
        </main>
    )
}

export default AtlasPage