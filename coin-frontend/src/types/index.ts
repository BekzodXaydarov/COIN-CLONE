import React from "react";
import { IconType } from "react-icons";

export interface IAdmin {
  id: number;
  username: string;
  email: string;
  password: string;
  is_active: boolean;
}

export interface IStore {
  admin: IAdmin;
  modal: IModal;
}

export interface ISidebarItem {
  icon: IconType;
  title: string;
  link: string;
}
export interface IModal {
  is_active: boolean;
  Form: React.ReactNode;
}

export interface ITable {
  head: string[];
  body: React.ReactNode;
}
