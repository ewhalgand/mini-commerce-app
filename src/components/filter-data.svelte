<script lang="ts">
  export let minPrice;
  export let absoluteMin;
  export let maxPrice;
  export let absoluteMax;
  export let value: number;
</script>

<div class="flex flex-col gap-4 mb-6">
  <div class="flex items-center gap-3">
    <span class="text-sm text-gray-500">Min (${minPrice})</span>
    <input
      type="range"
      min={absoluteMin}
      max={absoluteMax}
      bind:value
      class="w-full h-2 rounded-lg appearance-none cursor-pointer bg-gray-300 md:w-[400px] custom-slider"
    />
    <span class="text-sm text-gray-500">Max (${maxPrice})</span>
  </div>
</div>

<style>
  input[type="range"]::-webkit-slider-thumb {
    appearance: none;
    width: 20px;
    height: 10px;
    background: rgb(191, 118, 255);
    border: 3px solid oklch(0.541 0.281 293.009);
    border-radius: 20px;
    padding: 2px;
  }
</style>
