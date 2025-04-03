<script lang="ts">
  import Card from "../components/card.svelte";
  import { useFetcher } from "../lib/useFetcher";

  const { data, error, loading, fetchData } = useFetcher(
    "http://localhost:3001/api/products"
  );

  fetchData();
</script>

<section class="max-w-7xl m-auto pr-4 pl-4 pt-9 pb-9 sm:p-9">
  <h1 class="font-bold text-center text-2xl text-tertiary mb-8 sm:text-start">
    Mini-Commerce Home
  </h1>
  <div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
    {#if $loading}
      <p>Chargement...</p>
    {:else if $error.err}
      <p>Error : {$error.err}</p>
    {:else}
      {#each $data as products}
        <Card product={products} />
      {/each}
    {/if}
  </div>
</section>
