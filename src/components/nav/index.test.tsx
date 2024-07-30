import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter, useNavigate } from 'react-router-dom';
import Navi from './index';
import '@testing-library/jest-dom';
import { vi } from 'vitest';

// Mock do useNavigate e MemoryRouter
vi.mock('react-router-dom', async () => {
    const actual = await vi.importActual('react-router-dom');
    return {
        ...actual,
        useNavigate: vi.fn(),
    };
});

const mockNavigate = vi.fn();
(useNavigate as jest.Mock).mockReturnValue(mockNavigate);

test('renders Navi with correct elements', () => {
    render(
        <MemoryRouter>
            <Navi />
        </MemoryRouter>
    );

    // Verifica se a logo está presente
    expect(screen.getByAltText('')).toBeInTheDocument();

    // Verifica se os links estão presentes
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('Sobre')).toBeInTheDocument();
    expect(screen.getByText('Contatos')).toBeInTheDocument();
    expect(screen.getByText('Aparelhos')).toBeInTheDocument();
});

test('navigates to correct routes on click', () => {
    render(
        <MemoryRouter>
            <Navi />
        </MemoryRouter>
    );

    // Clica no link "Home"
    fireEvent.click(screen.getByText('Home'));
    expect(mockNavigate).toHaveBeenCalledWith('/');

    // Clica no link "Sobre"
    fireEvent.click(screen.getByText('Sobre'));
    expect(mockNavigate).toHaveBeenCalledWith('/sobre');

    // Clica no link "Aparelhos"
    fireEvent.click(screen.getByText('Aparelhos'));
    expect(mockNavigate).toHaveBeenCalledWith('/aparelhos');
});

test('handles scroll to section correctly', () => {
    // Simula que a rota atual não é a raiz
    Object.defineProperty(window, 'location', {
        value: {
            pathname: '/outra-rota'
        },
        writable: true
    });

    render(
        <MemoryRouter>
            <Navi />
        </MemoryRouter>
    );

    // Mock do localStorage
    const setItemMock = vi.spyOn(Storage.prototype, 'setItem');

    // Clica no link "Contatos"
    fireEvent.click(screen.getByText('Contatos'));

    // Verifica se o localStorage foi chamado corretamente
    expect(setItemMock).toHaveBeenCalledWith('scrollToSection', 'contatos');
    expect(mockNavigate).toHaveBeenCalledWith('/');
});