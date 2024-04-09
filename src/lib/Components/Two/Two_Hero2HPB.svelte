<script>
	import Three_Hero2B from './../Three/Three_Hero2B.svelte';
    export let one = {};
</script>

<h1 class="hero-title-right">
    {one.v_txt_2}
</h1>
<div class="hero-split-content">
    <p class="text-lead">
        {one.v_txt_3}
    </p>
   <Three_Hero2B></Three_Hero2B>
</div>