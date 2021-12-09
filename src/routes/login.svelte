<script>
    import { authenticated } from "$lib/stores/authStore";
    import { getContext } from "svelte";
    import { goto } from "$app/navigation";
    const directus = getContext('directus')
    // email et password données de test
    let email = ''
    let password = ''

    const handleLogin = async () => {
        await directus.auth
			.login({ email, password })
			.then(() => {
				console.log('LOGIN : ', directus.auth)
                $authenticated = true
			})
			.catch(() => {
				window.alert('Invalid credentials');
			});
            goto('/')
    }
</script>
<h1>Login page</h1>
<button on:click={handleLogin}>Login</button>