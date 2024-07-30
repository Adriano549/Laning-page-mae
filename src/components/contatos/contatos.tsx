import styled from "styled-components";


const Contatos: React.FC = () => {
    return (
        <Container id="contatos">
            <h1>Contatos</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <ul>
                <li>Telefone: (11) 99999-9999</li>
                <li>Email:  contato@site.com</li>
                <li>Local:  São Paulo - SP </li>
            </ul>
        </Container>
    )
}

export default Contatos;


const Container = styled.div`
    text-align: center;
    margin-top: 50px;
`;