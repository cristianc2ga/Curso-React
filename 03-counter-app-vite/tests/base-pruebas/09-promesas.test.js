import { getHeroeByIdAsync } from "../../src/base-pruebas/09-promesas";
import heroes from "../../src/data/heroes";

describe('Pruebas en 09-promesas', () => {
    test('getHeroeByIdAsync debe de retornar un héroe ', (done) => {
      const id = 1;
      getHeroeByIdAsync(id)
      .then(hero => {
        expect(hero).toBe(heroes.find( (heroe) => heroe.id === id ))
        done();
      })
    })
    
  
})
