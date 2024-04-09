<script>
export let obj = {};
import { dotInNumber, getItemBySlug } from "$lib/utils";


</script>

<h1 class="heading-h3">{obj.v_txt_1}</h1>
<div class="product-price-wrap">
    <h2
        data-wf-sku-bindings="%5B%7B%22from%22%3A%22f_price_%22%2C%22to%22%3A%22innerHTML%22%7D%5D"
        class="product-detail-price"
    >
        $&nbsp; {dotInNumber(obj.v_txt_2)}&nbsp;CLP
    </h2>
    <h3
        data-wf-sku-bindings="%5B%7B%22from%22%3A%22f_compare_at_price_7dr10dr%22%2C%22to%22%3A%22innerHTML%22%7D%5D"
        class="product-price-compare no-margin"
    >
        <!-- $&nbsp;46.00&nbsp;USD -->
    </h3>
</div>
{#each obj.arr as item}
<p class="product-description">
    {item.v_txt_2}
</p>
{/each}