// Agregue un controlador de eventos onClick a la imagen que imprima el src de la imagen
// en la consola. ¿El atributo de nombre del botón todavía se imprime en la consola cuando
// se hace clic en la imagen? ¿Por qué?

// Si agregas un controlador de eventos onClick a la imagen que imprime el src
// de la imagen en la consola, el atributo name del botón seguirá imprimiéndose en la
// consola cuando se haga clic en la imagen. Esto se debe a cómo funcionan los eventos de
// propagación en React y en el modelo de eventos del DOM.
// Cuando haces clic en la imagen, se produce un evento de clic en la imagen,
// y ese evento se propaga hacia arriba en el árbol DOM. Esto significa que el evento se
// propaga primero al elemento padre más cercano, que es el botón en este caso. Por lo tanto,
// si el botón tiene un controlador de eventos onClick, se ejecutará antes que el controlador
// de eventos de la imagen, y el atributo name del botón se imprimirá en la consola antes de
// que se imprima el src de la imagen.

//con controlador de eventos

import React from 'react';

function MouseClicker({ name, imageSrc }) {
  const handleButtonClick = () => {
    console.log(`Button clicked: ${name}`);
  };

  const handleImageClick = () => {
    console.log(`Image clicked: ${imageSrc}`);
  };

  return (
    <div>
      <button name={name} onClick={handleButtonClick}>
        Click me
        <img
          src={imageSrc}
          alt="A descriptive alt text"
          style={{ marginLeft: '5px' }}
          onClick={handleImageClick} // Event handler for the image
        />
      </button>
    </div>
  );
}

export default MouseClicker;

// Con esta modificación, el controlador de eventos handleImageClick imprimirá el src de la imagen
// en la consola cuando hagas clic en la imagen, mientras que el controlador de eventos
// handleButtonClick imprimirá el name del botón cuando hagas clic en cualquier parte del botón,
// incluida la imagen. La propagación de eventos es la razón por la cual ambos controladores se ejecutan.
