import './styles.scss'
import * as React from 'react';
import { useNavigate } from "react-router-dom";

const Header = () => {
    const navigate = useNavigate();
    return <header className='header'>
      <h3 style={{ cursor: 'pointer' }} onClick={() => navigate('/')}>TRIPP O SPACE</h3>
    </header>
}

export default Header;


