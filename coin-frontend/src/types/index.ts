import React from "react";
import { IconType } from "react-icons";

export interface ITeacher {
  id: number;
  name: string;
  lastName: string;
  year: number;
  phone: string;
}

export interface IAdmin {
  id: number;
  username: string;
  email: string;
  password: string;
  token: string;
}
export interface IAdminStore {
  admin: IAdmin;
  admins: IAdmin[];
  updateAdmin: IAdmin;
}

export interface IStore {
  admin: IAdminStore;
  modal: IModal;
  teacher: ITeacher[];
}

export interface ISidebarItem {
  icon: IconType;
  title: string;
  link: string;
}
export interface IModal {
  is_active: boolean;
  Form: string;
}

export interface ITable {
  head: string[];
  body: React.ReactNode;
  foot: React.ReactNode;
}

