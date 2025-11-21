type TaskStatus = "todo" | "in-progress" | "completed" | "all";

type TaskDialogMode = "edit" | "new" | "view";

type LayoutView = "table" | "kanban";

type Layout = {
  limit: number;
  view: LayoutView;
};

type TaskFilter = {
  tab: TaskStatus;
  search: string;
};

type Task = {
  id: string;
  name: string;
  startDate: string;
  endDate: string;
  users: number;
  priority: "Medium" | "Important" | "Urgent" | "Low";
  status: TaskStatus;
  description?: string;
};
