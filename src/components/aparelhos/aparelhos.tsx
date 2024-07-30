import aparelhosData from "@aparelhosArray/aparelhos.json"
import AparelhoList from '@components/lista/AparelhoList';
import styled from 'styled-components';

interface AparaelhosProps{
  isLoading?: boolean;
}

const Aparelhos: React.FC <AparaelhosProps> = ({isLoading= false}) => {
  
  console.log('aparelhosData:', aparelhosData); // Adicione este log para verificar os dados

  if (isLoading) return <div>Carregando...</div>;

  if (!aparelhosData.length) {
    return <div>Nenhum aparelho disponível</div>;
  }
  const aparelhoDataSlice = aparelhosData.slice(0,8)
  return (
    <Container>
      <div>
        <h2>Alguns dos Aparelhos</h2>
      </div>
      <div>
        <AparelhoList aparelhos={aparelhoDataSlice}/>
      </div>
    </Container>
  );
};

export default Aparelhos;

const Container = styled.section`
  border-top: solid rgba(173, 127, 247, 0.2);
  padding: 20px;
  div {
    text-align: center;
    width: 100%;
  }
  ul {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 300px));
    gap: 20px;
  }
`;