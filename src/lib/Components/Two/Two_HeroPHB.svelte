<script> 
    import Three_HeroB from './../Three/Three_HeroB.svelte';
    export let obj = {};
</script>


    <div class="hero-info-wrap">
        <div
            id="w-node-_23529aef-91dc-6766-880c-ebc7f4e0a2a7-b2ed169a"
            data-w-id="23529aef-91dc-6766-880c-ebc7f4e0a2a7"
            style="opacity: 1; transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg); transform-style: preserve-3d;"
            class="hero-content-left"
        >
            <p class="hero-description">
                <!-- {obj.v_txt_2} -->
            </p>
        </div>
        <div
            id="w-node-_0414bb1e-5b03-bcab-1785-f4978f449ffa-b2ed169a"
            data-w-id="0414bb1e-5b03-bcab-1785-f4978f449ffa"
            style="opacity: 1; transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg); transform-style: preserve-3d;"
        >
            <h1 class="hero-title-center">{obj.v_txt_2.split(' ').splice(0,1).join()}</h1>
        </div>
        <Three_HeroB obj="Ver vaporizadores"></Three_HeroB>
    </div>
