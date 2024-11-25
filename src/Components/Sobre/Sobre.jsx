import { StyledSobre, TextoSobre, StyledH2, StyleP, StyledButton } from "./style"
import loja from "../../assets/loja_sb.svg"

export default function Sobre() {
    return (
        <StyledSobre>
            <img src={loja} alt="Fachada de uma loja antiga da Starbucks" />
            <TextoSobre>
                <StyledH2>Niveis de Torra</StyledH2>
                <StyleP>Qual a torra que prefere? Starbucks® Torra Clara, Torra Média ou Torra Escura? Estas são as torras que fazem parte dos níveis de torra Starbucks®</StyleP>
                <StyledButton>SAIBA MAIS</StyledButton>
            </TextoSobre>
        </StyledSobre>
    )
}