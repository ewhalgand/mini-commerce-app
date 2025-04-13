<script lang="ts">
  // interface DataInput {
  //   id: string;
  //   type: string;
  //   name: string;
  //   label?: string;
  //   placeholder: string;
  //   maxlength?: string;
  //   step?: number;
  // }

  export let dataInput: {
    id: string;
    type: string;
    name: string;
    label?: string;
    placeholder: string;
    maxlength?: number;
    step?: string;
  };
  export let value: string | number;

  const handleInput = (e: Event) => {
    if (dataInput.type === "text") {
      const input = e.target as HTMLInputElement;
      value = input.value.replace(/[0-9]/g, "");
    }
  };
</script>

<label class="font-semibold text-tertiary" for="title"
  >{dataInput.label} <span class="text-red-400 font-normal">*</span></label
>
<input
  id={dataInput.id}
  class="border-2 rounded-xl outline-none p-2 border-secondary"
  type={dataInput.type}
  name={dataInput.name}
  placeholder={dataInput.placeholder}
  maxlength={dataInput.name === "body" ? dataInput.maxlength : undefined}
  step={dataInput.type === "number" ? dataInput.step : undefined}
  bind:value
  on:input={handleInput}
/>
