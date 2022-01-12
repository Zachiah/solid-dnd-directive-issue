import { Component, createSignal } from "solid-js";
import Builder from "./Builder";
import { Data, getId } from "./Data";

const App: Component = () => {
  const [data, setData] = createSignal<Data>({
    items: [
      {
        name: "Hello",
        id: getId(),
        items: [
          {
            name: "Hi there",
            id: getId()
          }
        ]
      },
      {
        name: "Hello2",
        id: getId()
      }
    ],
    name: "Hi there",
    id: getId()
  });

  return (
    <>
      <Builder data={data()} setData={setData} />
    </>
  );
};

export default App;
