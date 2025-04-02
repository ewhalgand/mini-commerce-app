<script lang="ts">
  import Input from "../components/input.svelte";
  import { inputComponents } from "../lib/localData";
  import { useFetcher } from "../lib/useFetcher";

  let formData = inputComponents.reduce((acc: any, input) => {
    acc[input.id] = input.type === "number" ? 0 : "";
    return acc;
  }, {});

  const { fetchData } = useFetcher("http://localhost:3001/api/products", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
    },
  });

  const handleSubmit = async () => {
    try {
      await fetchData({ body: JSON.stringify(formData) });

      formData = {};
    } catch (error) {
      console.error("Échec complet:", error);
    }
  };
</script>

<section class="max-w-7xl m-auto pr-4 pl-4 pt-9 pb-9 sm:p-9">
  <h1 class="font-bold text-center text-2xl text-tertiary mb-8 sm:text-start">
    Mini-Commerce Dashboard
  </h1>
  <div>
    <form
      on:submit|preventDefault={handleSubmit}
      id="form"
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

      <button
        type="submit"
        class="m-auto bg-blue-300 p-2 rounded-sm text-primary font-semibold shadow-btn cursor-pointer"
      >
        Post a new Article
      </button>
    </form>
  </div>
</section>
