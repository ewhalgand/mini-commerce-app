<script lang="ts">
  export let minPrice;
  export let maxPrice;
  // export let value: number;
</script>

<div class="flex items-center gap-3 mb-6">
  <span class="text-sm text-center text-gray-500">Min ({minPrice}$)</span>
  <input
    type="range"
    min={minPrice}
    max={maxPrice}
    class="w-full h-2 rounded-lg appearance-none cursor-pointer bg-gray-300 md:w-[400px] custom-slider"
  />
  <span class="text-sm text-center text-gray-500">Max ({maxPrice}$)</span>
</div>
