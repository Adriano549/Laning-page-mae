import Navi from '../nav';
import { RiToothLine } from 'react-icons/ri';
import { FcAdvance } from 'react-icons/fc';
import { useNavigate } from 'react-router-dom';
import  {Container, LabDiv , Section} from "./styled"

const HomeTop: React.FC = () => {
  const navigate = useNavigate();
    return (
        <Section>
             <Navi /> 
            <Container>
                <div>
                    <h1>
                        <RiToothLine />
                        Sheilla Labor Orto
                        <RiToothLine />
                    </h1>
                </div>
                <div>
                    <p>Laboratório especializado em prótese ortodôntica e ortopédica
                    Técnica responsável Sheilla de Almeida Paulino</p>
                </div>
            </Container>
            <LabDiv>
                <h3>Conheça um pouco do meu laboratório</h3>
                <p>
                    <FcAdvance  data-testid="fcadvance-icon" style={{cursor:"pointer"}} onClick={() => navigate("/sobre")}/>
                </p>
            </LabDiv>
        </Section>
    );
};

export default HomeTop;
