<script>
	import One_Hero2 from './../One/One_Hero2.svelte';
	import One_Hero from './../One/One_Hero.svelte';
	import One_Social from './../One/One_Social.svelte';
	import One_Reviews from './../One/One_Reviews.svelte';
	import One_Gallery3 from './../One/One_Gallery3.svelte';
	import One_AnimatedContainer from './../One/One_AnimatedContainer.svelte';
	import One_Gallery from './../One/One_Gallery.svelte';
	import One_Gallery2 from './../One/One_Gallery2.svelte';
	import One_Benefits from './../One/One_Benefits.svelte';

	import { getBf, getSc, getTm } from '$lib/utils';


</script>

<One_Hero2 one={getTm()}></One_Hero2>

<!-- <One_Hero one={getTm()}></One_Hero> -->

<One_Benefits one={getBf()}></One_Benefits>


<One_Gallery one={getSc()}> </One_Gallery>
<One_AnimatedContainer one={getSc()}></One_AnimatedContainer>
<!-- <One_Gallery2></One_Gallery2> -->


<!-- <One_Reviews></One_Reviews> -->
<!-- <One_Gallery3></One_Gallery3> -->


<!-- <One_Social ></One_Social> -->