import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import ProdutosPageView from './ProdutosPageView';
import '@testing-library/jest-dom';
import { vi } from 'vitest';

const mockSetSearchTerm = vi.fn();
const mockHandlePreviousPage = vi.fn();
const mockHandleNextPage = vi.fn();

const mockCurrentAparelhos = [
    { id: '001', nome: 'BTP com gancho de tração', img: '/img/aparelhos/BTP-gancho.jpg' },
    { id: '002', nome: 'Arco lingual', img: '/img/aparelhos/arco-lingual.jpg' },
    { id: '003', nome: 'Arco contínuo c/ estabilizador', img: '/img/aparelhos/arco-continuo.jpg' },
    { id: '004', nome: 'Banda e alça', img: '/img/aparelhos/banda-e-alca.jpg' },
    { id: '005', nome: 'Bi Hélice', img: '/img/aparelhos/bi-helice.jpg' },
    { id: '006', nome: 'BTP', img: '/img/aparelhos/btp.jpg' },
    { id: '007', nome: 'Contenção beeg', img: '/img/aparelhos/contencao-beeg.jpg' },
    { id: '008', nome: 'Contenção fixa higiênica', img: '/img/aparelhos/contencao-fixa-higienica.jpg' },
];

test('renders ProdutosPageView with correct elements', () => {
    render(
        <MemoryRouter>
            <ProdutosPageView
                searchTerm=""
                setSearchTerm={mockSetSearchTerm}
                currentAparelhos={mockCurrentAparelhos}
                currentPage={1}
                totalPages={2}
                handlePreviousPage={mockHandlePreviousPage}
                handleNextPage={mockHandleNextPage}
            />
        </MemoryRouter>
    );

    // Verifica se o campo de busca está presente
    expect(screen.getByPlaceholderText('Pesquisar Aparelhos')).toBeInTheDocument();

    // Verifica se os aparelhos estão presentes
    const aparelhoItems = screen.getAllByRole('listitem');
    expect(aparelhoItems.length).toBe(8); // Máximo de 8 aparelhos por página

    // Verifica se os botões de paginação estão presentes
    expect(screen.getByText('Anterior')).toBeInTheDocument();
    expect(screen.getByText('Próxima')).toBeInTheDocument();
    expect(screen.getByText('Página 1 de 2')).toBeInTheDocument();
});

test('search functionality works correctly', () => {
    render(
        <MemoryRouter>
            <ProdutosPageView
                searchTerm=""
                setSearchTerm={mockSetSearchTerm}
                currentAparelhos={mockCurrentAparelhos}
                currentPage={1}
                totalPages={2}
                handlePreviousPage={mockHandlePreviousPage}
                handleNextPage={mockHandleNextPage}
            />
        </MemoryRouter>
    );

    // Digita no campo de busca
    const searchInput = screen.getByPlaceholderText('Pesquisar Aparelhos');
    fireEvent.change(searchInput, { target: { value: 'BTP com gancho de tração' } });

    // Verifica se a função setSearchTerm foi chamada
    expect(mockSetSearchTerm).toHaveBeenCalledWith('BTP com gancho de tração');
});

test('pagination functionality works correctly', () => {
    const { rerender } = render(
        <MemoryRouter>
            <ProdutosPageView
                searchTerm=""
                setSearchTerm={mockSetSearchTerm}
                currentAparelhos={mockCurrentAparelhos}
                currentPage={1}
                totalPages={2}
                handlePreviousPage={mockHandlePreviousPage}
                handleNextPage={mockHandleNextPage}
            />
        </MemoryRouter>
    );

    // Clica no botão de próxima página
    const nextPageButton = screen.getByText('Próxima');
    fireEvent.click(nextPageButton);

    // Verifica se a função handleNextPage foi chamada
    expect(mockHandleNextPage).toHaveBeenCalled();

    // Atualiza o estado do componente para refletir a mudança de página
    rerender(
        <MemoryRouter>
            <ProdutosPageView
                searchTerm=""
                setSearchTerm={mockSetSearchTerm}
                currentAparelhos={mockCurrentAparelhos}
                currentPage={2}
                totalPages={2}
                handlePreviousPage={mockHandlePreviousPage}
                handleNextPage={mockHandleNextPage}
            />
        </MemoryRouter>
    );

    // Verifica se o botão de página anterior está habilitado
    const previousPageButton = screen.getByText('Anterior');
    expect(previousPageButton).not.toBeDisabled();

    // Clica no botão de página anterior
    fireEvent.click(previousPageButton);

    // Verifica se a função handlePreviousPage foi chamada
    expect(mockHandlePreviousPage).toHaveBeenCalled();
});