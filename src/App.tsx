import React from "react";
import "./App.css";
import { SimpleCounter } from "./SimpleCounter";
import { FancyCounter } from "./FancyCounter";

export default function App() {
  const [value, setValue] = React.useState(0);
  const [shouldShowCounter, setShouldShowCounter] = React.useState(true);

  return (
    <div className="App">
      <button type="button" onClick={() => setShouldShowCounter(_ => !_)}>
        create/destroy counter
      </button>
      <button type="button" onClick={() => setValue(_ => _ + 1)}>
        increase external value
      </button>
      <h1>Simple Counter</h1>
      <div>{shouldShowCounter && <SimpleCounter externalValue={value} />}</div>
      <h1>Fancy Counter</h1>
      <div>{shouldShowCounter && <FancyCounter externalValue={value} />}</div>
    </div>
  );
}
