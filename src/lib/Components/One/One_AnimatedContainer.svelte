<script>
    import TwoAnimatedContainerH from "../Two/Two_AnimatedContainerH.svelte";
    export let one = {};
</script>

<div
    data-w-id="1a444fd3-0e1a-df62-023b-cdc1b8f64507"
    class="category-inline-section"
>
    <div
        class="category-marquee"
        style="transform: translate3d(-70.7528%, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg); transform-style: preserve-3d; will-change: transform;"
    >
        <div class="category-list-wrapper w-dyn-list">
            <div role="list" class="category-collection-list w-dyn-items">
              <TwoAnimatedContainerH></TwoAnimatedContainerH>
               
            </div>
        </div>
        <div class="category-list-wrapper w-dyn-list">
            <div role="list" class="category-collection-list w-dyn-items">
                {#each one.arr as obj}
                <TwoAnimatedContainerH {obj}></TwoAnimatedContainerH>
                {/each}
            </div>
        </div>
    </div>
</div>
