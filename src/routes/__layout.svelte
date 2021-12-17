<script>
  import { authenticated } from "$lib/stores/authStore";
  import u from "$lib/stores/userStore";
  import { setContext } from "svelte";
  import { Directus } from "@directus/sdk";

  // import r from '$helpers/req' et ça marche maintenant

  const directus = new Directus("http://localhost:8055/");
  const start = async () => {
    // Try to authenticate with token if exists
    await directus.auth
      .refresh()
      .then(() => {
        $authenticated = true;
        getCurrentUser();
      })
      .catch((err) => {
        console.log("T", err);
      });
  };
  start();

  const getCurrentUser = async () => {
    await directus.users.me
      .read({
        fields: ["id", "first_name", "last_name", "email", "avatar"],
      })
      .then((user) => {
        // console.log('main __lay 1', user)
        u.setUser(user);
        // console.log('main __lay 2',$u)
      })
      .catch((err) => console.log(err.message));
  };
  setContext("test", "FROM __LAYOUT");
  setContext("directus", directus);
</script>

<svelte:head>
  {@html `<link rel="stylesheet" href="./css/app.css">`}
</svelte:head>

<nav class="block">
  <a href="/" sveltekit:prefetch="">home</a>
  <a href="/articles" sveltekit:prefetch="">articles</a>
  {#if !$authenticated}
    <a href="/login" sveltekit:prefetch="">login</a>
  {/if}
  {#if $authenticated}
    <a href="/dashboard" sveltekit:prefetch="">dashboard</a>
    <a href="/logout" sveltekit:prefetch="">logout</a>
  {/if}
</nav>
{#if $authenticated}
  {$u.first_name} {$u.last_name}
{/if}


<slot></slot>


  <style>
    nav {
      display: flex;
    }
    nav > a {
      margin: 0.3rem;
      font-weight: bold;
      text-transform: uppercase;
      color: grey;
      text-decoration: none;
    }
    nav > a:hover {
      color: sandybrown;
    }
  </style>
