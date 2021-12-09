<script context="module">
    import r from '$lib/helpers/req'
    export const load = async () => {
        const articles = await (r.getAllArticlesTitle())
        console.log('? : ', {articles})
        return {
            props: {
                articles
            }
        }
    }
</script>
<script>
    export let articles 
    console.log('EXPECTED : ', {articles})
    const title = 'Articles from Directus'
</script>
<h1>{title}</h1>
<ul>
{#each articles as {id, title} (id)}
     <li>{title}</li>
{:else}
     <li>Rien ou loading ?</li>
{/each}
</ul>