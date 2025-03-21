/*const data = fetch('https://fakestoreapi.com/products')
  .then(response => response.json())
  .then(data => console.log(data));

  
*/
let products = [];

async function fetchProducts() {
  try {
    const response = await fetch('https://fakestoreapi.com/products');
    products = await response.json();
    console.log("Products ready to use:", products);
  } catch (error) {
    console.error("Error fetching products:", error);
  }
}

async function main() {
  await fetchProducts();
  for (let i = 0; i < 12; i++){ //products.length
    document.getElementById(`bild${i}`).src = products[i].image;
    document.getElementById(`title${i}`).innerHTML = products[i].title;
    document.getElementById(`desc${i}`).innerHTML = products[i].description; 
  }

}

main();
