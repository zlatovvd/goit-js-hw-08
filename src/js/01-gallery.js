// Add imports above this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items';
// Change code below this line
console.log(galleryItems);

let gallery = document.querySelector('.gallery');

let markup = galleryItems
  .map(
    item =>
      `<div class="gallery__item">
            <a class="gallery__link" href="${item.original}">
                <img class="gallery__image" 
                src="${item.preview}" 
                alt = "${item.description}" 
                data-source = "${item.original}"
               />
            </a>
        </div>`
  )
  .join('');

gallery.innerHTML = markup;

new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
  captionPosition: 'bottom',
});
