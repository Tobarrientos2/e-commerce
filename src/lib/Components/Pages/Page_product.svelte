<script>
	import One_ProductReview from './../One/One_ProductReview.svelte';
	import One_ProductBenefits from './../One/One_ProductBenefits.svelte';
	import One_Benefits from './../One/One_Benefits.svelte';
	import One_Product from './../One/One_Product.svelte';

	import { getBf } from '$lib/utils';
    import { get } from 'svelte/store';
</script>


<One_Product></One_Product>

<One_Benefits one={getBf()}></One_Benefits>


<!-- <One_ProductReview></One_ProductReview> -->