<script>
	import Three_ProductFCB from './../Three/Three_ProductFCB.svelte';
	import Three_ProductFD from './../Three/Three_ProductFD.svelte';

</script>

<div>
    <form
        data-node-type="commerce-add-to-cart-form"
        data-commerce-sku-id="657d6696d95467578cbcc26e"
        data-loading-text="Adding to cart..."
        data-commerce-product-id="657d6695d95467578cbcc0fe"
        class="w-commerce-commerceaddtocartform"
    >
        <div
            data-wf-sku-bindings="%5B%7B%22from%22%3A%22f_sku_values_3dr%22%2C%22to%22%3A%22optionValues%22%7D%5D"
            data-commerce-product-sku-values="%7B%228eabc45e8cfd628f8bee97949000c167%22%3A%22402bc642ee4774b82f7709b41458acb3%22%7D"
            data-node-type="commerce-add-to-cart-option-list"
            data-commerce-product-id="657d6695d95467578cbcc0fe"
            data-preselect-default-variant="false"
            role="group"
        >
            <div role="group">
              <Three_ProductFD></Three_ProductFD>
            </div>
        </div>
       <Three_ProductFCB></Three_ProductFCB>
    </form>
    <div
        tabindex="0"
        style="display:none"
        class="w-commerce-commerceaddtocartoutofstock empty-state"
    >
        <div>This product is out of stock.</div>
    </div>
    <div
        aria-live="assertive"
        data-node-type="commerce-add-to-cart-error"
        style="display:none"
        class="w-commerce-commerceaddtocarterror error-message"
    >
        <div
            data-node-type="commerce-add-to-cart-error"
            data-w-add-to-cart-quantity-error="Product is not available in this quantity."
            data-w-add-to-cart-general-error="Something went wrong when adding this item to the cart."
            data-w-add-to-cart-mixed-cart-error="You can’t purchase another product with a subscription."
            data-w-add-to-cart-buy-now-error="Something went wrong when trying to purchase this item."
            data-w-add-to-cart-checkout-disabled-error="Checkout is disabled on this site."
            data-w-add-to-cart-select-all-options-error="Please select an option in each set."
        >
            Product is not available in this quantity.
        </div>
    </div>
</div>