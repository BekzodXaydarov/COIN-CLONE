import { ISidebarItem } from "../../types";
import { MdAdminPanelSettings, MdGroup, MdSubject } from "react-icons/md";
import { FaUserGraduate } from "react-icons/fa";
import { CiUser } from "react-icons/ci";
import { createForm, updateForm } from "../../pages/Admin/Form/AdminForm";

export const api = "http://localhost:8989/api";

const sidebarItem: ISidebarItem[] = [
  {
    icon: MdAdminPanelSettings,
    title: "Admin",
    link: "/",
  },
  {
    icon: FaUserGraduate,
    title: "Teacher",
    link: "/teacher",
  },
  {
    icon: CiUser,
    title: "Student",
    link: "/student",
  },
  {
    icon: MdGroup,
    title: "Group",
    link: "/group",
  },
  {
    icon: MdSubject,
    title: "Subject",
    link: "/subject",
  },
];

const forms = [
  {
    name: "createAdmin",
    form: createForm,
  },
  {
    name: "updateAdmin",
    form: updateForm
  }
];

export { sidebarItem, forms };
