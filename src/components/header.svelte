<script>
  import { link } from "svelte-spa-router";
  import { links } from "../lib/localData";
</script>

<nav class="bg-secondary p-4 flex justify-center gap-4">
  {#each links as items}
    <a class="text-primary font-semibold" href={items.param} use:link
      >{items.name}</a
    >
  {/each}
</nav>
