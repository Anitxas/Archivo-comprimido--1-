# TECHNICAL QUESTIONS

1. **How long did you spend on the coding test? What would you add to your solution if you had more
time? If you didn't spend much time on the coding test then use this as an opportunity to explain what
you would add.**

El codigo me ha llevado unas 2 horas. Si tuviera mas tiempo mejoraría el diseño de la aplicación, para que fuera más agradable a la vista para el usuario, colores vivos, una letra mas grande, centrar la lista en la pantalla...

2. **What was the most useful feature added to the latest version of your chosen language? Please include
a snippet of code that shows how you've used it.**

En la versión de ECMAScript 2022, una de las mejoras que más encaja en esta tarea a mi parecer es la del Top-level await. Consiste en que ya no es necesario que el await esté dentro de una función asíncrona.  

```javascript
const products = await getProductList();
displayProductList(products);
```

Este sería el código con el nuevo await. El problema es que el navegador no soporta la nueva versión de JavaScript, por lo que he tenido que hacerlo de esta otra forma.

```javascript
async function display() {

  getProductList().then(function (products) {
    displayProductList(products);
  });
}
```

He quitado el await por hacerlo de forma distinta, pero dentro de la función asíncrona el await habría funcionado.


3. **How would you track down a performance issue in production? Have you ever had to do this?**

Para encontrar problemas haría uso de los tests previamente programados, me informaría sobre los errores más usuales y mejoraría los tests para que en caso de error devolvieran la causa de la forma más clara posible seguida de los datos y asegurandose de que los tests engloban todos los errores posibles. Nunca he tenido que hacerlo de forma tan "real", pero sí que lo he hecho para ejercicios con un objetivo puramente educativo.

4. **How would you improve the Lantek API that you just used?**

Una mejora que se me ocurre es autorizar el acceso a base de tokens. Los tokens son una mejor opción que la actual porque la información de autenticación se guarda en el servidor en lugar de en la parte del usuario. Dejo un código de ejemplo sobre como sería la petición si la autorización se hiciera con token.


```javascript
// Función para realizar la solicitud HTTP y obtener la lista de productos
const token = 'token de acceso';
function getProductList() {
  return fetch(
    "https://app-academy-neu-codechallenge.azurewebsites.net/api/2d/cut",
    {
      headers: {
        Authorization: `Bearer ${token}`
      },
    }
  ).then((response) => response.json());
}

