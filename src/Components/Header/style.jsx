import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderStyle = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: white;
    padding: 1.5em;
    height: 15vh;
`

export const UlStyle = styled.ul`
    list-style-type: none;
    font-family: "Poppins";
    display: flex;
    justify-content: space-around;
    width: 30vw;
`;

export const LinkStyle = styled(Link)`
    text-decoration: none;
    color: #1E3932;

    &:hover{
        color: #037143;
    }

    &:visited{
        color: #1E3932;
    }
`;