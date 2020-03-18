import React, { useRef, useEffect, useState } from "react";

export const SimpleCounter: React.FC<{ externalValue: number }> = ({
  externalValue,
}) => {
  const [internalValue, setInternalValue] = useState(0);
  console.log(`render update - prop: ${externalValue} state: ${internalValue}`);

  const propRef = useRef(externalValue);
  const stateRef = useRef(internalValue);

  useEffect(() => {
    console.log(`update state ${internalValue}`);
    stateRef.current = internalValue;
  }, [internalValue]);

  useEffect(() => {
    console.log(`update prop ${externalValue}`);
    propRef.current = externalValue;
  }, [externalValue]);

  useEffect(function afterRender() {
    console.log(
      `after update - prop: ${propRef.current} state: ${stateRef.current}`
    );
    return function beforeLeaving() {
      console.log(
        `before leaving - prop: ${propRef.current} state: ${stateRef.current}`
      );
    };
  }, []);

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
