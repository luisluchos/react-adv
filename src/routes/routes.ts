
import { lazy, LazyExoticComponent } from "react";
import NoLazy from "../01-lazyload/pages/NoLazy";

//import { LazyPages1, LazyPages2, LazyPages3 } from "../01-lazyload/pages";

type JSXComponent = () => JSX.Element;
interface Route {
    to:string,
    path:string,
    Component:LazyExoticComponent<JSXComponent> | JSXComponent ,
    name: string
}

const LazyLayout = lazy(() => import("../01-lazyload/layout/lazyLayout"));



export const routes:Route[] = [
  { to: "/lazyLoad/", path: "/lazyLoad/*", Component: LazyLayout, name: "LazyLayout-dashboard" },
  { to: "/no-lazy", path: "no-lazy", Component: NoLazy, name: "Lazy-2" },
];
