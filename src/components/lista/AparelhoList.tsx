import { Link } from 'react-router-dom';
import styled from 'styled-components';

interface Aparelho {
    id: string | number;
    nome: string;
    img: string;
    descricao?: string;
}

interface AparelhoListProps {
    aparelhos: Aparelho[];
    limit?: number;
}

const AparelhoList: React.FC<AparelhoListProps> = ({ aparelhos, limit }) => {
    return (
        <Ul>
            {aparelhos.slice(0, limit).map((aparelho: Aparelho) => (
                <Li key={aparelho.id}>
                <Link to={`/aparelhos/${aparelho.id}`}>
                    <img src={aparelho.img} alt={aparelho.nome} />
                    <p>{aparelho.nome}</p>
                </Link>
                </Li>
            ))}
        </Ul>
    );
};

export default AparelhoList;

const Ul = styled.ul`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 300px));
    gap: 20px;
`;

const Li = styled.li`
    text-align: center;
    box-shadow: 0px 5px 15px  rgba(0, 0, 0, 0.3) ;
    border-radius: 10px;
    cursor: pointer;
    &:hover{
    border: 4px solid #bdbeee;
    }
    img{
        padding: 10px;
        height: 200px;
        border-radius: 20px;
    }
    a {
    text-decoration: none;
    color: inherit;
    }
`;
