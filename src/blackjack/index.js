import { crearDeck, pedirCarta, valorCarta, turnoComputadora, crearCartaHTML  } from './usecases';

// 2C = Two of Clubs (Tréboles)
// 2D = Two of Diamonds (Diamantes)
// 2H = Two of Hearts (Corazones)
// 2S = Two of Spades (Espadas)

let deck = [];
const tipos = ['C', 'D', 'H', 'S'];
const especiales = ['A', 'J', 'Q', 'K'];

let puntosJugador = 0, puntosComputadora = 0;

// referencias del html
const btnPedir = document.querySelector('#btnPedir');
const btnDetener = document.querySelector('#btnDetener');
const btnNuevo = document.querySelector('#btnNuevo');
const puntaje = document.querySelectorAll('small');
const divCartasJugador = document.querySelector('#jugador-cartas');
const divCartasComputadora = document.querySelector('#computadora-cartas');


deck = crearDeck(tipos, especiales);

pedirCarta(deck);

valorCarta( pedirCarta(deck) );

// EVENTOS

btnPedir.addEventListener('click', () => {
    const carta = pedirCarta(deck);

    puntosJugador = puntosJugador + valorCarta( carta );

    puntaje[0].innerText = puntosJugador;

    const imgCarta = crearCartaHTML(carta);
    divCartasJugador.append( imgCarta );

    if ( puntosJugador > 21 ) {
        console.warn('Perdiste');
        btnPedir.disabled = true;
        btnDetener.disabled = true;
        turnoComputadora(puntosJugador, divCartasComputadora, puntaje[1], deck  );
        
    } else if ( puntosJugador === 21 ) {
        console.warn('21, genial');
        btnDetener.disabled = true;
        btnPedir.disabled = true;
        turnoComputadora(puntosJugador, divCartasComputadora, puntaje[1], deck  );

    }

});

btnDetener.addEventListener('click', () => {
    btnPedir.disabled = true;
    btnDetener.disabled = true;

    turnoComputadora(puntosJugador, divCartasComputadora, puntaje[1], deck );
});

btnNuevo.addEventListener('click', () => {
    
    console.clear();
    deck = [];
    deck = crearDeck(tipos, especiales);

    puntosComputadora = 0;
    puntosJugador = 0;

    puntaje[0].innerText = puntosJugador;
    puntaje[1].innerText = puntosComputadora;

    // de esta forma desaparecen las imagenes de las cartas
    divCartasComputadora.innerHTML = '';
    divCartasJugador.innerHTML = '';

    btnPedir.disabled = false;
    btnDetener.disabled = false;

});
