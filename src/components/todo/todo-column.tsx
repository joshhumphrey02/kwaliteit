import {
  Box,
  Flex,
  Text,
  Button,
  Badge,
  HStack,
  EmptyState,
  VStack,
} from "@chakra-ui/react";
import { LuPlus } from "react-icons/lu";
import { TodoCard } from "./todo-card";
import { Add, Task } from "iconsax-reactjs";

interface TaskColumnProps {
  title: string;
  icon: any;
  count: number;
  tasks: Task[];
  onAdd: () => void;
  color: string;
}

export const TodoColumn = ({
  title,
  icon,
  count,
  tasks,
  onAdd,
  color,
}: TaskColumnProps) => {
  return (
    <Box
      bg={color}
      borderRadius="xl"
      p={4}
      minW="350px"
      flex={1}
      h={"fit-content"}
      display="flex"
      flexDirection="column"
      gap={4}
    >
      <Flex align="center" justify="space-between">
        <HStack>
          <Button
            size={"sm"}
            variant="ghost"
            bg="Background"
            rounded={"lg"}
            gap={2}
          >
            {icon}
            <Text fontWeight="semibold">{title}</Text>
          </Button>
          <Badge size={"lg"} bg="Background">
            <Text color={{ base: "fg.muted", _dark: "white" }}>({count})</Text>
          </Badge>
        </HStack>

        <Button
          size="sm"
          aria-label="Add task"
          variant="subtle"
          rounded={"lg"}
          p={0}
          onClick={onAdd}
        >
          <Add size={24} />
        </Button>
      </Flex>

      {tasks?.length > 0 ? (
        <Flex direction="column" gap={2}>
          {tasks.map((task) => (
            <TodoCard key={task.id} task={task} />
          ))}
        </Flex>
      ) : (
        <EmptyState.Root w={"full"} bg="Background" rounded={"xl"}>
          <EmptyState.Content mx={"auto"}>
            <EmptyState.Indicator>
              <Task />
            </EmptyState.Indicator>
            <VStack textAlign="center">
              <EmptyState.Title>No Tasks Found</EmptyState.Title>
              <EmptyState.Description>
                Add tasks to see them here
              </EmptyState.Description>
            </VStack>
          </EmptyState.Content>
        </EmptyState.Root>
      )}

      <Button
        variant="ghost"
        rounded={"lg"}
        bg="Background"
        justifyContent="flex-start"
        onClick={onAdd}
      >
        <LuPlus />
        Add Task
      </Button>
    </Box>
  );
};
