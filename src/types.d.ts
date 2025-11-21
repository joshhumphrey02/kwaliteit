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

type TaskPriority = "Medium" | "Important" | "Urgent" | "Low";

type Task = {
  id: string;
  name: string;
  startDate: string;
  endDate: string;
  users: User[];
  priority: TaskPriority;
  status: TaskStatus;
  description?: string;
};

type User = {
  name: string;
  src: string;
};
