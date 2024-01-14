import styled from "styled-components";
import { useState } from "react";
import {Link} from "react-router-dom"
import { RxHamburgerMenu } from "react-icons/rx";
import {FaTimes} from "react-icons/fa"
export default function NavBar(){

    const NavBar = styled.nav`
    @media (max-width:628.5px){
        padding-right: 10px;
    }
    ul{
        display: flex;
        justify-content: center;
        justify-content: space-around;
        align-items: center;
        width: 70vw;
        height: 20vh;
        @media (max-width:628.5px){
            display: none;
        }
        li{
            list-style: none;
            font-size: 2rem;
        }
    }
    `
    const Links = styled(Link)`
    text-decoration: none;
    color: #fff;
    `
    const [nav, setNav] = useState(false)
    const Click = () => setNav(!nav)
    return(
        <NavBar onClick={Click}>
        <ul>
            <li><Links to="/">Inicio</Links></li>
            {/* <li><Links to="/Pet">Pet Shop</Links></li> */}
            <li><Links to="/Banho">Banho e Tosa</Links></li>
            <li><Links to="/Veterinario">Veterinária</Links></li>
        </ul>
    </NavBar>
    )
    
}
