<script>
	import Three_CategoriesB2 from './../Three/Three_CategoriesB2.svelte';
	import Three_CategoriesB from './../Three/Three_CategoriesB.svelte';
	import Two_CategoriesH from '../Two/Two_CategoriesH.svelte';
</script>

<section class="hero-inner">
    <div class="w-layout-blockcontainer container w-container">
        <div class="hero-inner-content">
          <Two_CategoriesH></Two_CategoriesH>
            <div class="category-link-list">
                <Three_CategoriesB2></Three_CategoriesB2>
                <div class="w-dyn-list">
                    <div
                        role="list"
                        class="category-link-list-inner w-dyn-items"
                    >
                       <Three_CategoriesB></Three_CategoriesB>
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
