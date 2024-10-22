import React from "react";
import { IconType } from "react-icons";
export interface IAdmin {
  id: number;
  username: string;
  email: string;
  password: string;
  is_active: boolean | string;
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

