let products = [];

async function fetchProducts() {
  try {
    const response = await fetch('https://fakestoreapi.com/products');
    products = await response.json();
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
                    <div class="position-relative mt-3 card-image-container">
                        <img src="${products[i].image}" class="card-img-top card-image-custom position-absolute top-50 start-50 translate-middle img-fluid w-75 object-fit-contain" alt="${products[i].title}">
                    </div>
                    <!-- info -->
                    <div class="mt-4 ms-2">
                        <h5 class="product-title">${getFirstFiveWords(products[i].title)}</h5>
                    </div>
                </div>
                <!-- bottom section -->
                <div class="d-flex justify-content-between align-items-center mx-4 mb-4">
                    <span class="fw-bold">€${products[i].price.toFixed(2)}</span>
                    <div class="btn btn-custom px-4 py-2 rounded-5">Buy</div>
                </div>
            </div>
        </div>`
  }
  output += `</div>`;
  document.getElementById('prod-container').innerHTML = output;
}

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