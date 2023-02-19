import { getHeroeById, getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp";
import heroes from "../../src/data/heroes";

describe('Pruebas en 08-imp-exp', () => {
    
    test('Get heroe by id debe retornar un heroe por id', () => {
        const id = 1;
        const hero = getHeroeById(id);
        console.log(hero);
        expect(hero).toEqual({ id: 1, name: 'Batman', owner: 'DC' })
    });
    test('Get heroe by id debe retornar "undefined" si no existe el heroe', () => {
        const id = 100;
        const hero = getHeroeById(id);
        console.log(hero);
        expect(hero).toBeFalsy();
    })
    test('Get by owner by Owner debe retornar un arreglo de heroes', () => {
        const owner = "DC";
        const hero = getHeroesByOwner(owner);

        expect(hero.length).toBe(3);
        expect(hero).toEqual([
            { id: 1, name: 'Batman', owner: 'DC' },
            { id: 3, name: 'Superman', owner: 'DC' },
            { id: 4, name: 'Flash', owner: 'DC' }
            ]);
        expect(hero).toEqual(heroes.filter( (heroe) => heroe.owner === owner ));
    })
  
})
