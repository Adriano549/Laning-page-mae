import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import AparelhoInfo from './detalhes';
import aparelhosData from '@aparelhosArray/aparelhos.json';
import '@testing-library/jest-dom';
import { vi } from 'vitest';

// Mock da imagem padrão
vi.mock('@img/default.png', () => ({
    default: 'default-image.png'
}));

const mockAparelho = aparelhosData[0]; // Supondo que o primeiro aparelho seja usado para o teste

test('renders AparelhoInfo with correct data', () => {
    render(
        <MemoryRouter initialEntries={[`/aparelhos/${mockAparelho.id}`]}>
            <Routes>
                <Route path="/aparelhos/:id" element={<AparelhoInfo />} />
            </Routes>
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