<script>
  import {link} from 'svelte-spa-router'
  import active from 'svelte-spa-router/active'
  import Logo from "./Logo.svelte";

  const menus = [
    {
      href: '/',
      name: 'Search'
    },
    {
      href: '/movie/tt4',
      name: 'Movie',
      path: '/movie/*'
    },
    {
      href: '/about',
      name: 'About'
    }
  ]
</script>


<header>
  <Logo/>

  <nav>
    <ul>
      {#each menus as {href, name, path} (name)}
        <li>
          <a use:link
             use:active={path || href}
             {href}>{name}</a>
        </li>
      {/each}
    </ul>
  </nav>

  <a href="#/">Home</a>
  <a href="#/about">About</a>
</header>

<style lang="scss">
</style>
