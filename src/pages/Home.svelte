<script lang="ts">
  import { onMount } from "svelte";
  import Card from "../components/card.svelte";
  import {
    fetchProducts,
    loading,
    productsData,
  } from "../lib/productDataStore";

  let errorMessage: string | null = null;

  onMount(async () => {
    const { error } = await fetchProducts();

    if (error) {
      errorMessage = `${error}`;
    }
  });
</script>

<section class="max-w-7xl m-auto pr-4 pl-4 pt-9 pb-9 sm:p-9">
  <h1 class="font-bold text-center text-2xl text-tertiary mb-8 sm:text-start">
    Mini-Commerce Home
  </h1>
  <div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
    {#if $loading}
      <p>Loading...</p>
    {:else if errorMessage}
      <p class="text-red-500">{errorMessage}</p>
    {:else}
      {#each $productsData as products}
        <Card product={products} />
      {/each}
    {/if}
  </div>
</section>
