import styled from "styled-components";
import { GrInstagram } from "react-icons/gr";

const Footer: React.FC = () => {
    return (
        <>
            <FooterContainer>
                <div>
                    <h2>Feito por Adriano de Almeida Paulino</h2>
                    <p>Desenvolvedor front-end-junior</p>
                </div>
                <div>
                    <h2>Contato</h2>
                    <p>Email: adriano.web.dev00@gmail.com</p>
                    <p><a href="https://www.linkedin.com/in/adriano-almeida-510a0a309/" target="_blank">Linkedin</a></p>
                    <p><a href="https://github.com/Adriano549" target="_blank">GitHub</a></p>
                    <p><a href="https://www.instagram.com/adriano.web.dev/" target="_blank">Instagram</a></p>
                </div>
                <div>
                    <h2>Termos e Condições</h2>
                    <p>**© 2024 Adriano. Todos os direitos reservados.**</p>
                    <p>**As imagens dos aparelhos foram disponibilizadas por <a href="https://www.instagram.com/sheillaalmeidapaulino/" target="_blank">Sheilla de Almeida( minha mãe)  <GrInstagram /> </a>.**</p>
                </div>
                
            </FooterContainer>
        </>
    )
}

export default Footer;

const FooterContainer = styled.footer`
    border-top: solid 2px black;
    display: grid ;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 40px;
    padding: 20px;
    margin-top: 20px;
    h2{
        font-size: 20px;
    }
    p{
        font-size: 14px;
    }
    a{
        color: #007bff;
        text-decoration: underline;
        transition: color 0.3s ease;
        font-size: 16px;
    }
`