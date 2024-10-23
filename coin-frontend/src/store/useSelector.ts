import { useSelector } from "react-redux";
import { IStore } from "../types";

export const useAdmin = () => useSelector(({ admin }: IStore) => admin);
export const useModal = () => useSelector(({ modal }: IStore) => modal);
export const useTeacher = () => useSelector(({ teacher }: IStore) => teacher)