import React, { useState } from "react";
import { ArrowDropDown, Notifications, Search } from '@mui/icons-material';
import "./navbar.scss"
import { Link } from "react-router-dom";
 
const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    window.onscroll = () => {
        setIsScrolled(window.pageYOffset === 0 ? false : true);
        return () => (window.onscroll = null);
    };
    
  return (
        <div className={isScrolled ? "navbar scrolled" : "navbar"}>
            <div className="container">
                <div className="left">
                    <img src="/assets/img/logo/logo-two-final.png" alt="" />
                
                    <Link to="/" className="link">
                        <span>Inicio</span>
                    </Link>
                    <Link to="/series" className="link">
                        <span>Series</span>
                    </Link>
                    <Link to="/movies" className="link">
                        <span>Peliculas</span>
                    </Link>
                    <Link to="/movies" className="link">
                        <span>Novedades</span>
                    </Link>
                    <span>Mi lista</span>
                </div>
                <div className="right">
                    <Search className="icon" />
                    <span>KID</span>
                    <Notifications className="icon" />
                    <img src="/assets/img/perfiles/perfil-1.png" alt="" />
                    <div className="profile">
                        <ArrowDropDown className="icon" />
                        <div className="options">
                        <span>Configuración</span>
                        <span>Cerrar sesión</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Navbar