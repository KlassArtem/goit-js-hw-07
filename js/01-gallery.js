import { galleryItems } from "./gallery-items.js";

// // Change code below this line

const refGallery = document.querySelector(".gallery");

refGallery.addEventListener("click", handleTargetImg);

function handleTargetImg(event) {
  event.preventDefault();

  if (event.target.nodeName !== "IMG") {
    return;
  }

  const originalUrl = getUrlBigSizeImg(event);

  openModalOrigSizeImg(originalUrl);
}

function getUrlBigSizeImg(event) {
  return event.target.dataset.source;
}

function openModalOrigSizeImg(originalUrl) {
  document.addEventListener(
    "keydown",
    handleKeDownPressByCloseModalOriginalSizeImg
  );

  instance = basicLightbox.create(
    `
    <img src="${originalUrl}">
`
  );

  instance.show();
}

function handleKeDownPressByCloseModalOriginalSizeImg(event) {
  if (event.code === "Escape") {
    document.removeEventListener(
      "keydown",
      handleKeDownPressByCloseModalOriginalSizeImg
    );
    instance.close();
  }
}

function createGallElemMarkUp(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
        <div class="gallery__item">
    <a class="gallery__link" href="large-image.jpg">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>
      `;
    })
    .join("");
}

const galleryMarkUp = createGallElemMarkUp(galleryItems);
refGallery.innerHTML = galleryMarkUp;

let instance = "";


