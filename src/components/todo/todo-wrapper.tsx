"use client";
import { Stack, useFilter } from "@chakra-ui/react";
import { TodoHeader } from "./todo-header";
import { TodoFilter } from "./todo-filter";
import { TodoTable } from "./todo-table";
import { useTaskStore } from "@/store";
import { useMemo, useState } from "react";
import { TodoKanbanBoard } from "./todo-kanban-board";

export function TodoWrapper() {
  const [taskFilter, setTaskFilter] = useState<TaskFilter>({
    tab: "all",
    search: "",
  });
  const [layout, setLayout] = useState<Layout>({
    limit: 10,
    view: "table",
  });
  const { tasks } = useTaskStore((s) => s);

  const { contains } = useFilter({ sensitivity: "base" });

  const handleChange = (tab: TaskStatus, search: string) => {
    setTaskFilter({
      tab,
      search,
    });
  };
  const filtered = useMemo(() => {
    return tasks
      .filter((t) =>
        taskFilter.tab !== "all" ? t.status == taskFilter.tab : true
      )
      .filter((t) => contains(t.name, taskFilter.search));
  }, [tasks, taskFilter]);
  return (
    <Stack bg={"Background"} py={6} gap={4} rounded={"2xl"}>
      <TodoHeader />
      <TodoFilter
        tasks={tasks}
        handleChange={handleChange}
        taskFilter={taskFilter}
        setLayout={setLayout}
        layout={layout}
      />
      {layout.view == "table" ? (
        <TodoTable tasks={filtered} />
      ) : (
        <TodoKanbanBoard tasks={filtered} />
      )}
    </Stack>
  );
}
