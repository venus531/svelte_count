<script lang="ts">
    import { values } from "../lib/store/store"
    import type { Count } from "../lib/store/store"
    export let key : number
    export let value : Count
</script>

<div class="mx-auto mb-2 rounded border-solid bg-gray-100 shadow-lg flex flex-row relative items-center max-w-sm">
    <input class="text-gray-600 mx-4 px-1 w-32" value={value.name} on:input={(e) => 
        values.setName(key, e.target?.value)
    }/>
    <span class="text-lg font-bold px-4 absolute centerize">{value.number}</span>
    <div class="ml-auto">
        <button class="btn bg-red-500 rounded-l" on:click={() => values.inc(key)}>+</button><button class="btn bg-blue-500" on:click={() => values.dec(key)}>-</button><button class="btn bg-yellow-500 rounded-r" on:click={() => values.reset(key)}>0</button>
        <span class="text-gray-500 cursor-pointer px-4" on:click={() => values.del(key)}>x</span>
    </div>
</div>

<style>

</style>