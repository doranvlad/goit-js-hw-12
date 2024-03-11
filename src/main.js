import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import * as pixabay from "./js/pixabay-api.js"
import * as render from "./js/render-functions.js"

import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const lightbox = new SimpleLightbox('.gallery a', { captionsData: 'alt', captionDelay: '250' });

const input = document.querySelector('input[name="search"]')
const photosList = document.querySelector(".gallery");
const form = document.querySelector('.form')

input.addEventListener('input', inputValueFunc);

function inputValueFunc(event) {
    pixabay.searchParams.q = event.target.value;
}

form.addEventListener("submit", formSubmit);

function formSubmit(event) {
    event.preventDefault();

    photosList.innerHTML = "";
    if (input.value === "") {
        return
    }
    pixabay.fetchPhoto(pixabay.searchParams)
        .then((photos) => {
            if (photos.hits.length === 0) {
                iziToast.error({
                    message: 'Sorry, there are no images matching your search query. Please try again!',
                    position: 'topRight',
                });
            }
            else {
                render.rendrePhoto(photos, photosList)
                lightbox.refresh()
                input.value = ''
            }
        }
        )
        .catch((error) => {
            console.log(error);
            if (error.message === '400') {
                iziToast.error({
                    message: "Not authorization",
                    position: 'topRight',
                });
            }
        }
        )
}
