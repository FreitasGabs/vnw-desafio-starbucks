import { Link } from "react-router-dom"; //mantendo aqui apesar de funcionar sem, já que o Link tá no estilo
import logo from "../../assets/logo_sb.svg"
import { HeaderStyle, UlStyle, LinkStyle } from "./style";


export default function Header() {
    return(
        <HeaderStyle>

            <img src={logo} alt="Logotipo da empresa Starbucks" />

            <nav>
                <UlStyle>
                <li><LinkStyle to="/">Home</LinkStyle></li>
                <li><LinkStyle to="/novidades">Novidades</LinkStyle></li>
                <li><LinkStyle to="/sobre">Sobre</LinkStyle></li>
                </UlStyle>
            </nav>
        </HeaderStyle>
    )
}