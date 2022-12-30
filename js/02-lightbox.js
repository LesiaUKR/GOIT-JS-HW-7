import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryBox = document.querySelector('.gallery')
console.log(galleryBox);
const galleryMarkup = createGalleryMarkup(galleryItems);
// console.log(galleryMarkup);

console.log(SimpleLightbox)

function createGalleryMarkup(galleryItems) {
    return galleryItems
        .map(({ preview, original, description }) => {
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
        })
        .join('');

}

galleryBox.insertAdjacentHTML("afterbegin", galleryMarkup);

galleryBox.addEventListener('click', onGalleryBoxClick);

function onGalleryBoxClick(event) {
    event.preventDefault();

    if (!event.target.classList.contains('gallery__image')) {
        return
    }
    console.log(event.target);

    let lightbox = new SimpleLightbox('.gallery a',
       {captionsData:'alt', captionDelay: '250'});


 document.addEventListener('keydown', (e) => {
   if (e.code === "Escape") {
	  instance.close(); 
   }
})
    
}



