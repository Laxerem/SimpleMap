import '../assets/styles/header.scss'
import { useNavigate } from 'react-router-dom'

const Header = () => {
    const navigate = useNavigate()

    return (
        <header>
            <div className='header_container'>
                <div className='logo image' onClick={() => navigate('/home')}/>
                <div className='catalog image' />
            </div>
        </header>
    )
}

export default Header