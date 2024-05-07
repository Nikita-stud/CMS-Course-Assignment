import { url } from "./constants.js";
import { handleClick } from "./helper/handleClick.js";
// import { catchAndDisplay } from "./ui/catchAndDisplay.js";
import { fetchItemsList } from "./api/fetchItemsList.js";
// import { filterItems } from "./helper/filterItems.js";

// const container = document.querySelector("#jackets__container");
const container = document.querySelector(".spes-jacket__rows");

async function displayItemsList(){
  try{
    const fetched = await fetch(url);
    const results = await fetched.json();

    container.innerHTML= "";

    // filterItems(results)
    fetchItemsList(results)

    const ctaAdd = document.querySelectorAll("#add");

    ctaAdd.forEach(function(button){
      button.addEventListener("click", handleClick);
    });
  }catch(error){
    container.innerHTML = `<div class="error">There has been an error <hr>${error}</div>`;
  }
}
displayItemsList()