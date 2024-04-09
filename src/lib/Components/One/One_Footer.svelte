<script>
	import Three_FooterI2 from './../Three/Three_FooterI2.svelte';
	import Two_FooterP2 from './../Two/Two_FooterP2.svelte';
	import Three_FooterL2 from './../Three/Three_FooterL2.svelte';
	import Three_FooterL from './../Three/Three_FooterL.svelte';
	import Three_FooterF from './../Three/Three_FooterF.svelte';
	import Two_FooterP from './../Two/Two_FooterP.svelte';
	import Three_FooterI from './../Three/Three_FooterI.svelte';

    import { getTm } from '$lib/utils';
</script>

<footer class="footer">
    <div class="w-layout-blockcontainer container w-container">
        <div class="w-layout-grid grid-footer">
            <div id="w-node-f186cf30-17a5-6ed6-37c8-6b48ecf59ae8-ecf59ae5">
              <Three_FooterI one={getTm()}></Three_FooterI>
               <Two_FooterP one={getTm()}></Two_FooterP>
                <Three_FooterF ></Three_FooterF>
            </div>
            <div
                id="w-node-f186cf30-17a5-6ed6-37c8-6b48ecf59afc-ecf59ae5"
                class="grid-footer-link-wrap"
            >
                <div class="grid-footer-link-inner">
                   <!-- <Three_FooterL></Three_FooterL> -->
                 
                </div>
                
            </div>
            <div
                id="w-node-_5b2572be-cf50-a515-178a-3e8512f910b3-ecf59ae5"
                class="footer-contact-wrap"
            >
             
            <!-- <Three_FooterL2></Three_FooterL2>
            <Three_FooterL2></Three_FooterL2> -->
             
                <div class="footer-social-item-wrap">
                    <!-- <Three_FooterI2></Three_FooterI2>
                    <Three_FooterI2></Three_FooterI2>
                    <Three_FooterI2></Three_FooterI2> -->
                </div>
            </div>
        </div>
    </div>
   <!-- <Two_FooterP2></Two_FooterP2> -->
</footer>


<style>
    .footer{
        padding-top:180px;
    } 
</style>