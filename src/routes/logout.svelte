<script>
    import { authenticated } from "$lib/stores/authStore";
    import u from '$lib/stores/userStore'
    import { getContext } from "svelte";
    import { goto } from "$app/navigation";
    const directus = getContext('directus')
    let message = 'connecté'
    const handleLogout = async () => {
        await directus.auth.logout()
        .then(
            () => {
                $authenticated = false
                u.deleteUser()
                console.log('3', $u)
                goto('/')
            }
        )
        
    }
</script>
<h1>Logout page</h1>
<p>{message}</p>
<button on:click={handleLogout}>Lougout</button>