// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from "../../node_modules/simplelightbox/";
import "simplelightbox/dist/simple-lightbox.min.css";
const gallery = document.querySelector('.gallery');
gallery.addEventListener('click', onClick);


function createGallery(){
    
    let markup = "";
    galleryItems.forEach(elem => {
        markup += `<li class="gallery__item"><a class="gallery__link" href="${elem.original}"><img class = "gallery__image" src="${elem.preview}" data-source="${elem.original}" alt="${elem.description}"></a></li>`}
    )
    gallery.insertAdjacentHTML('afterbegin', markup)
    // console.log(markup)
}
createGallery()

function onClick(evt){
    evt.preventDefault()

    if (evt.target.classList.contains('gallery__item')) {
        return
    }
    
    const originalImage = evt.target.dataset.source
    
    const instance = basicLightbox.create(`<img src = ${originalImage}>`)

    instance.show()
    
    document.addEventListener('keydown', closeModal)

function closeModal(evt){
    console.log(evt)
    
        instance.close(() => document.removeEventListener('keydown', closeModal))
     
    }
    

}
console.log(galleryItems);
