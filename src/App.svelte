<script lang="ts">
  import Router from "svelte-spa-router";
  import { routes } from "./router/routes";
  import Layout from "./layout/Layout.svelte";
</script>

<Layout>
  <Router {routes} />
</Layout>
