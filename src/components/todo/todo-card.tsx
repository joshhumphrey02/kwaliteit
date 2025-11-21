import { Box, Flex, Text, Icon } from "@chakra-ui/react";
import { TodoAvatar } from "./todo-avatar";
import { Calendar, Flag, User } from "iconsax-reactjs";
import { TodoActionDropdown } from "./todo-actions-dropdown";

export const TodoCard = ({ task }: { task: Task }) => {
  return (
    <Box
      bg="Background"
      borderRadius="xl"
      p={4}
      boxShadow="xs"
      _hover={{ boxShadow: "md" }}
      cursor="pointer"
    >
      <Flex justifyContent={"space-between"}>
        <Text fontWeight="semibold" fontSize="sm" mb={3}>
          {task.name}
        </Text>
        <TodoActionDropdown task={task} />
      </Flex>

      <Flex align="center" gap={2} fontSize="sm" color="fg.muted" mb={2}>
        <Icon size={"sm"} as={Calendar} />
        <Text>
          {task.startDate} - {task.endDate}
        </Text>
      </Flex>

      <Flex align="center" gap={2} fontSize="sm" color="fg.muted" mb={2}>
        <Icon size={"sm"} as={User} />
        <TodoAvatar size="xs" count={3} />
      </Flex>

      <Flex align="center" gap={2}>
        <Icon
          as={Flag}
          size={"sm"}
          color={getPriorityColor(task.priority)}
          fill={getPriorityColor(task.priority)}
        />
        <Text fontSize="sm">{task.priority}</Text>
      </Flex>
    </Box>
  );
};

const getPriorityColor = (type: Task["priority"]) => {
  switch (type) {
    case "Urgent":
      return "red.400";
    case "Important":
      return "orange.400";
    case "Medium":
      return "blue.400";
    case "Low":
      return "gray.400";
    default:
      return "gray.400";
  }
};
