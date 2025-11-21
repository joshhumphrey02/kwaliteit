import { Box, Flex, Text, Button, Badge, HStack } from "@chakra-ui/react";
import { LuPlus } from "react-icons/lu";
import { TodoCard } from "./todo-card";
import { Add } from "iconsax-reactjs";

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

      <Flex direction="column" gap={2}>
        {tasks.map((task) => (
          <TodoCard key={task.id} task={task} />
        ))}
      </Flex>

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
