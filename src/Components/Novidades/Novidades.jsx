import { StyledNovidades, TextoSobre, StyledSubtitulo, StyledH2, StyleP, StyledButton } from "./style"
import graoCafe from "../../assets/grao_cafe.svg"

export default function Novidades() {
    return (
        <StyledNovidades>
            <TextoSobre>
                <StyledSubtitulo>PREPARAÇÃO</StyledSubtitulo>
                <StyledH2>Niveis de Torra</StyledH2>
                <StyleP>Qual a torra que prefere? Starbucks® Torra Clara, Torra Média ou Torra Escura? Estas são as torras que fazem parte dos níveis de torra Starbucks®</StyleP>
                <StyledButton>SAIBA MAIS</StyledButton>
            </TextoSobre>

            <img src={graoCafe} alt="Um grão de café dividido em três tipos diferentes, verticalmente" />
        </StyledNovidades>
    )
}