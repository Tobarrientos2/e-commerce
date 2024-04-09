import { c as create_ssr_component, v as validate_component } from "../../../../chunks/ssr.js";
const Two_ProductReviewCA = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="product-review-item" data-svelte-h="svelte-1m7240o"><h4 class="review-author">Frances Guerrero</h4> <div class="review-title"><h5>A must-have product</h5> <img src="https://assets-global.website-files.com/657c4832d6cfd790b2ed16a3/657fea513c077ad0efc54e46_ratting-light.svg" loading="eager" alt="Rating star" class="product-rating"></div> <p class="review-content">But in certain circumstances and owing to the claims of duty or
        the obligations of business it will frequently occur that
        pleasures have to be repudiated and annoyances accepted. The
        wise man therefore always.</p></div>`;
});
const Two_ProductReviewHPB = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="section-title text-center" data-svelte-h="svelte-1x8rzp1"><h3>Reviews</h3> <p>Read Reviews from our satisfied customers. Share your experience
        with Us by clicking the below button!</p> <a href="mailto:hello@example.com" class="button-white w-button">Submit a review</a></div>`;
});
const One_ProductReview = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="submit-review-section section-spacing-sm-bottom"><div class="container-small w-container">${validate_component(Two_ProductReviewHPB, "Two_ProductReviewHPB").$$render($$result, {}, {}, {})} ${validate_component(Two_ProductReviewCA, "Two_ProductReviewCA").$$render($$result, {}, {}, {})}</div></div>`;
});
const Two_ProductBenefitsIP = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div id="w-node-c77d1039-805b-b675-b8a6-9332f2393c8d-9b2058a1" data-w-id="c77d1039-805b-b675-b8a6-9332f2393c8d" style="opacity: 1; transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg); transform-style: preserve-3d;" class="benefit-item-wrap" data-svelte-h="svelte-sv7ve2"><img src="https://assets-global.website-files.com/657c4832d6cfd790b2ed16a3/657d4963b25a87046b101627_benefit-01.svg" loading="eager" alt="Benefit icon 01" class="benefit-icon"> <h2 class="benefit-title">Free shipping</h2></div>`;
});
const One_ProductBenefits = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<section class="benefit-section section-spacing-sm"><div class="w-layout-blockcontainer container-medium w-container"><div class="w-layout-grid grid-benefit">${validate_component(Two_ProductBenefitsIP, "Two_ProductBenefitsIP").$$render($$result, {}, {}, {})}</div></div></section>`;
});
const Two_ProductP = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div data-w-tab="Tab 2" class="product-tab-pane w-tab-pane w--tab-active" id="w-tabs-0-data-w-pane-1" role="tabpanel" aria-labelledby="w-tabs-0-data-w-tab-1" data-svelte-h="svelte-f4y4bk"><div class="w-richtext"><p>Affronting imprudence does everything.
        Lasted dinner wanted indeed wished outlaw.
        Far advanced settling say finished raillery.
        Offered chiefly farther of my no colonel
        shyness. Such on help ye some door if in.
        Laughter proposal laughing any son law
        consider. Needed except up piqued an.</p> <p>Fulfilled direction use continually set him
        propriety continued. Saw met applauded
        favorite deficient engrossed concealed and
        her. Concluded boy perpetual old supposing.
        Farther related bed and passage comfort
        civilly. Dashwoods see frankness objection
        abilities. As hastened oh produced prospect
        formerly up am. Placing forming nay looking
        old married few has. Margaret disposed of
        add screened rendered six say his striking
        confined.</p> <p></p></div></div>`;
});
const Three_ProductB2 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<a data-w-tab="Tab 2" class="product-tab-link w-inline-block w-tab-link w--current" id="w-tabs-0-data-w-tab-1" href="#w-tabs-0-data-w-pane-1" role="tab" aria-controls="w-tabs-0-data-w-pane-1" aria-selected="true" data-svelte-h="svelte-1vchklr"><div>Description</div></a>`;
});
const Three_ProductB = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<a data-w-tab="Tab 1" class="product-tab-link w-inline-block w-tab-link" tabindex="-1" id="w-tabs-0-data-w-tab-0" href="#w-tabs-0-data-w-pane-0" role="tab" aria-controls="w-tabs-0-data-w-pane-0" aria-selected="false" data-svelte-h="svelte-vum09l"><div data-svelte-h="svelte-fb0je4">Info</div></a>`;
});
const Three_ProductFCB = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="product-detail-add-to-cart" data-svelte-h="svelte-1lyx94d"><div class="quantity-wrap"><label for="quantity-825b1f38919a129d1f07046ff04963ff" class="no-margin">Quantity</label><input type="number" pattern="^[0-9]+$" inputmode="numeric" id="quantity-825b1f38919a129d1f07046ff04963ff" name="commerce-add-to-cart-quantity-input" min="1" class="w-commerce-commerceaddtocartquantityinput product-detail-quantity" value="1"></div> <input type="submit" data-node-type="commerce-add-to-cart-button" data-loading-text="Adding to cart..." aria-busy="false" aria-haspopup="dialog" class="w-commerce-commerceaddtocartbutton button-white product-cart-button" value="Add to Cart"><a data-node-type="commerce-buy-now-button" data-default-text="Buy now" data-subscription-text="Subscribe now" aria-busy="false" aria-haspopup="false" style="display:none" class="w-commerce-commercebuynowbutton w-dyn-hide" href="/checkout">Buy now</a></div>`;
});
const Three_ProductFD = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<select id="option-set-8eabc45e8cfd628f8bee97949000c167" data-node-type="commerce-add-to-cart-option-select" data-commerce-option-set-id="8eabc45e8cfd628f8bee97949000c167" class="form-select w-select" required=""><option value="" selected="" data-svelte-h="svelte-phuh5n">Select Size</option><option value="402bc642ee4774b82f7709b41458acb3" data-svelte-h="svelte-obi1st">8</option><option value="0f9c059a2c1ef235854aa9f16eacdb03" data-svelte-h="svelte-4lgn4i">9</option><option value="23dcf2023ea584b8616f0c49f8a9e334" data-svelte-h="svelte-13ig0s9">10</option></select>`;
});
const Two_ProductF = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div><form data-node-type="commerce-add-to-cart-form" data-commerce-sku-id="657d6696d95467578cbcc26e" data-loading-text="Adding to cart..." data-commerce-product-id="657d6695d95467578cbcc0fe" class="w-commerce-commerceaddtocartform"><div data-wf-sku-bindings="%5B%7B%22from%22%3A%22f_sku_values_3dr%22%2C%22to%22%3A%22optionValues%22%7D%5D" data-commerce-product-sku-values="%7B%228eabc45e8cfd628f8bee97949000c167%22%3A%22402bc642ee4774b82f7709b41458acb3%22%7D" data-node-type="commerce-add-to-cart-option-list" data-commerce-product-id="657d6695d95467578cbcc0fe" data-preselect-default-variant="false" role="group"><div role="group">${validate_component(Three_ProductFD, "Three_ProductFD").$$render($$result, {}, {}, {})}</div></div> ${validate_component(Three_ProductFCB, "Three_ProductFCB").$$render($$result, {}, {}, {})}</form> <div tabindex="0" style="display:none" class="w-commerce-commerceaddtocartoutofstock empty-state" data-svelte-h="svelte-wyqtgp"><div>This product is out of stock.</div></div> <div aria-live="assertive" data-node-type="commerce-add-to-cart-error" style="display:none" class="w-commerce-commerceaddtocarterror error-message" data-svelte-h="svelte-chqy4h"><div data-node-type="commerce-add-to-cart-error" data-w-add-to-cart-quantity-error="Product is not available in this quantity." data-w-add-to-cart-general-error="Something went wrong when adding this item to the cart." data-w-add-to-cart-mixed-cart-error="You can’t purchase another product with a subscription." data-w-add-to-cart-buy-now-error="Something went wrong when trying to purchase this item." data-w-add-to-cart-checkout-disabled-error="Checkout is disabled on this site." data-w-add-to-cart-select-all-options-error="Please select an option in each set.">Product is not available in this quantity.</div></div></div>`;
});
const Two_ProductHPP = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<h1 class="heading-h3" data-svelte-h="svelte-2utimd">Black geo velvet</h1> <div class="product-price-wrap" data-svelte-h="svelte-20mu6m"><h2 data-wf-sku-bindings="%5B%7B%22from%22%3A%22f_price_%22%2C%22to%22%3A%22innerHTML%22%7D%5D" class="product-detail-price">$ 23.00 USD</h2> <h3 data-wf-sku-bindings="%5B%7B%22from%22%3A%22f_compare_at_price_7dr10dr%22%2C%22to%22%3A%22innerHTML%22%7D%5D" class="product-price-compare no-margin">$ 46.00 USD</h3></div> <p class="product-description" data-svelte-h="svelte-drxaiu">At vero eos et accusamus et iusto odio dignissimos ducimus
    qui blanditiis praesentium voluptatum deleniti atque
    corrupti quos.</p>`;
});
const Three_ProductI2 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div role="listitem" class="w-dyn-item w-dyn-repeater-item" data-svelte-h="svelte-xn0w5u"><a href="#" data-wf-sku-bindings="%5B%7B%22from%22%3A%22f_more_images_4dr%5B%5D%22%2C%22to%22%3A%22media%22%7D%5D" class="product-detail-lightbox w-inline-block w-lightbox" aria-label="open lightbox" aria-haspopup="dialog"><img src="https://assets-global.website-files.com/657d2a77e0747baa9b20584d/65801bad76cabbfba1b0c54f_pr-detail-01.jpg" loading="eager" data-wf-sku-bindings="%5B%7B%22from%22%3A%22f_more_images_4dr%5B%5D%22%2C%22to%22%3A%22src%22%7D%5D" alt="" class="product-details-image"><script type="application/json" class="w-json">{
                "items": [
                    {
                        "url": "https://assets-global.website-files.com/657d2a77e0747baa9b20584d/65801bad76cabbfba1b0c54f_pr-detail-01.jpg",
                        "type": "image"
                    }
                ],
                "group": "Product Gallery"
            }<\/script></a></div>`;
});
const Three_ProductI = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<a href="#" data-wf-sku-bindings="%5B%7B%22from%22%3A%22f_main_image_4dr%22%2C%22to%22%3A%22media%22%7D%5D" class="product-detail-lightbox w-inline-block w-lightbox" aria-label="open lightbox" aria-haspopup="dialog" data-svelte-h="svelte-1gj962c"><img src="https://assets-global.website-files.com/657d2a77e0747baa9b20584d/657fc6e87546e5980959ccd9_product-01.jpg" loading="eager" data-wf-sku-bindings="%5B%7B%22from%22%3A%22f_main_image_4dr%22%2C%22to%22%3A%22src%22%7D%5D" alt="" class="product-details-image"><script type="application/json" class="w-json">{
    "items": [
      {
        "url": "https://assets-global.website-files.com/657d2a77e0747baa9b20584d/657fc6e87546e5980959ccd9_product-01.jpg",
        "type": "image"
      }
    ],
    "group": "Product Gallery"
  }<\/script></a>`;
});
const One_Product = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div data-w-id="b607f53f-abe4-6baf-6588-24d4c9fa2915" class="product-details-section"><div class="container w-container"><div class="w-layout-grid grid-product-details"><div id="w-node-b607f53f-abe4-6baf-6588-24d4c9fa2918-9b2058a1" class="product-details-image-wrap">${validate_component(Three_ProductI, "Three_ProductI").$$render($$result, {}, {}, {})} ${validate_component(Three_ProductI, "Three_ProductI").$$render($$result, {}, {}, {})} <div id="w-node-b607f53f-abe4-6baf-6588-24d4c9fa291e-9b2058a1" class="w-dyn-list w-dyn-items-repeater-ref"><script type="text/x-wf-template" id="wf-template-b607f53f-abe4-6baf-6588-24d4c9fa291f" data-svelte-h="svelte-3qilrl">%3Cdiv%20role%3D%22listitem%22%20class%3D%22w-dyn-item%20w-dyn-repeater-item%22%3E%3Ca%20href%3D%22%23%22%20data-wf-sku-bindings%3D%22%255B%257B%2522from%2522%253A%2522f_more_images_4dr%255B%255D%2522%252C%2522to%2522%253A%2522media%2522%257D%255D%22%20class%3D%22product-detail-lightbox%20w-inline-block%20w-lightbox%22%3E%3Cimg%20src%3D%22https%3A%2F%2Fassets-global.website-files.com%2F657d2a77e0747baa9b20584d%2F65801bad76cabbfba1b0c54f_pr-detail-01.jpg%22%20loading%3D%22eager%22%20data-wf-sku-bindings%3D%22%255B%257B%2522from%2522%253A%2522f_more_images_4dr%255B%255D%2522%252C%2522to%2522%253A%2522src%2522%257D%255D%22%20alt%3D%22%22%20class%3D%22product-details-image%22%2F%3E%3Cscript%20type%3D%22application%2Fjson%22%20class%3D%22w-json%22%3E%7B%0A%20%20%22items%22%3A%20%5B%0A%20%20%20%20%7B%0A%20%20%20%20%20%20%22url%22%3A%20%22https%3A%2F%2Fuploads-ssl.webflow.com%2F657d2a77e0747baa9b20584d%2F65801bad76cabbfba1b0c54f_pr-detail-01.jpg%22%2C%0A%20%20%20%20%20%20%22type%22%3A%20%22image%22%0A%20%20%20%20%7D%0A%20%20%5D%2C%0A%20%20%22group%22%3A%20%22Product%20Gallery%22%0A%7D%3C%2Fscript%3E%3C%2Fa%3E%3C%2Fdiv%3E<\/script> <div role="list" class="product-more-image-wrap w-dyn-items" data-wf-collection="f_more_images_4dr" data-wf-template-id="wf-template-b607f53f-abe4-6baf-6588-24d4c9fa291f">${validate_component(Three_ProductI2, "Three_ProductI2").$$render($$result, {}, {}, {})} ${validate_component(Three_ProductI2, "Three_ProductI2").$$render($$result, {}, {}, {})}</div> <div class="empty-state w-dyn-hide w-dyn-empty" data-svelte-h="svelte-oa06k1"><div>No items found.</div></div></div></div> <div id="w-node-b607f53f-abe4-6baf-6588-24d4c9fa2926-9b2058a1" class="product-details">${validate_component(Two_ProductHPP, "Two_ProductHPP").$$render($$result, {}, {}, {})} ${validate_component(Two_ProductF, "Two_ProductF").$$render($$result, {}, {}, {})} <div data-current="Tab 2" data-easing="ease" data-duration-in="300" data-duration-out="100" class="product-tab w-tabs"><div class="product-tab-menu w-tab-menu" role="tablist">${validate_component(Three_ProductB, "Three_ProductB").$$render($$result, {}, {}, {})} ${validate_component(Three_ProductB2, "Three_ProductB2").$$render($$result, {}, {}, {})}</div> <div class="product-tab-content w-tab-content">${validate_component(Two_ProductP, "Two_ProductP").$$render($$result, {}, {}, {})}</div></div></div></div></div></div>`;
});
const Page_product = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(One_Product, "One_Product").$$render($$result, {}, {}, {})} ${validate_component(One_ProductBenefits, "One_ProductBenefits").$$render($$result, {}, {}, {})} ${validate_component(One_ProductReview, "One_ProductReview").$$render($$result, {}, {}, {})}`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Page_product, "PageProduct").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
