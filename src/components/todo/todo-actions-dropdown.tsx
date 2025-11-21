"use client";

import { useTaskStore } from "@/store";
import { Button, Icon, Menu, Portal, Text } from "@chakra-ui/react";
import {
  ArrowRight2,
  Check,
  Clock,
  Edit2,
  More,
  ProgrammingArrow,
  Trash,
} from "iconsax-reactjs";

export const TodoActionDropdown = ({ task }: { task: Task }) => {
  const deleteTask = useTaskStore((s) => s.deleteTask);
  const updateTask = useTaskStore((s) => s.updateTask);
  const openNewTaskDialog = useTaskStore((s) => s.openNewTaskDialog);

  const updateStatus = (status: "todo" | "in-progress" | "completed") => {
    updateTask(task.id, { status });
  };

  return (
    <Menu.Root>
      <Menu.Trigger asChild>
        <Button ml="auto" size="md" px={2} variant="subtle" rounded="lg">
          <More />
        </Button>
      </Menu.Trigger>

      <Portal>
        <Menu.Positioner>
          <Menu.Content w={150} borderRadius="xl" py={2}>
            <Menu.Item
              value="edit"
              onClick={() => openNewTaskDialog(task.status, "edit", task)}
            >
              <Icon size={"sm"} as={Edit2} mr={2} />
              <Text fontSize={"sm"}>Edit Task</Text>
            </Menu.Item>

            <Menu.Root positioning={{ placement: "right-start", gutter: 2 }}>
              <Menu.TriggerItem>
                <Icon size={"sm"} as={Clock} mr={2} />
                <Text fontSize={"sm"}>Update</Text>
                <Icon size={"sm"} as={ArrowRight2} ml={"auto"} />
              </Menu.TriggerItem>

              <Portal>
                <Menu.Positioner>
                  <Menu.Content borderRadius="lg">
                    <Menu.Item
                      value="todo"
                      onClick={() => updateStatus("todo")}
                    >
                      <Icon size={"sm"} as={Clock} mr={2} />
                      <Text fontSize={"sm"}>Todo</Text>
                    </Menu.Item>

                    <Menu.Item
                      value="in-progress"
                      onClick={() => updateStatus("in-progress")}
                    >
                      <Icon size={"sm"} as={ProgrammingArrow} mr={2} />
                      <Text fontSize={"sm"}>In Progress</Text>
                    </Menu.Item>

                    <Menu.Item
                      value="completed"
                      onClick={() => updateStatus("completed")}
                    >
                      <Icon size={"sm"} as={Check} mr={2} />
                      <Text fontSize={"sm"}>Completed</Text>
                    </Menu.Item>
                  </Menu.Content>
                </Menu.Positioner>
              </Portal>
            </Menu.Root>

            <Menu.Item
              value="delete"
              onClick={() => deleteTask(task.id)}
              color="red.500"
            >
              <Icon size={"sm"} as={Trash} mr={2} />
              <Text fontSize={"sm"}>Delete</Text>
            </Menu.Item>
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  );
};
