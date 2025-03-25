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
  for (let i = 0; i < products.length; i++){
    document.getElementById(`bild${i}`).src = products[i].image;
    document.getElementById(`title${i}`).innerHTML = products[i].title;
    document.getElementById(`desc${i}`).innerHTML = products[i].description; 
  }

}

main();
