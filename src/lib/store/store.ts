import { writable } from "svelte/store";

export interface Count {
    name: String,
    number: number
}

const initStore = () => {
    const initialCounter: Array<Count> = [{
        name: "new",
        number: 0
    }];

    const { subscribe, set, update } = writable(initialCounter);

    return {
        subscribe,
        inc: ( index: number ) => update((value) => value.map((v, i) => i === index ? {...v, number: ++v.number} : v)),
        dec: ( index: number ) => update((value) => value.map((v, i) => i === index ? v.number <= 0 ? {...v, number: 0} : {...v, number: --v.number} : v)),
        del: ( index: number ) => update((value) => value.map((v, i) => i === index ? {...v, number: -1} : v).filter((vv) => vv.number != -1)),
        reset: ( index: number ) => update((value) => value.map((v, i) => i === index ? {...v, number: 0} : v)),
        add: () => update((value) => [...value, {name: "new", number: 0}]),
        setName: ( index: number, name: String ) => update((value) => value.map((v, i) => i === index ? {...v, name: name} : v))
    }
}

export const values = initStore();