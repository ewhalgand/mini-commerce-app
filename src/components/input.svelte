<script lang="ts">
  export let dataInput: {
    type: string;
    name: string;
    label?: string;
    placeholder: string;
  };
  export let value: string;
</script>

<label class="font-semibold text-tertiary" for="title">{dataInput.label}</label>
<input
  class="border-3 border-secondary rounded-xl p-2"
  type={dataInput.type}
  name={dataInput.name}
  placeholder={dataInput.placeholder}
  bind:value
/>
