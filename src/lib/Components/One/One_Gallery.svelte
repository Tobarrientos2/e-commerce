<script>
	import Two_GalleryHPI from './../Two/Two_GalleryHPI.svelte';
	import Three_GalleryI from './../Three/Three_GalleryI.svelte';
    import TwoGalleryH from "../Two/Two_GalleryH.svelte";
    export let one = {};

</script>

<section
    data-w-id="be757ec9-eee4-268a-d0f0-0f12e2861f9d"
    style="opacity: 1; transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg); transform-style: preserve-3d;"
    class="product-section section-spacing"
>
    <div class="w-layout-blockcontainer container w-container">
        <TwoGalleryH obj="Tendencias 2024"></TwoGalleryH>
        <div class="w-dyn-list">
            <div role="list" class="product-list w-dyn-items">
                {#each one.arr as obj}
                <Two_GalleryHPI {obj} ></Two_GalleryHPI>
                {/each}
              
            </div>
        </div>
    </div>
</section>
