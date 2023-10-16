// Intente acceder a los valores del formulario utilizando la API DOM leyendo event.target del
// controlador de eventos onSubmit.

//PRIMERA FORMA

// Grab a reference to the form
const formElem = document.querySelector("form");

// Submit handler
formElem.addEventListener("submit", (e) => {
  // Prevent the default form submission
  e.preventDefault();

  // Access form data using FormData
  const formData = new FormData(formElem);
  console.log(formData.get("field1")); // Get the value of "field1"
  console.log(formData.get("field2")); // Get the value of "field2"
});

//SEGUNDA FORMA

// Submit handler using onsubmit property
formElem.onsubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(formElem);
    console.log(formData.get("field1"));
    console.log(formData.get("field2"));
  };

// ¿Qué es la API estándar?

// La API estándar puede referirse a dos conceptos diferentes:
// API estándar del American Petroleum Institute (API):
// El API es una organización fundada en 1919 que establece estándares y es líder mundial
// en convocar a expertos en la materia en todos los segmentos para establecer,
// mantener y distribuir estándares de consenso para la industria del petróleo y el gas.
// Los estándares del API se desarrollan conforme al proceso de acreditación del
// API de los estándares nacionales de los EE. UU., lo que garantiza que los estándares del
// API sean reconocidos no solo por su rigor técnico, sino también por la acreditación de
// terceros.
// Estos estándares mejoran la seguridad operativa, la protección ambiental y la
// sostenibilidad en toda la industria.
// El API tiene más de 700 normas y prácticas recomendadas.

// API (Interfaz de Programación de Aplicaciones) estándar: Una API es un conjunto de
// definiciones y protocolos que permiten a dos componentes de software comunicarse entre sí.
// En este contexto, una API estándar se refiere a una API que sigue un conjunto de
// principios y patrones de comunicación ampliamente aceptados.
// Por ejemplo, una API RESTful es un tipo de API estándar que utiliza los principios
// de la arquitectura REST para la comunicación entre un servidor web y un navegador web.
// Estas API estándar facilitan la integración de diferentes sistemas y la creación de
// aplicaciones que interactúan con servicios externos de manera eficiente y confiable.

// ¿Existen API no estándar que se puedan utilizar para acceder a los datos del formulario?

// Sí, existen API no estándar que se pueden utilizar para acceder a los datos del formulario.
// Algunos ejemplos de estas API son:

// API de KontroliD: Esta API permite acceder a los datos de formularios a través de
// servicios como api/v1/data y api/v1/data/{Id Formulario}. Los resultados se devuelven
// en formato JSON o CSV

// API de RESTful: Las API RESTful son interfaces que dos sistemas de computación utilizan
// para intercambiar información de manera segura a través de Internet

// Estas API son flexibles y se pueden utilizar para acceder a los datos del formulario.
// API de socios: Algunas empresas ofrecen API de socios que solo pueden ser accedidas
// por desarrolladores externos autorizados para ayudar a las asociaciones entre empresas

// API de servicios en la nube: Plataformas como Google Cloud y Amazon Web Services ofrecen
// API para acceder a diferentes servicios, incluyendo el manejo de datos de formularios

// API personalizada: Si necesitas funcionalidad adicional que no está disponible con formularios 
// estándar, puedes trabajar con un desarrollador para crear una API personalizada que se ajuste
// a tus necesidades
