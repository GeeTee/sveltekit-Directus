<script>
    import { authenticated } from "$lib/stores/authStore";
    import userStore from '$lib/stores/userStore'
    import { getContext } from "svelte";
    import { goto } from "$app/navigation";


    // const test = getContext('test')
    // email et password données de test
    let email = 'admin@galites.net'
    let password = 'samoiS+=45500?!'

    const directus = getContext('directus')

        const getCurrentUser = async () => {
            await directus.users.me.read({
                fields: ['id','first_name', 'last_name', 'email', 'avatar']
            })
            .then(
                (user) => {
                    console.log('1', user)
                    userStore.setUser(user)
                    console.log('2',$userStore)
                }
            )
            .catch((err) => console.log(err.message))
        }

    const handleLogin = async () => {
        await directus.auth
			.login({ email, password })
			.then(
                () => {
                    $authenticated = true
                    getCurrentUser()
                    goto('/profile')
                }
            )
			.catch(() => {
				window.alert('Invalid credentials');
			});
            // goto('/profile')
    }
</script>
<h1>Login page</h1>
<button on:click={handleLogin}>Login</button>