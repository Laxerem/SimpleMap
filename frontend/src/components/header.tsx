import { useState } from 'react'
import '../assets/styles/header.scss'
import { useNavigate } from 'react-router-dom'

const Header = () => {
    const navigate = useNavigate()
    const [isHover, setIsHover] = useState<boolean>(false)

    return (
        <header>
            <div className='header_container'>
                <div className='logo image' 
                onClick={() => navigate('/home')}
                onMouseEnter={() => setIsHover(true)}
                onMouseLeave={() => setIsHover(false)}
                style={{
                    transition: '1s',
                    cursor: 'pointer',
                    transform: isHover ? 'scale(1.05) rotate(73deg)' : undefined
                }}
                />
            </div>
        </header>
    )
}

export default Header