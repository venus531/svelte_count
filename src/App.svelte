<script lang="ts">
  import Card from "./components/Card.svelte";
  import { values } from "./lib/store/store";

</script>

<main>
    <h1 class="text-6xl title">Multiple Counter</h1>
    {#each $values as value, index}
      <Card key = {index} value = {value}/>
    {/each}
    <div class="max-w-sm mx-auto text-center bg-green-400 rounded text-white cursor-pointer" on:click={() => values.add()}>new counter</div>
    <p>title list: {$values.map((value) => value.name).toString()}</p>
    <p>sum of count: {$values.reduce((sum, value) => sum + value.number,0)}</p>
</main>

<style>
  .title {
    font-weight: inherit;
    margin: 0px;
  }
</style>
