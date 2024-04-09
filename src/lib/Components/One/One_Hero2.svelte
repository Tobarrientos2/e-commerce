<script>
	import Three_Hero2I from './../Three/Three_Hero2I.svelte';
	import Two_Hero2HPB from './../Two/Two_Hero2HPB.svelte';
	import Three_Hero2B from './../Three/Three_Hero2B.svelte';
    
    export let one = {};

</script>

<section
    data-w-id="b7995e9e-7cb6-e2ea-50af-51ee3f6fdd9d"
    style="opacity: 1; transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg); transform-style: preserve-3d;"
    class="hero-section"
>
    <div class="w-layout-blockcontainer container w-container">
        <div class="grid-hero-split">
            <Three_Hero2I obj={one.v_img}></Three_Hero2I>
            <div
                id="w-node-_23529aef-91dc-6766-880c-ebc7f4e0a2a7-79c51692"
                data-w-id="23529aef-91dc-6766-880c-ebc7f4e0a2a7"
                style="opacity: 1; transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg); transform-style: preserve-3d;"
                class="hero-content-right"
            >
                <!-- <p><strong>[ WELCOME ]</strong></p> -->
               <Two_Hero2HPB one={one}></Two_Hero2HPB>
            </div>
        </div>
    </div>
</section>

<style>

    .hero-section{
        padding-bottom: 180px;
    }
   
</style>
