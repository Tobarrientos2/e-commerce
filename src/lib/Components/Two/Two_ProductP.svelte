<script>

</script>

<div
data-w-tab="Tab 2"
class="product-tab-pane w-tab-pane w--tab-active"
id="w-tabs-0-data-w-pane-1"
role="tabpanel"
aria-labelledby="w-tabs-0-data-w-tab-1"
>

{#each one.arr.splice(3,3) as obj}
<div class="w-richtext">
    <p>
        {obj.v_txt_2}
</div>
{/each}
</div>