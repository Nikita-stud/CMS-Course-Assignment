// import { filterItems } from "../helper/filterItems";

export function fetchItemsList(items){
  const container = document.querySelector(".spes-jacket__rows");

  // filterItems(items)


  items.forEach(function(item){

    let discount = "";
    let textDecoration = ""

    if(item.prices.regular_price/100 > item.prices.sale_price/100){
      discount = item.prices.sale_price/100 + " kr";
      textDecoration ="line-through";
    }

    container.innerHTML += `<div id="horizontal-jackets__container" class="horizontal-jackets__container-list-page">
                            <div id="jackets-text__container" class="jackets-text__container list-page">
                              <a href="details.html?id=${item.id}">
                                <img src="${item.images[0].src}" class="jacket-img" alt="${item.images[0].alt}">
                                <h3 id="jackets-title" class="jackets-title">${item.name}</h3>
                                <p id="jackets-text" class="jackets-text">${item.description}</p>
                                <p class="jackets-price"><span style="text-decoration:${textDecoration}">${item.prices.regular_price/100} kr.</span> <span class ="jackets-discount-price">${discount}</span></p>
                              </a>
                              </div>
                              <button href="bag.html" id="add" class="cta-add" data-id=${item.id}>Add to bag</button>
                          </div>`;
  
  });
}

// ---- Was supposed to be the easier code to import for all the other jackets besides from the index.html page


// export function fetchJacketList(jackets){
//   const container = document.querySelector(".spes-jacket__rows");

//   jackets.forEach(function(jacket){

//   let discount = "";
//   if(jacket.price > jacket.discountedPrice){
//     discount = jacket.discountedPrice;
//   }

//   container.innerHTML += `<div id="horizontal-jackets__container" class="horizontal-jackets__container">
//                             <div id="jackets-text__container" class="jackets-text__container">
//                               <a href="details.html?id=${jacket.id}">
//                                 <img src="${jacket.image}" class="jacket-img" alt="${jacket.title}">
//                                 <h3 id="jackets-title" class="jackets-title">${jacket.title}</h3>
//                                 <p id="jackets-text" class="jackets-text">${jacket.description}</p>
//                                 <p class="jackets-price">${jacket.price} kr. <span class ="jackets-discount-price">${discount}</span></p>
//                               </a>
//                               </div>
//                               <button href="bag.html" id="add" class="cta-add" data-id=${jacket.id}>Add to bag</button>
//                           </div>`;
    
//   });
// }