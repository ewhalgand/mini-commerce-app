<script lang="ts">
  import Input from "../components/input.svelte";

  const inputComponents = [
    {
      "label": "Enter a title",
      "placeholder": "Enter a title",
      "name": "title",
      "type": "text",
    },
    {
      "label": "Enter a description",
      "placeholder": "Enter a description",
      "name": "body",
      "type": "text",
    },
    {
      "label": "Enter a price",
      "placeholder": "Enter a price",
      "name": "price",
      "type": "number",
    },
  ];
</script>

<section class="max-w-7xl m-auto p-9">
  <h1 class="font-bold text-2xl text-tertiary mb-8">Mini-Commerce Dashboard</h1>
  <div>
    <form
      id="form"
      class="flex flex-col bg-primary shadow-bg rounded-2xl p-6 gap-6"
    >
      <h1 class="text-center font-semibold text-lg text-tertiary">
        Form Product
      </h1>
      {#each inputComponents as inputComponent}
        <div class="flex flex-col gap-2">
          <Input dataInput={inputComponent} />
        </div>
      {/each}

      <button
        class="m-auto bg-blue-300 p-2 rounded-sm text-primary font-semibold shadow-btn cursor-pointer"
        >Post a new Article</button
      >
    </form>
  </div>
</section>
