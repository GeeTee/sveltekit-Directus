<script>
    import { authenticated } from "$lib/stores/authStore";
    import u from '$lib/stores/userStore'




    
</script>
<h1>Profile Page</h1>
{#if $u}
     {$u.first_name} {$u.last_name} <br> {$u.email}
{/if}