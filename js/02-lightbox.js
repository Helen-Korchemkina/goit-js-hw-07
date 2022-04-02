import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryItemsEls = document.querySelector(".gallery");

const makeGalleryItems = createGalleryItems(galleryItems);
galleryItemsEls.insertAdjacentHTML("beforeend", makeGalleryItems);

function createGalleryItems(gallery) {
  return gallery
    .map(({ preview, original, description }) => {
      return `
  <a class="gallery__item" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      alt="${description}"
    />
  </a>
        `;
    })
    .join("");
}

galleryItemsEls.addEventListener("click", onOpenModal);

function onOpenModal(event) {
  event.preventDefault();

  if (event.target.nodeName !== "IMG") {
    return;
  }
}

let gallery = new SimpleLightbox(".gallery a", {
  captions: true,
  captionPosition: "bottom",
  captionsData: "alt",
  captionDelay: 250,
});
