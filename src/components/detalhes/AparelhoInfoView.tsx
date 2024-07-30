import React from "react";
import styled from "styled-components";
import defaulImage from "@img/default.png";

interface Aparelho {
    id: string | number;
    nome: string;
    img: string;
    descricao?: string;
}

interface AparelhoInfoViewProps {
    aparelho: Aparelho;
}

const AparelhoInfoView: React.FC<AparelhoInfoViewProps> = ({ aparelho }) => {
    const handleImageError = (event: React.SyntheticEvent<HTMLImageElement, Event>) => {
        event.currentTarget.src = defaulImage;
        event.currentTarget.alt = "Imagem padrão - não foi possível carregar a imagem do aparelho";
        event.currentTarget.setAttribute('data-testid', 'default-image');
    };

    return (
        <Container>
            <div>
                <img src={aparelho.img} alt={aparelho.nome} onError={handleImageError} data-testid="aparelho-image"/>
            </div>
            <div>
                <h2>{aparelho.nome}</h2>
                <p>{aparelho.descricao}</p>
            </div>
        </Container>
    );
};

export default AparelhoInfoView;

const Container = styled.div`
    border-top: solid rgba(173, 127, 247, 0.2);
    padding: 20px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    padding: 20px;
    justify-content: center;
    gap: 20px;
    
    img {
        border-radius: 10px;
        height: 400px;
    }
`;