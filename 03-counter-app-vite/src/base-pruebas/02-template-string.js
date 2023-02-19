
export function getSaludo(nombre) {
    return 'Hola ' + nombre;
}

const nombre = 'Cristian'
console.log( `Este es un texto: ${ getSaludo( nombre ) }  ` );