
 export  interface Product {
    id: string;
    name: string;
    img?: string;
  }
  
  export interface ProductContextProps {
    product: Product;
    counter: number;
    increaseBy: (value:number) => void;
  }

  export interface onChangeArgs {
    product: Product;
    count: number;
  }

  export interface InitialValues {
    count?:number;
    maxCount?:number;
  }