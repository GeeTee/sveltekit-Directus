<script>
    import { authenticated } from "$lib/stores/authStore";
    import { getContext } from "svelte";
    import { goto } from "$app/navigation";
    const directus = getContext('directus')
    let message = 'connecté'
    const handleLogout = async () => {
        await directus.auth.logout()
        .then(
            () => $authenticated = false
        )
        console.log('LOGOUT : ', directus.auth)
        goto('/')
    }
</script>
<h1>Logout page</h1>
<p>{message}</p>
<button on:click={handleLogout}>Lougout</button>