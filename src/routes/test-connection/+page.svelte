<script lang="ts">
  let { data } = $props()
</script>

<div class="hero min-h-screen">
  <div class="hero-content text-center">
    <div class="max-w-md">
      <h1 class="text-5xl font-bold mb-8">Connection Test</h1>
      <div class="text-2xl mb-4">Status: {data.connectionStatus}</div>
      {#if data.data}
        <div class="text-lg">Found {data.data.length} profile(s)</div>
      {/if}
    </div>
  </div>
</div>
