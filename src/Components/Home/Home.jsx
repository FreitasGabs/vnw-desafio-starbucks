import { MainStyle, H2Style, H1Style, TextoSB, StyleP, StyledButton, StyledCopinhos, StyledSelect } from "./style"
import copinhoAmarelo from "../../assets/cafe_amarelo.svg"
import copinhoLaranja from "../../assets/cafe_laranja.svg"
import copinhoVermelho from "../../assets/cafe_vermelho.svg"
import copoAmarelo from "../../assets/cafe_amarelo2x.svg"
import copoLaranja from "../../assets/cafe_laranja2x.svg"
import copoVermelho from "../../assets/cafe_vermelho2x.svg"
import { useState } from "react"

export default function Home() {

    const [copo, setCopo] = useState(copoLaranja)

    const trocaAmarelo = () => {
        setCopo(copoAmarelo)
    }

    const trocaLaranja = () => {
        setCopo(copoLaranja)
    }

    const trocaVermelho = () => {
        setCopo(copoVermelho)
    }



    return (
      <MainStyle>
        <section>
          <section>
            <H2Style>Mais que Café</H2Style>
            <H1Style>
              Isso é <TextoSB>Starbucks</TextoSB>
            </H1Style>

            <StyleP>
              A Starbucks oferece uma variedade de cafés de alta qualidade.
              Alguns dos cafés mais populares incluem o Caffè Americano, o
              Cappuccino, o Latte Macchiato e o Espresso. Além disso, a
              Starbucks oferece bebidas quentes e frias, doces diferenciados e
              sanduíches.
            </StyleP>

            <StyledButton>Saiba Mais</StyledButton>
          </section>

          <StyledSelect>
            <StyledCopinhos src={copinhoLaranja} onClick={trocaLaranja} alt="" />
            <StyledCopinhos src={copinhoVermelho} onClick={trocaVermelho} alt="" />
            <StyledCopinhos src={copinhoAmarelo} onClick={trocaAmarelo} alt="" />
          </StyledSelect>
        </section>

        <section>
          <img src={copo} alt="" />
        </section>
      </MainStyle>
    );
}