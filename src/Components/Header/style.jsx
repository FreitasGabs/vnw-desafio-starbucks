import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderStyle = styled.header`
display: flex;
justify-content: space-between;
background-color: white;
`

export const UlStyle = styled.ul`
list-style-type: none;
font-family: "Poppins";
`;

export const LinkStyle = styled(Link)`
    text-decoration: none;
`;