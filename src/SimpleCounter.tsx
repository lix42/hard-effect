import React, { useRef, useEffect, useState } from "react";

export const SimpleCounter: React.FC<{ externalValue: number }> = ({
  externalValue,
}) => {
  const [internalValue, setInternalValue] = useState(0);
  console.log(`render update - prop: ${externalValue} state: ${internalValue}`);

  useEffect(
    function afterRender() {
      console.log(
        `after update - prop: ${externalValue} state: ${internalValue}`
      );
      return function beforeLeaving() {
        console.log(
          `before leaving - prop: ${externalValue} state: ${internalValue}`
        );
      };
    },
    [externalValue, internalValue]
  );

  return (
    <>
      <button type="button" onClick={() => setInternalValue(_ => _ + 1)}>
        increase internal value
      </button>
      <div>
        Prop: <h2>{externalValue}</h2>
      </div>
      <div>
        State: <h2>{internalValue}</h2>
      </div>
    </>
  );
};
