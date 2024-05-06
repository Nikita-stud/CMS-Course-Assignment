export function fetchItems(items){
  const container = document.querySelector("#jackets__container");

  items.forEach(function(item){

    let discount = "";
    let textDecoration = ""

    if(item.regular_price > item.sale_price){
      discount = item.sale_price;
      textDecoration ="line-through";
    }


    container.innerHTML += `<div class="horizontal-jackets__container">
                              <div class="jackets-text__container">
                                <a href="details.html?id=${item.id}">
                                  <img src="${item.images[0].src}" class="jacket-img" alt="${item.images[0].alt}">
                                  <h3 class="jackets-title">${item.name}</h3>
                                  <p class="jackets-text">${item.description}</p>
                                  <p class="jackets-price"><span style="text-decoration:${textDecoration}">${item.regular_price} kr.</span> <span class ="jackets-discount-price">${discount}</span></p>
                                </a>
                                </div>
                                <button href="bag.html" id="add" class="cta-add" data-id=${item.id}>Add to bag</button>
                            </div>`;
  });
}