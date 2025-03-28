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
            <div class="card h-100 shadow scale-on-hover cursor-pointer rounded-5" role="button">
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
                    <a href="form.html?title=${encodeURIComponent(products[i].title)}&price=${products[i].price.toFixed(2)}&image=${encodeURIComponent(products[i].image)}" class="btn btn-custom">Buy</a> 
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

function populateProductPopUp(index){
  document.getElementById('modal-title').textContent = products[index].title;
  document.getElementById('modal-price').textContent = `€${products[index].price.toFixed(2)}`;
  document.getElementById('modal-desc').textContent = products[index].description;
  document.getElementById('modal-img').src = products[index].image;

  const buyBtn = document.querySelector('#productModal .btn-custom');
  buyBtn.href = `form.html?title=${encodeURIComponent(products[index].title)}&price=${products[index].price.toFixed(2)}&image=${encodeURIComponent(products[index].image)}`;
}

function getQueryParams() {
  const params = new URLSearchParams(window.location.search);
  return {
    title: params.get('title') || 'Unknown Product',
    price: params.get('price') || '0.00',
    image: params.get('image') || 'img/nav/bioglow.png'
  };
}

document.addEventListener("DOMContentLoaded", function() {
  const product = getQueryParams();
  document.getElementById('product-name').textContent = product.title;
  document.getElementById('product-price').textContent = `€${product.price}`;
  document.getElementById('product-img').src = product.image;
});
