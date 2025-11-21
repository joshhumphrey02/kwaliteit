"use client";

import { useTaskStore } from "@/store";
import { TodoDialog } from "../todo/todo-dialog";
import { useShallow } from "zustand/shallow";

export function GlobalModals() {
  const { closeTaskDialog, updateTask, addTask } = useTaskStore.getState();
  const taskDialog = useTaskStore(useShallow((s) => s.taskDialog));
  console.log(taskDialog);
  return (
    <>
      {taskDialog.isOpen && (
        <TodoDialog
          open={taskDialog.isOpen}
          onClose={closeTaskDialog}
          taskDialog={taskDialog}
          mode={taskDialog.mode}
          onEdit={updateTask}
          onAdd={addTask}
        />
      )}
    </>
  );
}
