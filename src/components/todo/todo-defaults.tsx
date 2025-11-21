import { JSX } from "react";

export const defaultUsers: User[] = [
  {
    name: "Uchiha Sasuke",
    src: "https://cdn.myanimelist.net/r/84x124/images/characters/9/131317.webp",
  },
  {
    name: "Baki Hanma",
    src: "https://cdn.myanimelist.net/r/84x124/images/characters/7/284129.webp",
  },
  {
    name: "Uchiha Chan",
    src: "https://cdn.myanimelist.net/r/84x124/images/characters/9/105421.webp",
  },
  {
    name: "Paul John",
    src: "https://bit.ly/sage-adebayo",
  },
];
export const intialData: Task[] = [
  {
    id: "1",
    name: "Build Design System",
    startDate: "04/06/2024",
    endDate: "04/06/2024",
    users: defaultUsers.slice(0, 3),
    priority: "Medium",
    status: "in-progress",
  },
  {
    id: "2",
    name: "Create Authentication Flow",
    startDate: "05/06/2024",
    endDate: "12/06/2024",
    users: defaultUsers.slice(0, 2),
    priority: "Important",
    status: "todo",
  },
  {
    id: "3",
    name: "Fix Payment Webhook",
    startDate: "06/06/2024",
    endDate: "08/06/2024",
    users: defaultUsers.slice(0, 1),
    priority: "Urgent",
    status: "completed",
  },
  {
    id: "4",
    name: "Optimize DB Queries",
    startDate: "01/06/2024",
    endDate: "11/06/2024",
    users: defaultUsers.slice(0, 4),
    priority: "Medium",
    status: "in-progress",
  },
  {
    id: "5",
    name: "Create Dashboard UI",
    startDate: "03/06/2024",
    endDate: "09/06/2024",
    users: defaultUsers.slice(0, 3),
    priority: "Important",
    status: "completed",
  },
  {
    id: "6",
    name: "Implement Push Notifications",
    startDate: "10/06/2024",
    endDate: "10/06/2024",
    users: defaultUsers.slice(0, 2),
    priority: "Medium",
    status: "todo",
  },
  {
    id: "7",
    name: "Add Activity Logs",
    startDate: "08/06/2024",
    endDate: "12/06/2024",
    users: defaultUsers.slice(0, 3),
    priority: "Urgent",
    status: "in-progress",
  },
];

export const TAB_CONFIG: {
  key: TaskStatus;
  label: string;
  color: string;
  icons: JSX.Element[];
  badgeBg: string;
}[] = [
  {
    key: "todo",
    label: "To Do",
    color: "#CFB7E8",
    badgeBg: "#F9F3FF",
    icons: [
      <path
        d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.19C2 19.83 4.17 22 7.81 22H16.19C19.83 22 22 19.83 22 16.19V7.81C22 4.17 19.83 2 16.19 2ZM9.97 14.9L7.72 17.15C7.57 17.3 7.38 17.37 7.19 17.37C7 17.37 6.8 17.3 6.66 17.15L5.91 16.4C5.61 16.11 5.61 15.63 5.91 15.34C6.2 15.05 6.67 15.05 6.97 15.34L7.19 15.56L8.91 13.84C9.2 13.55 9.67 13.55 9.97 13.84C10.26 14.13 10.26 14.61 9.97 14.9ZM9.97 7.9L7.72 10.15C7.57 10.3 7.38 10.37 7.19 10.37C7 10.37 6.8 10.3 6.66 10.15L5.91 9.4C5.61 9.11 5.61 8.63 5.91 8.34C6.2 8.05 6.67 8.05 6.97 8.34L7.19 8.56L8.91 6.84C9.2 6.55 9.67 6.55 9.97 6.84C10.26 7.13 10.26 7.61 9.97 7.9ZM17.56 16.62H12.31C11.9 16.62 11.56 16.28 11.56 15.87C11.56 15.46 11.9 15.12 12.31 15.12H17.56C17.98 15.12 18.31 15.46 18.31 15.87C18.31 16.28 17.98 16.62 17.56 16.62ZM17.56 9.62H12.31C11.9 9.62 11.56 9.28 11.56 8.87C11.56 8.46 11.9 8.12 12.31 8.12H17.56C17.98 8.12 18.31 8.46 18.31 8.87C18.31 9.28 17.98 9.62 17.56 9.62Z"
        fill="#CFB7E8"
      />,
    ],
  },
  {
    key: "in-progress",
    label: "InProgress",
    color: "#F6BE38",
    badgeBg: "#FBF4E4",
    icons: [
      <path
        d="M8.99987 14.22H3.91987C3.30987 14.22 2.74987 14.53 2.42987 15.05C2.10987 15.56 2.07987 16.17 2.33987 16.71C3.56987 19.23 5.78987 21.21 8.42987 22.14C8.60987 22.2 8.80987 22.24 8.99987 22.24C9.34987 22.24 9.69987 22.13 9.99987 21.92C10.4699 21.59 10.7499 21.05 10.7499 20.48L10.7599 15.98C10.7599 15.51 10.5799 15.07 10.2499 14.74C9.90987 14.41 9.46987 14.22 8.99987 14.22Z"
        fill="#F6BE38"
      />,
      <path
        d="M22.4799 9.6C21.3599 4.68 17.0499 1.25 11.9999 1.25C6.94993 1.25 2.63993 4.68 1.51993 9.6C1.39993 10.12 1.51993 10.65 1.85993 11.07C2.19993 11.49 2.69993 11.73 3.23993 11.73H20.7699C21.3099 11.73 21.8099 11.49 22.1499 11.07C22.4799 10.65 22.5999 10.11 22.4799 9.6Z"
        fill="#F6BE38"
      />,
      <path
        d="M20.06 14.27L15 14.26C14.53 14.26 14.09 14.44 13.76 14.77C13.43 15.1 13.25 15.54 13.25 16.01L13.26 20.49C13.26 21.06 13.54 21.6 14.01 21.93C14.31 22.14 14.66 22.25 15.01 22.25C15.2 22.25 15.39 22.22 15.57 22.15C18.19 21.23 20.41 19.26 21.64 16.77C21.9 16.24 21.87 15.62 21.56 15.12C21.23 14.58 20.67 14.27 20.06 14.27Z"
        fill="#F6BE38"
      />,
    ],
  },
  {
    key: "completed",
    label: "Completed",
    color: "#75C5C1",
    badgeBg: "#E9F5F7",
    icons: [
      <path
        d="M12 2C6.49 2 2 6.49 2 12C2 17.51 6.49 22 12 22C17.51 22 22 17.51 22 12C22 6.49 17.51 2 12 2ZM16.78 9.7L11.11 15.37C10.97 15.51 10.78 15.59 10.58 15.59C10.38 15.59 10.19 15.51 10.05 15.37L7.22 12.54C6.93 12.25 6.93 11.77 7.22 11.48C7.51 11.19 7.99 11.19 8.28 11.48L10.58 13.78L15.72 8.64C16.01 8.35 16.49 8.35 16.78 8.64C17.07 8.93 17.07 9.4 16.78 9.7Z"
        fill="white"
      />,
    ],
  },
];
