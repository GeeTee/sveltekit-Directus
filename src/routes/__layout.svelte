<script>
    import { authenticated } from '$lib/stores/authStore';
    import { setContext } from 'svelte';
    import { Directus } from '@directus/sdk';

    const directus = new Directus('http://localhost:8055/');

    const start = async () => {
        // Try to authenticate with token if exists
        await directus.auth
            .refresh()
            .then(() => {
                $authenticated = true;
            })
            .catch((err) => {console.log('TTTTTTTTTTTTTTTTTTTTT',err)});

    }
    start()

    setContext('directus', directus)
</script>

<nav>
    <a href="/" sveltekit:prefetch>home</a>
    <a href="/articles" sveltekit:prefetch>articles</a>
    {#if !$authenticated}
         <a href="/login" sveltekit:prefetch>login</a>
    {/if}
    {#if $authenticated}
         <a href="/logout" sveltekit:prefetch>logout</a>
    {/if}
</nav>
<span><strong>"$authenticated" : {$authenticated}</strong></span><br>
<slot />

<style>
    nav {
        display: flex;
    }
    nav > a {
        margin: .3rem;
        font-weight: bold;
        text-transform: uppercase;
        color: grey;
        text-decoration: none;
    }
    nav > a:hover {
        color: sandybrown;
    }
</style>