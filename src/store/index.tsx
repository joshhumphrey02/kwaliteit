import { intialData } from "@/components/todo/todo-defaults";
import { create, StateCreator } from "zustand";
import { persist, PersistOptions } from "zustand/middleware";

interface State {
  tasks: Task[];
  taskDialog: {
    isOpen: boolean;
    type: TaskStatus;
    activeTask?: Task;
    mode: TaskDialogMode;
  };
}
interface Actions {
  addTask: (task: Omit<Task, "id">) => void;
  openNewTaskDialog: (
    type: TaskStatus,
    mode?: TaskDialogMode,
    task?: Task
  ) => void;
  updateTask: (id: string, data: Partial<Task>) => void;
  deleteTask: (id: string) => void;
  setTasks: (tasks: Task[]) => void;
  closeTaskDialog: () => void;
}

type StateAndActions = State & Actions;

type MyTaskStore = (
  config: StateCreator<StateAndActions>,
  options: PersistOptions<StateAndActions>
) => StateCreator<StateAndActions>;

export const useTaskStore = create<StateAndActions>()(
  (persist as MyTaskStore)(
    (set, get) => ({
      tasks: intialData,
      taskDialog: {
        isOpen: false,
        type: "todo",
        activeTask: undefined,
        mode: "new",
      },
      addTask: (task) =>
        set((state) => ({
          tasks: [
            ...state.tasks,
            {
              ...task,
              id: (get().tasks.length + 1).toString(),
            },
          ],
        })),

      updateTask: (id, data) =>
        set((state) => ({
          tasks: state.tasks.map((task) =>
            task.id === id ? { ...task, ...data } : task
          ),
        })),

      deleteTask: (id) =>
        set((state) => ({
          tasks: state.tasks.filter((task) => task.id !== id),
        })),

      setTasks: (tasks) => set({ tasks }),
      openNewTaskDialog: (type, mode, activeTask) =>
        set({
          taskDialog: {
            mode: mode || "new",
            type,
            isOpen: true,
            activeTask,
          },
        }),
      closeTaskDialog: () =>
        set({
          taskDialog: {
            mode: "new",
            type: "todo",
            isOpen: false,
            activeTask: undefined,
          },
        }),
    }),
    {
      name: "task-storage",
      partialize: (state) => state,
    }
  )
);
