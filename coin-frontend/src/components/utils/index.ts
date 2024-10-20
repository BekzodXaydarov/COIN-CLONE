import { ISidebarItem } from "../../types";
import {
  MdAdminPanelSettings,
  MdGroup,
  MdSubject,
} from "react-icons/md";
import { FaUserGraduate } from "react-icons/fa";
import { CiUser } from "react-icons/ci";

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

export { sidebarItem };
