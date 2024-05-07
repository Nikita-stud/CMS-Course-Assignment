export function fetchItem(item){
  const container = document.querySelector(".details__container");

  const div = document.createElement("div");
  div.classList.add("details__text-container")

  const img = document.createElement("img");
  img.classList.add("details-img");
  img.src =`${item.images[0].src}`;
  img.alt = `${item.images.alt}`;

  const h2 = document.createElement("h2");
  h2.classList.add("details-header");
  h2.textContent =`${item.name}`;

  const priceDiv =document.createElement("div")
  priceDiv.classList.add("details-price__container")

  const detailsPrg = document.createElement("p");
  detailsPrg.classList.add("details-description");
  detailsPrg.innerHTML =`${item.description}`;
  detailsPrg.style.marginBottom ="20px"

  const price = document.createElement("p");
  price.classList.add("details-price");
  price.textContent = ``;
  if(item.prices.regular_price >= item.prices.sale_price){
    price.textContent = `kr ${item.prices.regular_price/100},-`;
  }

  const discount = document.createElement("p");
  discount.classList.add("details-discount");
  discount.textContent =``;
  if(item.prices.regular_price > item.prices.sale_price){
    discount.textContent =`kr ${item.prices.sale_price/100},-`;
    discount.style.color ="rgb(228, 18, 18)"
    price.style.textDecoration= "line-through";
    price.style.opacity = "0.4"
  }

  const line = document.createElement("hr")
  line.classList.add("detail-line")

  const buttonsDiv =document.createElement("div")
  buttonsDiv.classList.add("details-buttons__container")

  const addButton = document.createElement("button");
  addButton.location = "bag.html";
  addButton.classList.add("cta-add-details");
  addButton.id = "add";
  addButton.innerHTML =`<i class="fa-solid fa-bag-shopping" id="bag__icon-details"></i>`;
  //Here the setAttribute does not work 
  addButton.setAttribute("add-id", item.id);

  const buyButton = document.createElement("button");
  buyButton.onclick = () => window.location = "checkout.html";
  buyButton.classList.add("cta-buy-details");
  buyButton.id = "buy";
  buyButton.textContent ="Buy now";

  
  container.append(div);
  container.append(img)
  div.append(h2);
  div.append(priceDiv)
  priceDiv.append(price)
  priceDiv.append(discount)
  div.append(detailsPrg);
  div.append(line)
  div.append(buttonsDiv)
  buttonsDiv.append(addButton);
  buttonsDiv.append(buyButton);
}


// export function fetchItem(items){
//   const containerDetails = document.querySelector(".details__container");

//   containerDetails.innerHTML = "";

//   const detailHTML = items.map(function(item){
//     return createDetails(item);
//   });

//   containerDetails.append(...detailHTML);
// }



//  function createDetails(item){

//   const container = document.querySelector(".details__container");

//   const src = item.images?.[0]?.thumbnail || `./images/no-image.jpeg`;
//   const alt = item.images?.[0]?.alt || "No image was found";

//   const image = document.createElement("img");
//   image.setAttribute("src", src);
//   image.setAttribute("alt", alt);

//   const h2 = document.createElement("h2");
//   h2.classList.add("details-header");
//   h2.textContent =`${item.name}`;

//   const priceDiv =document.createElement("div")
//   priceDiv.classList.add("details-price__container")

//   const detailsPrg = document.createElement("p");
//   detailsPrg.classList.add("details-description");
//   detailsPrg.textContent =`${item.description}`;

//   const price = document.createElement("p");
//   price.classList.add("details-price");
//   price.textContent = ``;
//   if(item.prices.regular_price >= item.prices.sale_price){
//     price.textContent = `kr ${item.prices.regular_price},-`;
//   }

//   const discount = document.createElement("p");
//   discount.classList.add("details-discount");
//   discount.textContent =``;
//   if(item.prices.regular_price > item.prices.sale_price){
//     discount.textContent =`kr ${item.prices.sale_price},-`;
//     price.style.textDecoration= "line-through";
//     price.style.opacity = "0.4"
//   }

//   const line = document.createElement("hr")
//   line.classList.add("detail-line")

//   const buttonsDiv =document.createElement("div")
//   buttonsDiv.classList.add("details-buttons__container")

//   const addButton = document.createElement("button");
//   addButton.location = "bag.html";
//   addButton.classList.add("cta-add-details");
//   addButton.id = "add";
//   addButton.innerHTML =`<i class="fa-solid fa-bag-shopping" id="bag__icon-details"></i>`;
//   //Here the setAttribute does not work 
//   addButton.setAttribute("add-id", item.id);

//   const buyButton = document.createElement("button");
//   buyButton.onclick = () => window.location = "checkout.html";
//   buyButton.classList.add("cta-buy-details");
//   buyButton.id = "buy";
//   buyButton.textContent ="Buy now";

//   return image;

//   container.append(div);
//   container.append(img)
//   div.append(h2);
//   div.append(priceDiv)
//   priceDiv.append(price)
//   priceDiv.append(discount)
//   div.append(detailsPrg);
//   div.append(line)
//   div.append(buttonsDiv)
//   buttonsDiv.append(addButton);
//   buttonsDiv.append(buyButton);
// }