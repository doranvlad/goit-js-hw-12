import{a as m,S as L,i as d}from"./assets/vendor-64b55ca9.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function a(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(t){if(t.ep)return;t.ep=!0;const r=a(t);fetch(t.href,r)}})();m.defaults.baseURL="https://pixabay.com/api";const i={key:"11070675-9db3ad99120a3eae94c3d42ec",q:"",image_type:"photo",orientation:"horizontal",safesearch:"true",pretty:"true",page:1,per_page:15};async function g(e){const s=document.querySelector(".loader");if(s.classList.remove("is-hidden"),e.q===""){s.classList.add("is-hidden");return}const{data:a}=await m.get(`?${new URLSearchParams(e)}`);return s.classList.add("is-hidden"),a}function h(e,s){const a=e.hits.map(o=>`<li class="gallery-item">
                            <a class="gallery-link" href=${o.largeImageURL}>
                                <img
                                class="gallery-image"
                                src="${o.webformatURL}"
                                alt="${o.tags}"
                                />
                            </a>
                            <div class="desrp">
                                <ul class="desrp-list">
                                    <li class="desrp-item">
                                        <p class="desrp-actions">Likes</p>
                                        <p class="desrp-actions-total">${o.likes}</p>
                                    </li>
                                    <li class="desrp-item">
                                        <p class="desrp-actions">Views</p>
                                        <p class="desrp-actions-total">${o.views}</p>
                                    </li>
                                    <li class="desrp-item">
                                        <p class="desrp-actions">Comments</p>
                                        <p class="desrp-actions-total">${o.comments}</p>
                                    </li>
                                    <li class="desrp-item">
                                        <p class="desrp-actions">Downloads</p>
                                        <p class="desrp-actions-total">${o.downloads}</p>
                                    </li>
                                </ul>
                            </div>
                        </li>`).join("");s.insertAdjacentHTML("beforeend",a)}const y=new L(".gallery a",{captionsData:"alt",captionDelay:"250"}),p=document.querySelector('input[name="search"]'),c=document.querySelector(".gallery"),b=document.querySelector(".form"),f=document.querySelector(".js-load-more-btn");p.addEventListener("input",v);b.addEventListener("submit",w);f.addEventListener("click",q);let u;function v(e){i.q=e.target.value}async function w(e){if(e.preventDefault(),i.page=1,c.innerHTML="",p.value===""){n();return}i.page===1&&n();try{const s=await g(i);s.hits.length===0?d.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}):(n(),h(s,c),u=Math.ceil(s.totalHits/i.per_page),y.refresh(),p.value="",u!==i.page&&S())}catch{d.error({message:"Error",position:"topRight"})}}function S(){f.classList.remove("is-hidden")}function n(){f.classList.add("is-hidden")}async function q(){i.page+=1,u===i.page&&(n(),d.info({message:"We're sorry, but you've reached the end of search results.",position:"bottomRight"}));const e=await g(i);h(e,c),y.refresh(),R()}function P(e){window.scrollBy({top:e,behavior:"smooth"})}function R(){const e=c.getBoundingClientRect().height;P(e*2)}
//# sourceMappingURL=commonHelpers.js.map
