import { render, screen } from '@testing-library/react';
import { GifExpertApp } from '../../src/GifExpertApp';


describe('Pruebas en <GifExpertApp />', () => {

    test('debe mostrar el titulo', () => {
        
        render( <GifExpertApp /> );

        expect( screen.getByRole('heading')).toBeTruthy();

    });


});