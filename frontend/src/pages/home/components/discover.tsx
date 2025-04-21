export type DiscoverParams = {
    name: string,
    image_class: string,
    hide_name: string,
    description: string,
    facts: Array<string>
}

interface IDiscover {
    discover: DiscoverParams
}

const Discoverer: React.FC<IDiscover> = ({discover}) => {
    return (
    <div className='discover'>
        <div className={discover.image_class}>
            <div className="discover_image_content">
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