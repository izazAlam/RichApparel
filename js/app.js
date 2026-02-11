
let productsData = [];
let currentPage = 1;
const productsPerPage = 9;
const centerContainer = document.querySelector(".center-container");

fetch("products.json")
  .then(res => res.json())
  .then(data => {
    productsData = data.products;
    renderProducts();
    renderPagination();
  });

function renderProducts() {
  const container = document.querySelector(".products-container");
  container.innerHTML = "";

  const start = (currentPage - 1) * productsPerPage;
  const end = start + productsPerPage;
  const productsToShow = productsData.slice(start, end);

  productsToShow.forEach(product => {
    const card = document.createElement("div");
    card.className = "product-card";

    const tagHTML = product.tag ? `<div class="tag">${product.tag}</div>` : "";

    card.innerHTML = `
      <div class="card-top">
        ${tagHTML}
        <img src="img/Vector.png" class="heart-icon" alt="">
      </div>
      <img src="${product.image}" alt="${product.title}">
      <div class="product-info">
        <div class="top">
          <div class="product-title">${product.title}</div>
          <div class="product-price">${product.currency}${product.price}</div>
        </div>
        <div class="product-colors">
          ${product.colorsAvailable ? "More Colours Available" : ""}
        </div>
      </div>
    `;

    container.appendChild(card);
  });
}
function scrollToCenterContainer() {
    const topPos = centerContainer.getBoundingClientRect().top + window.scrollY - 50; // 50px offset
    window.scrollTo({
        top: topPos,
        behavior: "smooth"
    });
}
function renderPagination() {
  const totalPages = Math.ceil(productsData.length / productsPerPage);
  const pagination = document.querySelector(".pagination");


  const oldButtons = pagination.querySelectorAll("button");
  oldButtons.forEach(btn => btn.remove());

  const rightArrow = pagination.querySelector(".pagination-right");

  for (let i = 1; i <= totalPages; i++) {
    const button = document.createElement("button");
    button.type = "button";
    button.textContent = i;
    button.className = i === currentPage ? "active" : "";
    button.addEventListener("click", (e) => {
       e.preventDefault();
      currentPage = i;
      renderProducts();
      renderPagination();
      scrollToCenterContainer();
    });
    pagination.insertBefore(button, rightArrow);
  }
}

document.querySelector(".pagination-left").addEventListener("click", () => {
  if (currentPage > 1) {
    currentPage--;
    renderProducts();
    renderPagination();
    scrollToCenterContainer()
  }
});

document.querySelector(".pagination-right").addEventListener("click", () => {
  const totalPages = Math.ceil(productsData.length / productsPerPage);
  if (currentPage < totalPages) {
    currentPage++;
    renderProducts();
    renderPagination();
    scrollToCenterContainer()
  }
});