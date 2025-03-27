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

async function populateProducts() {
  await fetchProducts();
  let output = `<div class="row">`;
  for (let i in products){
    if (i % 4 == 0)
      output += `</div><div class="row">`;

    output += `
        <div class="col-sm-6 col-lg-3 my-3">
            <div class="card h-100 shadow scale-on-hover cursor-pointer rounded-5" role="button"">
                <div class="card-body" data-bs-toggle="modal" data-bs-target="#productModal" onclick="populateProductPopUp(${i})">
                    <!-- pics -->
                    <div class="position-relative" style="height: 15rem">
                        <img src="${products[i].image}" class="card-img-top position-absolute top-50 start-50 translate-middle img-fluid w-100 object-fit-contain" style="max-height: 15rem"/>
                    </div>
                    <!-- info -->
                    <div class="product-text-container">
                        <h5 class="product-title mb-1">${getFirstFiveWords(products[i].title)}</h5>
                        <p class="card-text product-desc mb-0">${products[i].description}</p>
                    </div>
                </div>
                <!-- bottom section -->
                <div class="price-buy-container">
                    <span class="price-text">€${products[i].price.toFixed(2)}</span>
                    <div class="btn btn-custom">Buy</div>
                </div>
            </div>
        </div>`
  }
  output += `</div>`;
  document.getElementById('prod-container').innerHTML = output;
}
populateProducts();

function getFirstFiveWords(text) {
  const words = text.split(" ");
  return words.length > 5 ? words.slice(0, 6).join(" ") + "..." : text;
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