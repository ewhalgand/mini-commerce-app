<script lang="ts">
  import { onMount } from "svelte";
  import Card from "../components/card.svelte";
  import {
    fetchProducts,
    loading,
    productsData,
  } from "../lib/productDataStore";
  import FilterData from "../components/filter-data.svelte";

  let errorMessage: string | null = null;
  let minPrice: number = 0;
  let maxPrice: number = 0;
  let absoluteMin: number = 0;
  let absoluteMax: number = 0;

  $: if ($productsData.length > 0) {
    absoluteMin = Math.ceil(
      Math.min(...$productsData.map((product) => product.price - 1))
    );
    absoluteMax = Math.ceil(
      Math.max(...$productsData.map((product) => product.price))
    );

    if (minPrice === 0) minPrice = absoluteMin;
    if (maxPrice === 0) maxPrice = absoluteMax;

    if (minPrice <= 10) absoluteMin = 8;
  }

  $: filteredProducts = $productsData.filter(
    (product) => product.price >= minPrice && product.price <= maxPrice
  );

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

  {#if $productsData.length > 0}
    <FilterData
      {minPrice}
      {maxPrice}
      {absoluteMin}
      {absoluteMax}
      bind:value={maxPrice}
    />
  {/if}

  <div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
    {#if $loading}
      <p>Loading...</p>
    {:else if errorMessage}
      <p class="text-red-500">{errorMessage}</p>
    {:else}
      {#each filteredProducts as products}
        <Card product={products} />
      {/each}
    {/if}
  </div>
</section>
