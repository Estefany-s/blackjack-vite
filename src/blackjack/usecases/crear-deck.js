import _ from 'underscore';

// Esto nos ayuda a que podamos documentar el tipo de dato que se espera
// por parametro

/**
 * esta funcion crea un nuevo deck
 * @param {Array<String>} tiposDeCarta 
 * @param {Array<String>} tiposEspeciales  
 * @return {Array<String>} retorna un nuevo deck de cartas
*/

export const crearDeck = (tiposDeCarta, tiposEspeciales) => {

    if (!tiposDeCarta || tiposDeCarta.length === 0) throw new Error('Tipos de carta es obligatorio como un arreglo de string');
    if (!tiposEspeciales || tiposEspeciales.length === 0) throw new Error('Tipos de carta es obligatorio como un arreglo de string');
    
    let deck = [];

    for( let i = 2; i <= 10; i++ ) {
        for ( let tipo of tiposDeCarta ) {
            deck.push( i + tipo );
        }
    }

    for ( let tipo of tiposDeCarta ) {
        for ( let esp of tiposEspeciales ) {
            deck.push( esp + tipo );
        }
    }

    deck = _.shuffle( deck );

    return deck;
}

// esto hace que siempre se importara crearDeck por defecto
// export default crearDeck;
