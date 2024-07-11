
/**
 * Esta funcion permite tomar una carta
 * @param {Array<String>} deck es un arreglo de string
 * @returns {String} retorna la carta del deck
 */

export const pedirCarta = ( deck ) => {
    
    if ( !deck || deck.lenght === [] ) {
        throw 'No hay cartas en el deck';
    }
    // remueve el ultimo elemento
    return deck.pop();
}