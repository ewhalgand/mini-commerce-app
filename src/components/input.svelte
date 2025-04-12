<script lang="ts">
  export let dataInput: {
    id: string;
    type: string;
    name: string;
    label?: string;
    step?: any;
    placeholder: string;
  };
  export let value: string | number;

  const handleInput = (e: Event) => {
    if (dataInput.type === "text") {
      const input = e.target as HTMLInputElement;
      value = input.value.replace(/[0-9]/g, "");
    }
  };
</script>

<label class="font-semibold text-tertiary" for="title">{dataInput.label}</label>
<input
  id={dataInput.id}
  class="border-2 rounded-xl outline-none p-2 border-secondary"
  type={dataInput.type}
  name={dataInput.name}
  placeholder={dataInput.placeholder}
  {...dataInput.type === "number" ? { step: dataInput.step } : {}}
  bind:value
  on:input={handleInput}
/>
