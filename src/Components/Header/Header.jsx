import styled from "styled-components";
import Logo from "../../assets/PetLogo.png"
import {Link} from "react-router-dom"
export default function Header(){
    const Header = styled.header`
    display: flex;
    justify-content: center;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    height: 20vh;
    background-color: #2ca2b5;
    `
    const Figure = styled.figure`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 30vw;
    height: 20vh;
    h2{
        color: #fff;
    }
    img{
        color: #fff;
    }
    `
    const NavBar = styled.nav`
    ul{
        display: flex;
        justify-content: center;
        justify-content: space-around;
        align-items: center;
        width: 70vw;
        height: 20vh;
        li{
            list-style: none;
            font-size: 2rem;
        }
    }
    
    `
    
    return(
        <Header>
            <Figure>
                <img src={Logo} alt="" />
                <h2>Pet Shop e Veterinario </h2>
            </Figure>
                <NavBar>
                    <ul>
                        <li><Link>Inicio</Link></li>
                        <li><Link>Pet Shop</Link></li>
                        <li><Link>Banho e Tosa</Link></li>
                        <li><Link>Veterinária</Link></li>
                    </ul>
                </NavBar>
        </Header>
    )
}