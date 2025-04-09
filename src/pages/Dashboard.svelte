<script lang="ts">
  import { onMount } from "svelte";
  import DeleteCard from "../components/delete-card.svelte";
  import Input from "../components/input.svelte";
  import { inputComponents } from "../lib/localData";
  import { fetchProducts, postProduct } from "../lib/productDataStore";

  onMount(fetchProducts);

  let formData = inputComponents.reduce((acc: any, input) => {
    acc[input.id] = input.type === "number" ? 0 : "";
    return acc;
  }, {});

  let errorMessage: string | null = null;

  const handleSubmit = async () => {
    const { success, error } = await postProduct(formData);

    if (!success) {
      errorMessage = `Error: ${error}`;
    } else {
      formData = { price: 0 };
      errorMessage = null;
    }
  };
</script>

<section class="max-w-7xl m-auto pr-4 pl-4 pt-9 pb-9 sm:p-9 md:min-h-screen">
  <h1 class="font-bold text-center text-2xl text-tertiary mb-8 sm:text-start">
    Mini-Commerce Dashboard
  </h1>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
    <form
      on:submit|preventDefault={handleSubmit}
      class="flex flex-col bg-primary shadow-bg rounded-2xl p-6 gap-6"
    >
      <h1 class="text-center font-semibold text-lg text-tertiary">
        Form Product
      </h1>
      {#each inputComponents as inputComponent}
        <div class="flex flex-col gap-2">
          <Input
            dataInput={inputComponent}
            bind:value={formData[inputComponent.id]}
          />
        </div>
      {/each}

      {#if errorMessage}
        <p class="text-red-500">{errorMessage}</p>
      {/if}

      <button
        type="submit"
        class="m-auto bg-blue-300 p-2 rounded-sm text-primary font-semibold shadow-btn cursor-pointer"
      >
        Post a new Article
      </button>
    </form>
    <DeleteCard />
  </div>
</section>
