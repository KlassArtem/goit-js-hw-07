import { galleryItems } from "./gallery-items.js";

// // Change code below this line

const refGallery = document.querySelector(".gallery");

function createGallaryElementMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
    <li>
    <a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
    </a>
    </li>
    `;
    })
    .join("");
}

const galleryMarkUp = createGallaryElementMarkup(galleryItems);

refGallery.innerHTML = galleryMarkUp;

new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 300,
});

