<script lang="ts">
  import Image from "../assets/Capture d’écran 2025-03-05 à 11.57.44.png";
  import DeleteButton from "./delete-button.svelte";
  import {
    fetchProducts,
    loading,
    productsData,
  } from "../lib/productDataStore";
  import { onMount } from "svelte";

  let errorMessage: string | null = null;

  onMount(async () => {
    const { error } = await fetchProducts();

    if (error) {
      errorMessage = `${error}`;
    }
  });
</script>

<div
  class="flex flex-col bg-primary shadow-bg rounded-2xl p-6 gap-6 max-h-[480px] overflow-y-auto"
>
  {#if errorMessage}
    <p class="text-red-500">{errorMessage}</p>
  {:else if $loading}
    <p class="text-gray-500">Loading...</p>
  {:else if !$productsData || $productsData.length === 0}
    <p class="text-gray-600">No products to display</p>
  {:else}
    {#each $productsData as product (product._id)}
      <div class="flex justify-between items-center py-4">
        <div class="flex items-center gap-4">
          <img
            class="rounded-lg object-cover w-32"
            src={product.image || Image}
            alt={product.title || "product image"}
            loading="lazy"
          />
          <div class="flex flex-col gap-2">
            <h1 class="font-semibold text-tertiary text-lg">{product.title}</h1>
            <p class="text-gray-700">{product.body}</p>
          </div>
        </div>
        <DeleteButton id={product._id} />
      </div>
      {#if product !== $productsData[$productsData.length - 1]}
        <hr class="border-gray-200" />
      {/if}
    {/each}
  {/if}
</div>
