<script>
	import One_Footer from './../lib/Components/One/One_Footer.svelte';
	import One_Header from './../lib/Components/One/One_Header.svelte';
    import './../style.css'

	import { getSc } from '$lib/utils';
	import { getTm } from '$lib/utils';
</script>



<One_Header one={getTm()}></One_Header>
<slot></slot>

<One_Footer></One_Footer>