import { MainStyle, H2Style, H1Style, TextoSB, StyleP } from "./style"

export default function Home() {
    return (
        <MainStyle>
            <section>
                <H2Style>Mais que Café</H2Style>
                <H1Style>Isso é <TextoSB>Starbucks</TextoSB></H1Style>

                <StyleP>A Starbucks oferece uma variedade de cafés de alta qualidade. Alguns dos cafés mais populares incluem o Caffè Americano, o Cappuccino, o Latte Macchiato e o Espresso. Além disso, a Starbucks oferece bebidas quentes e frias, doces diferenciados e sanduíches.</StyleP>
            </section>
            
        </MainStyle>
    )
}