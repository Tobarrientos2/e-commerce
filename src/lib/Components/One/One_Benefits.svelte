<script>
    import ThreeBenefitsI from "../Three/Three_BenefitsI.svelte";
    
    export let one = {};  
    
</script>

<section class="benefit-section">
    <div class="w-layout-blockcontainer container-medium w-container">
        <div class="w-layout-grid grid-benefit">
            {#each one.arr.splice(0,4) as obj}
            <ThreeBenefitsI {obj}></ThreeBenefitsI>
            {/each}
            
        </div>
    </div>
</section>
