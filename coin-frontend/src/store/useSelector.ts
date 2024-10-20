import { useSelector } from "react-redux";
import { IStore } from "../types";


export const useAdmin = () => useSelector(({admin}:IStore)=>admin)