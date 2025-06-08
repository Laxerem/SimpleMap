import { useState } from "react"

export type DiscoverParams = {
    name: string,
    image_class: string,
    image_name: string,
    hide_name: string,
    description: string,
    facts: Array<string>
}

interface IDiscover {
    discover: DiscoverParams
}

const Discoverer: React.FC<IDiscover> = ({discover}) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
    <div className='discover' 
    onMouseEnter={() => setIsHovered(true)} 
    onMouseLeave={() => setIsHovered(false)}>

        <div className={discover.image_class}
        style={{
            backgroundImage: 
            isHovered ? `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(/${discover.image_name})`
            : `linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)), url(/${discover.image_name})`
        }}
        >
            <div className="discover_image_content"
            style={{
                opacity: isHovered ? "1" : "0",
                transition: '1s'
            }}
            >
                <h4>{discover.hide_name}</h4>
                <p>{discover.description}</p>
                <ul>
                    {discover.facts.map((fact, index) =>
                        <li key={index}>{fact}</li>
                    )}
                </ul>
            </div>
        </div>
        <h3>{discover.name}</h3>
    </div>
)
}

export default Discoverer