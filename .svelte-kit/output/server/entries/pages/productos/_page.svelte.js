import { c as create_ssr_component, v as validate_component } from "../../../chunks/ssr.js";
const Three_ProductsGalleryB = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<scrpt data-svelte-h="svelte-ufzkh0"></scrpt> <div role="navigation" aria-label="List" class="w-pagination-wrapper pagination" data-svelte-h="svelte-2wgmhp"><div class="pagination-item"></div> <div class="pagination-item"><div aria-label="Page 1 of 2" role="heading" class="w-page-count page-count">1 / 2</div></div> <div class="pagination-item"><a href="?97851649_page=2" aria-label="Next Page" class="w-pagination-next button-white"><div class="w-inline-block">Next</div> <svg class="w-pagination-next-icon" height="12px" width="12px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 12" transform="translate(0, 1)"><path fill="none" stroke="currentColor" fill-rule="evenodd" d="M4 2l4 4-4 4"></path></svg></a><link rel="prerender" href="?97851649_page=2"></div></div>`;
});
const Three_ProductsGalleryI = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div role="listitem" class="w-dyn-item" data-svelte-h="svelte-ty38wl"><a data-w-id="8a24e5cf-303d-1165-9839-50529785164c" href="/product/black-geo-velvet" class="product-item w-inline-block"><img alt="" loading="eager" data-wf-sku-bindings="%5B%7B%22from%22%3A%22f_main_image_4dr%22%2C%22to%22%3A%22src%22%7D%5D" src="https://assets-global.website-files.com/657d2a77e0747baa9b20584d/657fc6e87546e5980959ccd9_product-01.jpg" class="product-image"><img alt="" loading="eager" data-w-id="8a24e5cf-303d-1165-9839-50529785164e" src="https://assets-global.website-files.com/657d2a77e0747baa9b20584d/657fc6fc4b55058b0ace7b80_product-01-hover.jpg" sizes="(max-width: 991px) 100vw, (max-width: 1279px) 46vw, 30vw" srcset="https://assets-global.website-files.com/657d2a77e0747baa9b20584d/657fc6fc4b55058b0ace7b80_product-01-hover-p-500.jpg 500w, https://assets-global.website-files.com/657d2a77e0747baa9b20584d/657fc6fc4b55058b0ace7b80_product-01-hover.jpg 770w" class="product-hover-image" style="opacity: 0; transform: translate3d(0px, 0px, 0px) scale3d(0.9, 0.9, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg); transform-style: preserve-3d;"> <div data-w-id="8a24e5cf-303d-1165-9839-50529785164f" class="product-hover-content" style="opacity: 0; transform: translate3d(0px, 50px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg); transform-style: preserve-3d;"><h3 class="product-title">Black geo velvet</h3> <div class="product-price-wrap"><h4 data-wf-sku-bindings="%5B%7B%22from%22%3A%22f_price_%22%2C%22to%22%3A%22innerHTML%22%7D%5D" class="product-price">$ 23.00 USD</h4> <h5 data-wf-sku-bindings="%5B%7B%22from%22%3A%22f_compare_at_price_7dr10dr%22%2C%22to%22%3A%22innerHTML%22%7D%5D" class="product-compare-price">$ 46.00 USD</h5></div></div></a></div>`;
});
const One_ProductsGallery = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<section data-w-id="8a24e5cf-303d-1165-9839-505297851641" style="opacity: 1; transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg); transform-style: preserve-3d;" class="product-section section-spacing-sm"><div class="w-layout-blockcontainer container w-container"><div class="w-dyn-list"><div role="list" class="product-list w-dyn-items">${validate_component(Three_ProductsGalleryI, "Three_ProductsGalleryI").$$render($$result, {}, {}, {})}</div> ${validate_component(Three_ProductsGalleryB, "Three_ProductsGalleryB").$$render($$result, {}, {}, {})}</div></div></section>`;
});
const Three_CategoriesB2 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<a href="/shop-all" aria-current="page" class="category-link w--current" data-svelte-h="svelte-j36tc7">All</a>`;
});
const Three_CategoriesB = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div role="listitem" class="w-dyn-item" data-svelte-h="svelte-131uikd"><a href="/category/heels" class="category-link">Heels</a></div>`;
});
const Two_CategoriesH = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<h2 class="hero-inner-title no-margin" data-svelte-h="svelte-k23amy">Shop all</h2>`;
});
const One_Categories = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<section class="hero-inner"><div class="w-layout-blockcontainer container w-container"><div class="hero-inner-content">${validate_component(Two_CategoriesH, "Two_CategoriesH").$$render($$result, {}, {}, {})} <div class="category-link-list">${validate_component(Three_CategoriesB2, "Three_CategoriesB2").$$render($$result, {}, {}, {})} <div class="w-dyn-list"><div role="list" class="category-link-list-inner w-dyn-items">${validate_component(Three_CategoriesB, "Three_CategoriesB").$$render($$result, {}, {}, {})}</div></div></div></div></div></section>`;
});
const Page_products = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(One_Categories, "One_Categories").$$render($$result, {}, {}, {})} ${validate_component(One_ProductsGallery, "One_ProductsGallery").$$render($$result, {}, {}, {})}`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Page_products, "PageProducts").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
