import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import ProdutosPage from './produtos';
import '@testing-library/jest-dom';
import { vi } from 'vitest';

vi.mock('@aparelhosArray/aparelhos.json', () => ({
    default: [
        { id: '001', nome: 'BTP com gancho de tração', img: '/img/aparelhos/BTP-gancho.jpg' },
        { id: '002', nome: 'Arco lingual', img: '/img/aparelhos/arco-lingual.jpg' },
        { id: '003', nome: 'Arco contínuo c/ estabilizador', img: '/img/aparelhos/arco-continuo.jpg' },
        { id: '004', nome: 'Banda e alça', img: '/img/aparelhos/banda-e-alca.jpg' },
        { id: '005', nome: 'Bi Hélice', img: '/img/aparelhos/bi-helice.jpg' },
        { id: '006', nome: 'BTP', img: '/img/aparelhos/btp.jpg' },
        { id: '007', nome: 'Contenção beeg', img: '/img/aparelhos/contencao-beeg.jpg' },
        { id: '008', nome: 'Contenção fixa higiênica', img: '/img/aparelhos/contencao-fixa-higienica.jpg' },
        { id: '009', nome: 'Contenção fixa reta', img: '/img/aparelhos/contencao-fixa-reta.jpg' },
    ],
}));

test('renders ProdutosPage with correct elements', () => {
    render(
        <MemoryRouter>
            <ProdutosPage />
        </MemoryRouter>
    );

    // Verifica se o campo de busca está presente
    expect(screen.getByPlaceholderText('Pesquisar Aparelhos')).toBeInTheDocument();

    // Verifica se os aparelhos estão presentes
    const aparelhoItems = screen.getAllByRole('listitem');
    expect(aparelhoItems.length).toBe(8); // Máximo de 8 aparelhos por página
});

test('search functionality works correctly', () => {
    render(
        <MemoryRouter>
            <ProdutosPage />
        </MemoryRouter>
    );

    // Digita no campo de busca
    const searchInput = screen.getByPlaceholderText('Pesquisar Aparelhos');
    fireEvent.change(searchInput, { target: { value: 'BTP com gancho de tração' } });

    // Verifica se o aparelho buscado está presente
    const aparelhoItems = screen.getAllByRole('listitem');
    expect(aparelhoItems.length).toBe(1);
    expect(screen.getByText('BTP com gancho de tração')).toBeInTheDocument();
});

test('pagination works correctly', () => {
    render(
        <MemoryRouter>
            <ProdutosPage />
        </MemoryRouter>
    );

    // Verifica se os aparelhos da primeira página estão presentes
    let aparelhoItems = screen.getAllByRole('listitem');
    expect(aparelhoItems.length).toBe(8);

    // Clica no botão de próxima página
    const nextPageButton = screen.getByText('Próxima');
    fireEvent.click(nextPageButton);

    // Verifica se os aparelhos da segunda página estão presentes
    aparelhoItems = screen.getAllByRole('listitem');
    expect(aparelhoItems.length).toBe(1); // Apenas 1 aparelho na segunda página
    expect(screen.getByText('Contenção fixa reta')).toBeInTheDocument();
});