const assert = require("assert");
const { JSDOM } = require("jsdom");
const path = require("path");

describe("first", () => {
  let jsdom;
  // before all tests
  before(async () => {
    // create a virtual DOM
    jsdom = await JSDOM.fromFile(path.join(__dirname, "../src/index.html"), {
      runScripts: "dangerously",
      resources: "usable",
    });

    // wait for the DOM to load
    return new Promise((resolve) => {
      jsdom.window.addEventListener("load", () => {
        jsdom.window.fetch = async () => {
          return {
            json: async () => {
              return [
                { name: "Product 1", manufacturer: "Manufacturer 1" },
                { name: "Product 2", manufacturer: "Manufacturer 2" },
              ];
            },
          };
        };
        resolve();
      });
    });
  });

  describe("getProductList", () => {
    it("should return a list of products", () => {
      return jsdom.window.getProductList().then((products) => {
        assert(Array.isArray(products));
        assert(products.length > 0);
        assert(products[0].hasOwnProperty("name"));
        assert(products[0].hasOwnProperty("manufacturer"));
      });
    });
  });

  describe("displayProductList", () => {
    it("should display a list of products on the page", () => {
      const products = [
        { name: "Product 1", manufacturer: "Manufacturer 1" },
        { name: "Product 2", manufacturer: "Manufacturer 2" },
      ];

      // Creamos un elemento de lista vacío donde se mostrarán los productos
      const list = jsdom.window.document.getElementById("product-list");

      // Llamamos a la función displayProductList para mostrar los productos en la lista
      jsdom.window.displayProductList(products);

      // Verificamos que se hayan mostrado los productos correctamente
      assert.equal(list.children.length, products.length);
      assert.equal(list.children[0].textContent, "Product 1 - Manufacturer 1");
      assert.equal(list.children[1].textContent, "Product 2 - Manufacturer 2");
    });
  });
});
