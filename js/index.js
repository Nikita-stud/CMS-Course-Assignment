import {url} from "./constants.js";
// import {catchAndDisplay} from "./ui/catchAndDisplay.js";
import { handleClick } from "./helper/handleClick.js";
import { fetchItems } from "./api/fetchItems.js";
import { fetchThumbnails } from "./api/fetchThumbnails.js";

const container = document.querySelector("#jackets__container");

async function getJackets(){
  try{
    const fetched = await fetch(url)
    const results = await fetched.json()
    const items = results;

    container.innerHTML = "";
    
    fetchItems(items);
    fetchThumbnails(items)
                            
    const ctaAdd = document.querySelectorAll("#add");
    ctaAdd.forEach(function(button){
      button.addEventListener("click", handleClick);
    });
  }catch(error){
    container.innerHTML = `<div class="error">There has been an error</div>`;
  }
}
getJackets()