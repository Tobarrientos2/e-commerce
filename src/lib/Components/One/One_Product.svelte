<script>
	import Two_ProductP from './../Two/Two_ProductP.svelte';
	import Three_ProductB2 from './../Three/Three_ProductB2.svelte';
	import Three_ProductB from './../Three/Three_ProductB.svelte';
	import Two_ProductF from './../Two/Two_ProductF.svelte';
	import Two_ProductHPP from './../Two/Two_ProductHPP.svelte';
	import Three_ProductI2 from './../Three/Three_ProductI2.svelte';
	import Three_ProductI from './../Three/Three_ProductI.svelte';

</script>



<div
    data-w-id="b607f53f-abe4-6baf-6588-24d4c9fa2915"
    class="product-details-section"
>
    <div class="container w-container">
        <div class="w-layout-grid grid-product-details">
            <div
                id="w-node-b607f53f-abe4-6baf-6588-24d4c9fa2918-9b2058a1"
                class="product-details-image-wrap"
            >
               <Three_ProductI></Three_ProductI>
               <Three_ProductI></Three_ProductI>
                <div
                    id="w-node-b607f53f-abe4-6baf-6588-24d4c9fa291e-9b2058a1"
                    class="w-dyn-list w-dyn-items-repeater-ref"
                >
                    <script
                        type="text/x-wf-template"
                        id="wf-template-b607f53f-abe4-6baf-6588-24d4c9fa291f"
                    >
%3Cdiv%20role%3D%22listitem%22%20class%3D%22w-dyn-item%20w-dyn-repeater-item%22%3E%3Ca%20href%3D%22%23%22%20data-wf-sku-bindings%3D%22%255B%257B%2522from%2522%253A%2522f_more_images_4dr%255B%255D%2522%252C%2522to%2522%253A%2522media%2522%257D%255D%22%20class%3D%22product-detail-lightbox%20w-inline-block%20w-lightbox%22%3E%3Cimg%20src%3D%22https%3A%2F%2Fassets-global.website-files.com%2F657d2a77e0747baa9b20584d%2F65801bad76cabbfba1b0c54f_pr-detail-01.jpg%22%20loading%3D%22eager%22%20data-wf-sku-bindings%3D%22%255B%257B%2522from%2522%253A%2522f_more_images_4dr%255B%255D%2522%252C%2522to%2522%253A%2522src%2522%257D%255D%22%20alt%3D%22%22%20class%3D%22product-details-image%22%2F%3E%3Cscript%20type%3D%22application%2Fjson%22%20class%3D%22w-json%22%3E%7B%0A%20%20%22items%22%3A%20%5B%0A%20%20%20%20%7B%0A%20%20%20%20%20%20%22url%22%3A%20%22https%3A%2F%2Fuploads-ssl.webflow.com%2F657d2a77e0747baa9b20584d%2F65801bad76cabbfba1b0c54f_pr-detail-01.jpg%22%2C%0A%20%20%20%20%20%20%22type%22%3A%20%22image%22%0A%20%20%20%20%7D%0A%20%20%5D%2C%0A%20%20%22group%22%3A%20%22Product%20Gallery%22%0A%7D%3C%2Fscript%3E%3C%2Fa%3E%3C%2Fdiv%3E
                    </script>
                    <div
                        role="list"
                        class="product-more-image-wrap w-dyn-items"
                        data-wf-collection="f_more_images_4dr"
                        data-wf-template-id="wf-template-b607f53f-abe4-6baf-6588-24d4c9fa291f"
                    >
                    <Three_ProductI2></Three_ProductI2>
                    <Three_ProductI2></Three_ProductI2>
                       
                    </div>
                    <div class="empty-state w-dyn-hide w-dyn-empty">
                        <div>No items found.</div>
                    </div>
                </div>
            </div>
            <div
                id="w-node-b607f53f-abe4-6baf-6588-24d4c9fa2926-9b2058a1"
                class="product-details"
            >
               <Two_ProductHPP></Two_ProductHPP>
              <Two_ProductF></Two_ProductF>
                <div
                    data-current="Tab 2"
                    data-easing="ease"
                    data-duration-in="300"
                    data-duration-out="100"
                    class="product-tab w-tabs"
                >
                    <div class="product-tab-menu w-tab-menu" role="tablist">
                        <Three_ProductB></Three_ProductB>
                        <Three_ProductB2></Three_ProductB2>
                    </div>
                    <div class="product-tab-content w-tab-content">
                        <Two_ProductP></Two_ProductP>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
