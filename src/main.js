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
const loadMoreBtn = document.querySelector(".js-load-more-btn");



input.addEventListener('input', inputValueFunc);
form.addEventListener("submit", formSubmit);
loadMoreBtn.addEventListener('click', onBtnClick);

let lastPage;

function inputValueFunc(event) {
    pixabay.searchParams.q = event.target.value;
}

async function formSubmit(event) {
    event.preventDefault();

    pixabay.searchParams.page = 1;

    photosList.innerHTML = "";
    if (input.value === "") {
        hideLoadMoreBtn()
        return
    }

    if (pixabay.searchParams.page === 1) {
        hideLoadMoreBtn()
    }

    try {
        const photos = await pixabay.fetchPhoto(pixabay.searchParams)
            if (photos.hits.length === 0) {
                iziToast.error({
                    message: 'Sorry, there are no images matching your search query. Please try again!',
                    position: 'topRight',
                });
            }
            else {
                hideLoadMoreBtn()
                render.rendrePhoto(photos, photosList)
                lastPage = Math.ceil(photos.totalHits / pixabay.searchParams.per_page)
                lightbox.refresh()
                input.value = ''
                if (lastPage !== pixabay.searchParams.page) {
                    showLoadMoreBtn()
                }
            }
    } catch (error) {
                iziToast.error({
                    message: "Error",
                    position: 'topRight',
                });
    }
}

function showLoadMoreBtn() {
  loadMoreBtn.classList.remove('is-hidden')
}

function hideLoadMoreBtn() {
  loadMoreBtn.classList.add('is-hidden')
}

async function onBtnClick() {
    pixabay.searchParams.page += 1;

    if (lastPage === pixabay.searchParams.page) {
        hideLoadMoreBtn()
        iziToast.info({
                    message: "We're sorry, but you've reached the end of search results.",
                    position: 'bottomRight',
                });
    }
    

    const photos = await pixabay.fetchPhoto(pixabay.searchParams)
    render.rendrePhoto(photos, photosList)
    scroll();
}

function smoothScroll(height) {
  window.scrollBy({
    top: height,
    behavior: 'smooth'
  });
}

function scroll() {
  const cardHeight = photosList.getBoundingClientRect().height;
  smoothScroll(cardHeight * 2);
}