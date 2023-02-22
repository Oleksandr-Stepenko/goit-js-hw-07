import { galleryItems } from "./gallery-items.js";
// Change code below this line
const galleryConteiner = document.querySelector(".gallery");
const picturesMarkup = createPicturesCardsMarkup(galleryItems);

galleryConteiner.insertAdjacentHTML("beforeend", picturesMarkup);

galleryConteiner.addEventListener("click", onGalleryConteinerClick);

function createPicturesCardsMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
		<a class="gallery__link" href="${original}">
			<img
				class="gallery__image"
				src="${preview}"
				data-source="${original}"
				alt="${description}"
			/>
		</a>
	</div>`;
    })
    .join("");
}

function onGalleryConteinerClick(e) {
  // console.log(e.target.nodeName);
  e.preventDefault();

  if (e.target.nodeName !== "IMG") {
    return;
  }
  const instance = basicLightbox.create(`
    <img src="${e.target.dataset.source}">
`);
  instance.show();
  document.addEventListener("keydown", (e) => {
    if (e.code === "Escape") {
      instance.close();
    }
  });
}
