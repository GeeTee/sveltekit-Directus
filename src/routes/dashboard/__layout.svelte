<script context="module">
    export const load = async ({session}) => {
        // console.log('dashboard load : ')
        console.log('dashboard load : ', {session})
        const { directusAuth } = session.directus
        if (!directusAuth) {
            console.log('bandit')
            return { status: 302, redirect: '/login' }
        }
        return {
            props: {
                directusAuth
            }
        }
    }
</script>
<script>
    export let directusAuth
    console.log('Expected in dashboard __lay : ', {directusAuth})
</script>
{#if directusAuth}
     <h1>Dashboard L</h1>
     <slot />
{/if}
