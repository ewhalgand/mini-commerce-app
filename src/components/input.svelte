<script lang="ts">
  export let dataInput: {
    id: string;
    type: string;
    name: string;
    label?: string;
    placeholder: string;
  };
  export let value: string;
</script>

<label class="font-semibold text-tertiary" for="title">{dataInput.label}</label>
<input
  id={dataInput.id}
  class="border-2 rounded-xl outline-none p-2 border-secondary"
  type={dataInput.type}
  name={dataInput.name}
  placeholder={dataInput.placeholder}
  bind:value
/>
