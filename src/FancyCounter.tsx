import React, { useEffect, useState, useCallback } from "react";
import { isValuePrime } from "./util";

export const FancyCounter: React.FC<{ externalValue: number }> = ({
  externalValue,
}) => {
  const [internalValue, setInternalValue] = useState(externalValue);
  const [isPrime, setIsPrime] = useState(isValuePrime(internalValue));

  const checkIsPrime = useCallback((value: number) => {
    const result = isValuePrime(value);
    setIsPrime(result);
  }, []);

  useEffect(() => {
    setInternalValue(externalValue);
    checkIsPrime(externalValue);
  }, [checkIsPrime, externalValue]);

  useEffect(() => {
    checkIsPrime(internalValue);
  }, [checkIsPrime, internalValue]);

  return (
    <>
      <button type="button" onClick={() => setInternalValue(_ => _ + 1)}>
        increase internal value
      </button>
      <div>
        value: <h2>{internalValue}</h2>
        <h3>
          {internalValue} is {!isPrime && "not"} prime
        </h3>
      </div>
    </>
  );
};
