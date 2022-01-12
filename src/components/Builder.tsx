import { Component, createMemo,Show, For } from "solid-js";
import { Data } from "./Data";

import {dndzone} from "solid-dnd-directive";
console.log(dndzone);

const Builder: Component<{data: Data, setData: (d: Data) => void}> = (props) => {
  const dataItems = createMemo(() => props.data.items)

  const handleDndConsider = (e: any) => {
    props.setData({
      ...props.data,
      items: e.detail.items
    })
  }
  const handleDndFinalize = (e: any) => {

  }

  return (
    <div>
      <div>
        {props.data.name}
      </div>
      <Show when={dataItems()}>
        <div
          //@ts-ignore
          use:dndzone={{items: dataItems}}
          on:consider={handleDndConsider} 
					 on:finalize={handleDndFinalize}
        >
          <For each={dataItems()}>
            {(item) => (
              <div>
                <Builder data={item} setData={(d) => {
                  props.setData({
                    ...props.data,
                    items: props.data.items!.map(
                      c => c.id === item.id ? d : c
                    )

                  })
                }} />
              </div>
            )}
          </For>
        </div>
      </Show>

    </div>
  );
};

export default Builder;