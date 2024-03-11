export function rendrePhoto(photos, list) {
    const markup = photos.hits
    .map((photo) => {
      return `<li class="gallery-item">
                            <a class="gallery-link" href=${photo.largeImageURL}>
                                <img
                                class="gallery-image"
                                src="${photo.webformatURL}"
                                alt="${photo.tags}"
                                />
                            </a>
                            <div class="desrp">
                                <ul class="desrp-list">
                                    <li class="desrp-item">
                                        <p class="desrp-actions">Likes</p>
                                        <p class="desrp-actions-total">${photo.likes}</p>
                                    </li>
                                    <li class="desrp-item">
                                        <p class="desrp-actions">Views</p>
                                        <p class="desrp-actions-total">${photo.views}</p>
                                    </li>
                                    <li class="desrp-item">
                                        <p class="desrp-actions">Comments</p>
                                        <p class="desrp-actions-total">${photo.comments}</p>
                                    </li>
                                    <li class="desrp-item">
                                        <p class="desrp-actions">Downloads</p>
                                        <p class="desrp-actions-total">${photo.downloads}</p>
                                    </li>
                                </ul>
                            </div>
                        </li>` ;
    })
    .join("");
    list.insertAdjacentHTML("beforeend", markup);
}