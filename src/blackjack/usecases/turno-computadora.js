import {pedirCarta, valorCarta, crearCartaHTML} from './';

/**
 * 
 * @param {Number} puntosMinimos puntos minimos que la computadora necesita ganar
 * @param {HTMLElement} puntosHTML
 * @param {HTMLElement} divCartasComputadora
 * @param {Array<String>} deck
 */

export const turnoComputadora = ( puntosMinimos, divCartasComputadora, puntosHTML ,deck ) => {
    
    if (!puntosMinimos) throw new Error('Puntos minimos son necesarios');
    if (!deck) throw new Error('El deck es necesario');
    if (!puntosHTML) throw Error('Argumento puntosHTML es necesario');

    let puntosComputadora = 0;

    do {
        const carta = pedirCarta(deck);

        puntosComputadora = puntosComputadora + valorCarta( carta );

        puntosHTML.innerText = puntosComputadora;

        const imgCarta = crearCartaHTML(carta);
        divCartasComputadora.append( imgCarta );

        if ( puntosMinimos > 21 ) {
            break;
        }
        
    } while( (puntosComputadora < puntosMinimos) && (puntosMinimos <= 21) );

    setTimeout(() => {

        if( puntosComputadora === puntosMinimos ) {
            alert('Nadie gana');
        } else if ( puntosMinimos > 21 ) {
            alert('Lo siento, te ganó la computadora');
        } else if ( puntosComputadora > 21) {
            alert('¡Felicidades ganó el jugador!');
        } else {
            alert('Lo siento, te ganó la computadora');
        }

    }, 100);

}