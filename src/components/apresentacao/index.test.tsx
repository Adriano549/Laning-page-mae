import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import HomeTop from '@components/apresentacao/index';
import '@testing-library/jest-dom';
import { vi } from 'vitest';

// Mock do componente Navi
vi.mock('../nav', () => ({
    default: () => <div>Navi Mock</div>
}));

// Mock dos estilos
vi.mock('@components/apresentacao/styled', () => ({
    Section: 'section',
    Container: 'div',
    LabDiv: 'div',
}));

test('renders HomeTop component with correct elements', () => {
    render(
        <MemoryRouter>
            <HomeTop />
        </MemoryRouter>
    );

    expect(screen.getByText('Sheilla Labor Orto')).toBeInTheDocument();
    expect(screen.getByText('Trabalho com destintas na cidade de São Paulo')).toBeInTheDocument();
    expect(screen.getByText('Conheça um pouco do meu laboratório')).toBeInTheDocument();

    const navIcon = screen.getByTestId('fcadvance-icon');
    expect(navIcon).toBeInTheDocument();
});