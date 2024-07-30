import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Aparelhos from './aparelhos';
import { vi } from 'vitest';

vi.mock('@aparelhosArray/aparelhos.json', () => ({
    default: [
        { id: '001', nome: 'BTP com gancho de tração', img: '/img/aparelhos/BTP-gancho.jpg' },
    ],
}));

test('renders Aparelhos without data', () => {
    vi.mock('@aparelhosArray/aparelhos.json', () => ({
        default: [],
    }));

    render(
        <MemoryRouter>
            <Aparelhos isLoading={false} />
        </MemoryRouter>
    );
    const aparelhoItems = screen.queryAllByRole('listitem');
    expect(aparelhoItems.length).toBe(0);
    expect(screen.getByText('Nenhum aparelho disponível')).toBeInTheDocument();
});

test('renders loading message before data is loaded', () => {
    render(
        <MemoryRouter>
            <Aparelhos isLoading={true} />
        </MemoryRouter>
    );
    expect(screen.getByText('Carregando...')).toBeInTheDocument();
});