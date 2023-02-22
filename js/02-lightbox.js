import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
const galleryConteiner = document.querySelector(".gallery");
const picturesMarkup = createPicturesCardsMarkup(galleryItems);

galleryConteiner.insertAdjacentHTML("beforeend", picturesMarkup);

function createPicturesCardsMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
		<a class="gallery__item" href="${original}">
			<img
				class="gallery__image"
				src="${preview}"
				alt="${description}"
			/>
		</a>`;
    })
    .join("")
}


const lightbox = new SimpleLightbox(".gallery a", {
  captionPosition: "bottom",
  captionDelay: "250",
  captionsData: "alt"
})