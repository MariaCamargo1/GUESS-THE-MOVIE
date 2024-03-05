import { useState } from 'react';


const movies = [
  { name: "Forrest Gump", emoji: "🏃🍫🍤" },
  { name: "The Matrix", emoji: "🕶️💊👽" },
  { name: "Titanic", emoji: "🚢❄️💔" },
  { name: "Jurassic Park", emoji: "🦖🌴🚙" },
  { name: "The Lion King", emoji: "🦁👑🌅" },
  { name: "Star Wars", emoji: "⚔️🚀🌌" },
  { name: "The Avengers", emoji: "🦸‍♂️🦸‍♀️💥" },
  { name: "Harry Potter", emoji: "⚡🧙‍♂️🔮" },
  { name: "The Terminator", emoji: "🤖🔫🕶️" },
  { name: "Indiana Jones", emoji: "🤠🔍💎" },
  { name: "Back to the Future", emoji: "⏰🚗💥" },
  { name: "The Shawshank Redemption", emoji: "🔒🔑💰" },
  { name: "The Godfather", emoji: "🍕🤵🔫" },
  { name: "The Dark Knight", emoji: "🦇♞👨‍🦯" },
  { name: "Pulp Fiction", emoji: "🍔🔫🕶️" },
  { name: "Schindler's List", emoji: "📜🚂🔴" },
  { name: "The Lord of the Rings: The Return of the King", emoji: "🧝‍♂️🧙‍♂️🗡️" },
  { name: "The Silence of the Lambs", emoji: "🔇🐑🍖" },
  { name: "Fight Club", emoji: "👊💼🚽" },
  { name: "Inception", emoji: "🌀👩‍🚀🎩" }
];

function Juego() {
  
  const [respuesta, setRespuesta] = useState('');
  const [intentos, setIntentos] = useState(3);
  const [indicePelicula, setIndicePelicula] = useState(0);
  const [peliculaAdivinada, setPeliculaAdivinada] = useState('');

  const peliculaActual = movies[indicePelicula];

  const manejarRespuesta = () => {
    const respuestaNormalizada = respuesta.toLowerCase().trim();
    if (respuestaNormalizada === peliculaActual.name.toLowerCase()) {
      if (indicePelicula === movies.length - 1) {
        setPeliculaAdivinada(peliculaActual.name);
        alert("¡Felicidades! Has adivinado todas las películas.");
        window.location.reload();
      } else {
        setPeliculaAdivinada(peliculaActual.name);
        setRespuesta('');
        setIndicePelicula(indicePelicula + 1);
      }
    } else {
      if (intentos === 1) {
        alert("¡Perdiste todos tus intentos! La película correcta era: " + peliculaActual.name);
        window.location.reload();
      } else {
        setIntentos(intentos - 1);
      }
    }
  };

  return (
    <div className='container'>
      <h1 className='guessmovie'>¡GUESS THE MOVIE!</h1>
      <h2 className='vida'>VIDA: {intentos}</h2>
      {peliculaAdivinada && <p className='correcto'>¡Correcto! La película era: {peliculaAdivinada}</p>}
      <div className='emoji' style={{ fontSize: '3em', marginBottom: '1em' }}>{peliculaActual.emoji}</div>
      <div className='barraboton'>
      <input className='ingresapeli' type="text" placeholder="¡Adivina!" value={respuesta} onChange={(e) => setRespuesta(e.target.value)}/>
      <button className='enviar' onClick={manejarRespuesta}>Enviar</button>
      </div>
    </div>
    
  );
  
}


export default Juego;
