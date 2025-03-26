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

/* Den här metoden ersätter main(). Då skulle man inte behöva ha några kort i index. Funkar inte just nu
async function populateProducts() {
  await fetchProducts();
  let output = `<div class="row">`;
  for (let i in products){
    if (i%4==0)
      output += `</div><div class="row">`;

    output += `
        <!-- cards: -->
        <div class="col-sm-6 col-lg-3 my-3">
            <div class="card shadow h-100 shadow scale-on-hover cursor-pointer" role="button"">
                <div class="card-body data-bs-toggle="modal" data-bs-target="#productModal" onclick="populateProductPopUp(${i})">
                    <!-- pics -->
                    <div class="productImage">
                        <img src="${products[i].image}" style="max-height: 15rem"/>
                    </div>
                    <!-- info -->
                    <div class="product-text-container">
                        <h5 class="product-title mb-1">${products[i].title}</h5>
                        <p class="card-text product-desc mb-0">${products[i].description}</p>
                    </div>
                </div>
                <!-- bottom section -->
                <div class="price-buy-container">
                    <span class="price-text">${products[i].price}</span>
                    <div class="btn btn-custom">buy</div>
                </div>
            </div>
        </div>`
  }
  output += `</div>`;
  document.getElementById('prod-container').innerHTML = output;
}
populateProducts();
*/

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