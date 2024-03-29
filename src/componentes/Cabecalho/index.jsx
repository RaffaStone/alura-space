import styled from "styled-components"
import CampoTexto from "e:/estudos de progamação/React/space-app/src/CampoTexto"

const HeaderEstilizado = styled.header`
    padding: 60px 0;
    display: flex;
    justify-content: space-between;
    img {
        max-width: 212px;
    }
`

const Cabecalho = () => {
    return (<HeaderEstilizado>
        <img src="imagens/logo.png" alt="" />
        <CampoTexto />
    </HeaderEstilizado>
    )
}

export default Cabecalho