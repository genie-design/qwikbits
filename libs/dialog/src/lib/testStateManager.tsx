import { component$, useStore, $ } from '@builder.io/qwik';

export default component$(() => {
  const store = useStore({ count: 0, countPayload: 1 });
  const incrementCount = $(() => (store.count += store.countPayload));
  return (
    <>
      <input
        onInput$={(ev) =>
          (store.countPayload = Number((ev.target as HTMLInputElement).value))
        }
        type="text"
        value={store.countPayload}
      ></input>
      <button onClick$={incrementCount}>{store.count}</button>
    </>
  );
});
