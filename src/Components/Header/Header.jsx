import styled from "styled-components";
import Logo from "../../assets/PetLogo.png"
import NavBar from "../NavBar/NavBar";
export default function Header(){
    const Header = styled.header`
    display: flex;
    justify-content: center;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    height: 20vh;
    background-color: #2ca2b5;
    @media (max-width:628.5px){
        justify-content: space-between;
    }
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
    
    return(
        <Header>
            <Figure>
                <img src={Logo} alt="" />
                <h2>Pet Shop e Veterinario </h2>
            </Figure>
            <NavBar/>
            
        </Header>
    )
}