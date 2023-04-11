// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const gallery = document.querySelector('.gallery');



function createGallery(){
    
    let markup = "";
    galleryItems.forEach(elem => {
        markup += `<li class="gallery__item"><a class="gallery__link" href="${elem.original}"><img class="gallery__image" src="${elem.preview}" alt="${elem.description}"></a></li>`}
    )
    gallery.insertAdjacentHTML('afterbegin', markup)
   
}
createGallery()


    const lightbox = new SimpleLightbox('.gallery a', { 
        captionsData: 'alt', 
        captionDelay: 250,
    });
