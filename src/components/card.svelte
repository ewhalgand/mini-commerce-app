<script lang="ts">
  import Image from "../assets/Capture d’écran 2025-03-05 à 11.57.44.png";
  export let product;
</script>

<div class="w-full bg-primary rounded-xl shadow-bg">
  <img class="rounded-t-2xl" src={Image} alt="img default" />
  <div class="p-4 flex flex-col gap-3 font-semibold text-tertiary">
    <h4>{product.title}</h4>
    <p>{product.body}</p>
    <p>${product.price}</p>
  </div>
</div>
