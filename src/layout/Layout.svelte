<script>
  import Footer from "../components/footer.svelte";
  import Header from "../components/header.svelte";
</script>

<div class="flex flex-col min-h-screen">
  <Header />
  <main class="flex-1">
    <slot />
  </main>
  <Footer />
</div>
