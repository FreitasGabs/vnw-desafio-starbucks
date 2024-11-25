import { MainStyle, H2Style, H1Style, TextoSB, StyleP, StyledButton, StyledCopinhos, StyledSelect, StyledContainer, StyledElipse, StyledCopo } from "./style"
import copinhoAmarelo from "../../assets/cafe_amarelo.svg"
import copinhoLaranja from "../../assets/cafe_laranja.svg"
import copinhoVermelho from "../../assets/cafe_vermelho.svg"
import copoAmarelo from "../../assets/cafe_amarelo2x.svg"
import copoLaranja from "../../assets/cafe_laranja2x.svg"
import copoVermelho from "../../assets/cafe_vermelho2x.svg"
import elipseVerde from "../../assets/elipse_verde.svg"
import elipseAmarela from "../../assets/elipse_amarela.svg"
import elipseVermelha from "../../assets/elipse_vermelha.svg"
import { useState } from "react"

export default function Home() {

    const [copo, setCopo] = useState(copoLaranja)
    const [elipse, setElipse] = useState(elipseVerde)

      const trocaAmarelo = () => {
          setCopo(copoAmarelo);
          setElipse(elipseAmarela)
      }

      const trocaLaranja = () => {
          setCopo(copoLaranja);
          setElipse(elipseVerde)
      }

      const trocaVermelho = () => {
          setCopo(copoVermelho);
          setElipse(elipseVermelha)
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

            <StyledButton>SAIBA MAIS</StyledButton>
          </section>

          <StyledSelect>
            <StyledCopinhos src={copinhoLaranja} onClick={trocaLaranja} alt="" />
            <StyledCopinhos src={copinhoVermelho} onClick={trocaVermelho} alt="" />
            <StyledCopinhos src={copinhoAmarelo} onClick={trocaAmarelo} alt="" />
          </StyledSelect>
        </section>

        <StyledContainer>
          <StyledElipse src={elipse} alt="" />
          <StyledCopo src={copo} alt="" />
        </StyledContainer>
      </MainStyle>
    );
}