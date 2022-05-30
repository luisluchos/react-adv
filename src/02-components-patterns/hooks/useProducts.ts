import { useEffect, useRef, useState } from "react";
import { InitialValues, onChangeArgs, Product } from "../interfaces/interfaces";

interface useProductArgs {
  product: Product;
  onChange?: (args: onChangeArgs) => void;
  value?: number;
  initialValues?: InitialValues;
}

export const useProduct = ({ onChange, product, value = 5, initialValues }: useProductArgs) => {
  const [counter, setCounter] = useState(initialValues?.count || value);
  const isMounted = useRef(false);

  console.log(isMounted.current);

  const increaseBy = (value: number) => {
    let newValue = Math.max(counter + value, 0);

    if (initialValues?.maxCount) {
      newValue = Math.min(newValue, initialValues.maxCount);
    }

    setCounter(newValue);

    onChange && onChange({ count: newValue, product }); //el operador & no se va a lazar si es falso
  };

  const reset = () => {
    setCounter(initialValues?.count || value);
  };

  useEffect(() => {
    isMounted.current = true;
  }, []);

  useEffect(() => {
    if (isMounted.current) return;
    setCounter(value);
  }, [value]);

  return {
    counter,
    increaseBy,
    reset,
    isMaxCountReached: !!initialValues?.count && initialValues.maxCount === counter, // clase 103
    maxCount: initialValues?.maxCount,
  };
};
