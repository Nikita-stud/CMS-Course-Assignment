export function fetchThumbnails(items){
  const containerThumbnails = document.querySelector(".thumbnails__container");
  containerThumbnails.innerHTML = "";

  const thumbnailHTML = items.map(function(item){
    return createThumbnails(item);
  });

  containerThumbnails.append(...thumbnailHTML);
}



 function createThumbnails(item){

  const src = item.images?.[0]?.thumbnail || `./images/no-image.jpeg`;
  const alt = item.images?.[0]?.alt || "No image was found";

  const image = document.createElement("img");
  image.setAttribute("src", src);
  image.setAttribute("alt", alt);
  image.onclick = function(){
    window.location.href= `details.html?id=${item.id}`;}

  return image;
}