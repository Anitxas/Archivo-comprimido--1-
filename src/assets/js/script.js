// Función para realizar la solicitud HTTP y obtener la lista de productos
function getProductList() {
  return fetch(
    "https://app-academy-neu-codechallenge.azurewebsites.net/api/2d/cut",
    {
      headers: {
        Authorization: "Basic " + btoa("lantekacademy::cPIi<kyF(=5OXc"),
      },
    }
  ).then((response) => response.json());
}

// Función para mostrar la lista de productos en la página web
function displayProductList(products) {
  products.forEach((product) => {
    const listItem = document.createElement("li");
    listItem.textContent = `${product.name} - ${product.manufacturer}`;
    document.getElementById("product-list").appendChild(listItem);
  });
}

async function display() {

  getProductList().then(function (products) {
    displayProductList(products);
  });
}
