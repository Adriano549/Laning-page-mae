import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import AparelhoInfoView from './AparelhoInfoView';
import '@testing-library/jest-dom';
import { vi } from 'vitest';

// Mock da imagem padrão
vi.mock('@img/default.png', () => ({
    default: 'default-image.png'
}));

const mockAparelho = {
    id: '001',
    nome: 'BTP com gancho de tração',
    img: '/img/aparelhos/BTP-gancho.jpg',
    descricao: 'Descrição do aparelho',
};

test('renders AparelhoInfoView with correct data', () => {
    render(
        <MemoryRouter>
            <AparelhoInfoView aparelho={mockAparelho} />
        </MemoryRouter>
    );

    // Verifica se o nome do aparelho está presente
    expect(screen.getByText(mockAparelho.nome)).toBeInTheDocument();

    // Verifica se a descrição do aparelho está presente
    expect(screen.getByText(mockAparelho.descricao)).toBeInTheDocument();

    // Verifica se a imagem do aparelho está presente
    const imgElement = screen.getByTestId('aparelho-image');
    expect(imgElement).toBeInTheDocument();
    expect(imgElement).toHaveAttribute('src', mockAparelho.img);
});