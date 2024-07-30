import styled from "styled-components";
import { GiFlowerEmblem } from "react-icons/gi";

const Sobre: React.FC = () => {
    return (
        <Container>
            <div>
                <h2><GiFlowerEmblem />  Sobre  <GiFlowerEmblem /></h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel velit vitae lectus hendrerit scelerisque. Sed ultricies arcu sed libero consectetur, in ultricies justo bibendum. Sed euismod orci id velit ultricies, vel consectetur ligula fermentum. Nulla facilisi. Sed fermentum, felis ac elementum efficitur, mauris velit ultrices diam, at semper neque metus a velit.</p>
            </div>
            <div>
                <h2>Laboratorio</h2>
                <div>
                    <img src="" alt="" />
                    <img src="" alt="" />
                    <img src="" alt="" />
                </div>
            </div>
        </Container>
    );
};

export default Sobre;

const Container= styled.section`
    border-top: solid rgba(173, 127, 247, 0.2);
    padding: 20px;
    text-align: center;
    h2 {
        color: #e0abf1;
    }
`