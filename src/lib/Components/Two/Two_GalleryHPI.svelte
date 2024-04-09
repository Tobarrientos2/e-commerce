<script>


import { dotInNumber } from '$lib/utils';
	import Three_GalleryI from './../Three/Three_GalleryI.svelte';
export let obj = {}


</script>



<div role="listitem" class="w-dyn-item">
    <a
        data-w-id="bc74f666-eb86-76ae-7c42-eba059799735"
        href={obj.v_slug}
        class="product-item w-inline-block"
        >
        <Three_GalleryI {obj}></Three_GalleryI>
        <div
            data-w-id="e99eca8c-4c9e-3258-37c4-8dcc05ba7326"
            class="product-hover-content"
            style="opacity: 0; transform: translate3d(0px, 50px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg); transform-style: preserve-3d;"
        >
            <h3 class="product-title">{obj.v_txt_1}</h3>
            <div class="product-price-wrap">
                <h4
                    data-wf-sku-bindings="%5B%7B%22from%22%3A%22f_price_%22%2C%22to%22%3A%22innerHTML%22%7D%5D"
                    class="product-price"
                >
                    $&nbsp;{dotInNumber(obj.v_txt_2)}&nbsp;CLP
                </h4>
                <h5
                    data-wf-sku-bindings="%5B%7B%22from%22%3A%22f_compare_at_price_7dr10dr%22%2C%22to%22%3A%22innerHTML%22%7D%5D"
                    class="product-compare-price"
                >
                    <!-- $&nbsp;46.00&nbsp;USD -->
                </h5>
            </div>
        </div></a
    >
</div>
