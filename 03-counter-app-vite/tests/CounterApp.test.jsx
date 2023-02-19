import { fireEvent, render, screen } from '@testing-library/react';
import  CounterApp  from '../src/CounterApp';

describe('Pruebas en el <CounterApp />', () => {
    const initialValue = 5;

    test('Debe de hacer match con el snapshot', () => {

      const { container } = render(<CounterApp value = {initialValue} />);
      expect(container).toMatchSnapshot();
    });
    test('Debe mostrar el valor inicial de 100 <CounterApp value={100} />', () => {
      render(<CounterApp value = {100} />);
      expect(screen.getByText('100')).toBeTruthy();
      
    });
    test('Debe incrementar con el boton +1', () => {
      render(<CounterApp value = {initialValue} />);
      fireEvent.click(screen.getByText('+1'));
      expect( screen.getByText('6') ).toBeTruthy();
      // expect(screen.getByRole('heading',{level:2}).innerHTML).toContain('6')
    });
    test('debe de decrementar con el botón -1', () => {
        
      render( <CounterApp value={ initialValue } /> );
      fireEvent.click( screen.getByText('-1') );
      expect( screen.getByText('4') ).toBeTruthy();

  });

  test('debe de funcionar el botón de reset', () => {
      
      render( <CounterApp value={ 355 } /> );
      fireEvent.click( screen.getByText('+1') );
      fireEvent.click( screen.getByText('+1') );
      fireEvent.click( screen.getByText('+1') );
      // fireEvent.click( screen.getByText('Reset') );
      fireEvent.click(screen.getByRole('button', { name: 'btn-reset' }));

      expect( screen.getByText( 355 ) ).toBeTruthy();

  });
    
    
  
})
