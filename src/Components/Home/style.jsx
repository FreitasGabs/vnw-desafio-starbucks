import styled from "styled-components";

export const MainStyle = styled.main`
    font-family: "Poppins";
    padding: 0 3em;

    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 85vh;
`;

export const H2Style = styled.h2`
    font-family: "Inter";
    font-weight: 400;
    font-size: 64px;
`;

export const H1Style = styled.h1`
    font-weight: 400;
    font-size: 64px;
`;

export const TextoSB = styled.span`
    color: #037143;
    font-size: 90px;
    font-weight: 700;
`;

export const StyleP = styled.p`
    width: 30vw;
`;

export const StyledButton = styled.button`
    background-color: #037143;
    color: white;
    font-family: "Inter";
    border: none;
    border-radius: 30px;
    width: 10vw;
    padding: 0.75em 1.5em;
    margin: 2.5em;
`

export const StyledSelect = styled.figure`
    display: flex;
    justify-content: center;
    align-items: center;
`

export const StyledCopinhos = styled.img`
    transition: transform 0.5s ease;
        &:hover{
            transform: rotate(20deg);
        }
`

export const StyledContainer = styled.section`
    display: flex;
    align-items: flex-end;
    position: relative;
`

export const StyledElipse = styled.img`
    position: absolute;
    z-index: -1;
`

export const StyledCopo = styled.img`
    
`