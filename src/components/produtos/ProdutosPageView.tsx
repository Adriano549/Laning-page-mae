import AparelhoList from '@components/lista/AparelhoList';
import  {Container,Pagination, SearchInput} from './styled'

interface ProdutosPageViewProps {
    searchTerm: string;
    setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
    currentAparelhos: any[];
    currentPage: number;
    totalPages: number;
    handlePreviousPage: () => void;
    handleNextPage: () => void;
}

const ProdutosPageView: React.FC<ProdutosPageViewProps> = ({
    searchTerm,
    setSearchTerm,
    currentAparelhos,
    currentPage,
    totalPages,
    handlePreviousPage,
    handleNextPage
}) => {
    return (
        <Container>
            <div>
                <h2>Alguns dos aparelhos</h2>
                <p>Para saber de outros entre em contato </p>
                <SearchInput
                    type="text"
                    placeholder="Pesquisar Aparelhos"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>
            <div>
                <AparelhoList aparelhos={currentAparelhos} />
            </div>
            <Pagination>
                <button onClick={handlePreviousPage} disabled={currentPage === 1}>Anterior</button>
                <span>Página {currentPage} de {totalPages}</span>
                <button onClick={handleNextPage} disabled={currentPage === totalPages}>Próxima</button>
            </Pagination>
        </Container>
    );
};

export default ProdutosPageView;

