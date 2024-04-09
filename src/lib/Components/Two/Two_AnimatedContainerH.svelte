<script>
	import Three_AnimatedContainerI from './../Three/Three_AnimatedContainerI.svelte';
export let obj = {};
</script>

<div role="listitem" class="category-item-inline w-dyn-item">
    <a
        data-w-id="a46f8c8b-e0b3-90a4-c159-f4dcdef5313a"
        href={obj.v_slug}
        class="category-link-inline w-inline-block"
        >
        <h2 class="category-title-inline">{obj.v_txt_1}</h2>
        <div
            style="opacity: 0; transform: translate3d(0px, 0px, 0px) scale3d(0.9, 0.9, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg); transform-style: preserve-3d;"
            class="category-image-inline-wrap"
        >
           <Three_AnimatedContainerI obj={obj}></Three_AnimatedContainerI>
            <div class="category-image-inline-overlay"></div>
        </div></a
    >
</div>