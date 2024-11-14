import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledHeader = styled.header`
background-color: white;
`

export default function Header() {
    return(
        <StyledHeader>


            <nav>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/novidades">Novidades</Link></li>
                <li><Link to="/sobre">Sobre</Link></li>
            </nav>
        </StyledHeader>
    )
}