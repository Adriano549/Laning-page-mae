import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import AparelhoList from './AparelhoList';
import '@testing-library/jest-dom';
import mockAparelhos from '@aparelhosArray/aparelhos.json';
import { vi } from 'vitest';

interface Aparelho {
    id: string | number;
    nome: string;
    img: string;
    descricao?: string;
}

const aparelhos: Aparelho[] = mockAparelhos;

test('renders AparelhoList with correct data', () => {
    render(
        <MemoryRouter>
            <AparelhoList aparelhos={aparelhos} />
        </MemoryRouter>
    );

    aparelhos.forEach(aparelho => {
        expect(screen.getByText(aparelho.nome)).toBeInTheDocument();
        const imgElement = screen.getByAltText(aparelho.nome);
        expect(imgElement).toBeInTheDocument();
        expect(imgElement).toHaveAttribute('src', aparelho.img);
    });
});

test('renders correct links for each aparelho', () => {
    render(
        <MemoryRouter>
            <AparelhoList aparelhos={aparelhos} />
        </MemoryRouter>
    );

    aparelhos.forEach(aparelho => {
        const linkElement = screen.getByText(aparelho.nome).closest('a');
        expect(linkElement).toHaveAttribute('href', `/aparelhos/${aparelho.id}`);
    });
});