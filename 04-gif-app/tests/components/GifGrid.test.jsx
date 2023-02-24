import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components/GifGrid";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

//hace un mock completo de un hook
jest.mock('../../src/hooks/useFetchGifs')

describe('Pruebas sobre <GifGrid/>', () => {
    const category = 'One Punch';
  test('Debe de mostrar el loading inicialmente', () => {
    useFetchGifs.mockReturnValue({
        images: [],
        isLoading: true
    });
    render(<GifGrid category={category} />);
    expect(screen.getByText('Cargando...'));
    expect(screen.getByText(category));
  });

  test('Debe mostrar items cuando de carga las imagenes useFetchGifs', () => {
    const gifs = [
        {
            id: 'ABC',
            title: 'Saitama',
            url: 'https://example.com'
        },
        {
            id: '124',
            title: 'Goku',
            url: 'https://example.com'
        },
    ]
    useFetchGifs.mockReturnValue({
        images: gifs,
        isLoading: false
    });
    render(<GifGrid category={category} />);
    expect(screen.getAllByRole('img').length).toBe(2);
  });
  
  
});
