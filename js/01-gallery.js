import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryItemsEls = document.querySelector('.gallery');

const makeGalleryItems = createGalleryItems(galleryItems);
galleryItemsEls.insertAdjacentHTML('beforeend', makeGalleryItems);

function createGalleryItems(gallery) {
    return gallery.map(({ preview, original, description }) => {
        return `
<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>
        `;
    }).join('');
    }

galleryItemsEls.addEventListener('click', onOpenModal);

function onOpenModal(event) {
    event.preventDefault();
    if (event.target.nodeName !== 'IMG') {
        return;
    }
    
}


