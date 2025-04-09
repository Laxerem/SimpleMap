type DiscoverParams = {
    name: string,
    hide_name: string
    description: string,
    facts: Array<string>
}

interface IDiscover {
    discover: DiscoverParams
}

const Discover: React.FC<IDiscover> = ({discover}) => {
    return (
    <div className='discover'>
        <div className="discover_image">
            <img className="lazar" src='../../../public/Lazarev.png'/>
            <h3>{discover.hide_name}</h3>
            <p>{discover.description}</p>
            <ul>
                {discover.facts.map((fact, index) =>
                    <li key={index}>{fact}</li>
                )}
            </ul>
        </div>
        <h2>{discover.name}</h2>
    </div>
)
}

export default Discover