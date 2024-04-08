<script>
	import Three_HeaderL from './../Three/Three_HeaderL.svelte';
	import One_P_Dropdown from './One_P_Dropdown.svelte';
	import Three_HeaderI from './../Three/Three_HeaderI.svelte';
	import Two_HeaderH from './../Two/Two_HeaderH.svelte';
</script>

<div
    data-animation="default"
    data-collapse="medium"
    data-duration="400"
    data-easing="ease"
    data-easing2="ease"
    role="banner"
    class="navbar w-nav"
>
    <div class="w-layout-blockcontainer container w-container">
        <div class="nav-item-wrap">
          <Two_HeaderH></Two_HeaderH>
           
        </div>
        <div class="w-layout-grid grid-navbar">
            <Three_HeaderI></Three_HeaderI>
            <nav
                role="navigation"
                id="w-node-bc339dbc-2a59-0847-4b81-c02c2ccf17b6-2ccf17b1"
                class="nav-menu w-nav-menu"
            >
               <Three_HeaderL></Three_HeaderL>
                <One_P_Dropdown></One_P_Dropdown>
            </nav>
            <div
                id="w-node-bc339dbc-2a59-0847-4b81-c02c2ccf17dd-2ccf17b1"
                class="menu-button w-nav-button"
                style="-webkit-user-select: text;"
                aria-label="menu"
                role="button"
                tabindex="0"
                aria-controls="w-nav-overlay-0"
                aria-haspopup="menu"
                aria-expanded="false"
            >
                <div class="menu-button-icon w-icon-nav-menu"></div>
            </div>
        </div>
    </div>
    <div class="w-nav-overlay" data-wf-ignore="" id="w-nav-overlay-0"></div>
</div>
