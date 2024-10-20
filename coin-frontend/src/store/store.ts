import { configureStore } from "@reduxjs/toolkit";
import { IStore } from "../types";
import Admin from "./admin/admin"


export const store = configureStore<IStore>({
    reducer:{
        admin: Admin
    }
})