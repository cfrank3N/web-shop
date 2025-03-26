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


function popupFn() {
  document.getElementById(
      "overlay"
  ).style.display = "block";
  document.getElementById(
      "popupDialog"
  ).style.display = "block";
}
function closeFn() {
  document.getElementById(
      "overlay"
  ).style.display = "none";
  document.getElementById(
      "popupDialog"
  ).style.display = "none";
}

function scrollToBottom(){
  const scrollHeight = document.body.scrollHeight;

  window.scrollTo(0, scrollHeight);
}

function populateProductPopUp(productNumber){
  document.getElementById('modal-img').src = products[productNumber].image;
  document.getElementById('modal-title').innerHTML = products[productNumber].title;
  document.getElementById('modal-desc').innerHTML = products[productNumber].description; 
  document.getElementById('modal-price').innerHTML = `€${products[productNumber].price}`; 
}