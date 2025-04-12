<script lang="ts">
  import { SvelteDate } from "svelte/reactivity";

  let date = new SvelteDate();
  const pad = (numberToPad: number) =>
    numberToPad < 10 ? "0" + numberToPad : numberToPad;

  $effect(() => {
    const interval = setInterval(() => {
      date.setTime(Date.now());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  });
</script>

<h2>{date.getHours()}:{pad(date.getMinutes())}:{pad(date.getSeconds())}</h2>
