import createLocalStorageSignal from "../hooks/createLocalStorageSignal";
import { ProductRecord } from "../ProductRecord";

export const [cart, setCart] = createLocalStorageSignal<ProductRecord[]>('cart',[]);