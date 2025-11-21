import {
  Call,
  Category,
  Folder2,
  Icon,
  MenuBoard,
  MessageEdit,
  Note,
  NotificationBing,
  People,
  Stickynote,
  TaskSquare,
} from "iconsax-reactjs";
import { LuNewspaper } from "react-icons/lu";

export const sideBarData = [
  {
    label: "Home",
    icon: Category,
    link: "#",
  },
  {
    label: "MKVanBinnen",
    icon: Stickynote,
    link: "#",
  },
  {
    label: "Document Management",
    icon: Folder2,
    link: "#",
  },
  {
    label: "Patient Information",
    icon: People,
    link: "#",
  },
  {
    label: "Agenda",
    icon: Note,
    link: "#",
  },
  {
    label: "My Department",
    icon: LuNewspaper,
    link: "#",
    subs: [
      {
        label: "Home",
        link: "#",
      },
      {
        label: "Members",
        link: "#",
      },
      {
        label: "To - Do",
        link: "#",
        active: true,
      },
      {
        label: "Form Task",
        link: "#",
      },
      {
        label: "Agenda",
        link: "#",
      },
      {
        label: "Follow up system",
        link: "#",
      },
      {
        label: "Group Settings",
        link: "#",
        isDropdown: true,
      },
    ],
  },
  {
    label: "Phone numbers",
    icon: Call,
    link: "#",
  },
  {
    label: "My to do Protocols",
    icon: TaskSquare,
    link: "#",
  },
  {
    label: "My Notifications",
    icon: NotificationBing,
    link: "#",
  },
  {
    label: "Knowledge Base",
    icon: MenuBoard,
    link: "#",
  },
  {
    label: "Super Admin",
    icon: MessageEdit,
    link: "#",
  },
  {
    label: "Admin",
    icon: Category,
    link: "#",
    isDropdown: true,
    subs: [
      {
        label: "Agenda",
        link: "#",
      },
      {
        label: "News",
        link: "#",
      },
      {
        label: "Poll",
        link: "#",
      },
      {
        label: "Department Rules",
        link: "#",
      },
      {
        label: "Follow up system",
        link: "#",
      },
    ],
  },
] as SidebarDataProps[];

export type SidebarDataProps = {
  label: string;
  icon: Icon;
  link: string;
  subs: {
    label: string;
    link: string;
    isDropdown?: boolean;
    active?: boolean;
  }[];
  isDropdown?: undefined;
};
