"use client";

import { Flex, Icon } from "@chakra-ui/react";
import { TodoColumn } from "./todo-column";
import { useTaskStore } from "@/store";
import { TAB_CONFIG } from "./todo-defaults";
import React from "react";
import { useColorMode } from "../ui/color-mode";
interface KanbanBoardProps {
  tasks: Task[];
}

export const TodoKanbanBoard = ({ tasks }: KanbanBoardProps) => {
  const { colorMode } = useColorMode();
  return (
    <Flex gap={6} overflowX="auto" p={4}>
      {TAB_CONFIG.map((tab) => (
        <TodoColumn
          key={tab.key}
          title={tab.label}
          icon={
            <Icon>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                {tab.icons.map((icon) =>
                  React.cloneElement(icon, {
                    fill: colorMode == "dark" ? "white" : tab.color,
                  })
                )}
              </svg>
            </Icon>
          }
          color={colorMode == "dark" ? tab.color : tab.badgeBg}
          count={tasks.filter((t) => t.status === tab.key).length}
          tasks={tasks.filter((t) => t.status === tab.key)}
          onAdd={() => useTaskStore.getState().openNewTaskDialog("todo")}
        />
      ))}
    </Flex>
  );
};
