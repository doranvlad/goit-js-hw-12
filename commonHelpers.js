import{S as p,i as l}from"./assets/vendor-5b791d57.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))r(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function o(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(t){if(t.ep)return;t.ep=!0;const s=o(t);fetch(t.href,s)}})();const u={key:"11070675-9db3ad99120a3eae94c3d42ec",q:"",image_type:"photo",orientation:"horizontal",safesearch:"true",pretty:"true"};function d(i){const e=document.querySelector(".loader");if(e.style.display="block",i.q===""){e.style.display="none";return}return fetch(`https://pixabay.com/api/?${new URLSearchParams(i)}`).then(o=>{if(e.style.display="none",!o.ok)throw new Error(o.status);return o.json()})}function m(i,e){const o=i.hits.map(r=>`<li class="gallery-item">
                            <a class="gallery-link" href=${r.largeImageURL}>
                                <img
                                class="gallery-image"
                                src="${r.webformatURL}"
                                alt="${r.tags}"
                                />
                            </a>
                            <div class="desrp">
                                <ul class="desrp-list">
                                    <li class="desrp-item">
                                        <p class="desrp-actions">Likes</p>
                                        <p class="desrp-actions-total">${r.likes}</p>
                                    </li>
                                    <li class="desrp-item">
                                        <p class="desrp-actions">Views</p>
                                        <p class="desrp-actions-total">${r.views}</p>
                                    </li>
                                    <li class="desrp-item">
                                        <p class="desrp-actions">Comments</p>
                                        <p class="desrp-actions-total">${r.comments}</p>
                                    </li>
                                    <li class="desrp-item">
                                        <p class="desrp-actions">Downloads</p>
                                        <p class="desrp-actions-total">${r.downloads}</p>
                                    </li>
                                </ul>
                            </div>
                        </li>`).join("");e.insertAdjacentHTML("beforeend",o)}const f=new p(".gallery a",{captionsData:"alt",captionDelay:"250"}),n=document.querySelector('input[name="search"]'),c=document.querySelector(".gallery"),y=document.querySelector(".form");n.addEventListener("input",g);function g(i){u.q=i.target.value}y.addEventListener("submit",h);function h(i){i.preventDefault(),c.innerHTML="",n.value!==""&&d(u).then(e=>{e.hits.length===0?l.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}):(m(e,c),f.refresh(),n.value="")}).catch(e=>{console.log(e),e.message==="400"&&l.error({message:"Not authorization",position:"topRight"})})}
//# sourceMappingURL=commonHelpers.js.map
