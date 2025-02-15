function renderProducts() {
  const productsContainer = document.getElementById("products-list");

  // loop throught productsToRender and create a card for each product
  productsToRender.forEach((product) => {
    const productContainer = document.createElement("div");
    productContainer.className = "prod-card";

    productsContainer.appendChild(productContainer);

    const productImage = document.createElement("img");
    productImage.src = product.image;
    productImage.style.width = "100%";
    productImage.style.borderRadius = "10px";
    productContainer.appendChild(productImage);

    const productName = document.createElement("h3");
    productName.textContent = product.name;
    productName.style.textAlign = "center";
    productContainer.appendChild(productName);

    const productPrice = document.createElement("p");
    productPrice.textContent = `₪${product.price}`;
    productPrice.style.textAlign = "center";
    productContainer.appendChild(productPrice);

    const productTags = document.createElement("div");
    productTags.style.display = "flex";
    productTags.style.flexWrap = "wrap";
    productTags.style.gap = "5px";
    productTags.style.justifyContent = "center";
    productTags.style.alignItems = "center";

    const favorites = document.createElement("button");
    favorites.textContent = "Add to Favorites";
    favorites.style.justifyContent = "center";
    favorites.style.alignItems = "center";
    favorites.style.display = "flex";
    favorites.style.height = "20px";
    favorites.style.margin = "10px";
    favorites.style.color = "black";
    favorites.style.width = "200px";
    favorites.style.border = "1px solid black";
    favorites.style.backgroundColor = "green";
    favorites.style.fontSize = "16px";
    favorites.style.borderRadius = "5px";
    productContainer.appendChild(favorites);

    const Notfavorites = document.createElement("button");
    Notfavorites.textContent = "Add to Not Favorites";
    Notfavorites.style.justifyContent = "center";
    Notfavorites.style.alignItems = "center";
    Notfavorites.style.display = "flex";
    Notfavorites.style.height = "20px";
    Notfavorites.style.margin = "10px";
    Notfavorites.style.color = "black";
    Notfavorites.style.width = "200px";
    Notfavorites.style.border = "1px solid black";
    Notfavorites.style.backgroundColor = "red";
    Notfavorites.style.fontSize = "16px";
    Notfavorites.style.borderRadius = "5px";

    productContainer.appendChild(Notfavorites);

    productContainer.appendChild(productTags);
  });
}
renderProducts();
