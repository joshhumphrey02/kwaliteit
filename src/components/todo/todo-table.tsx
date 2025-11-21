"use client";

import {
  Button,
  ButtonGroup,
  HStack,
  Icon,
  IconButton,
  Pagination,
  Stack,
  Table,
} from "@chakra-ui/react";
import { Flag, More } from "iconsax-reactjs";
import { LuChevronLeft, LuChevronRight } from "react-icons/lu";
import { TodoAvatar } from "./todo-avatar";
import { TodoActionDropdown } from "./todo-actions-dropdown";

const PRIORITY_COLORS: Record<string, string> = {
  Important: "red",
  Medium: "green",
  Urgent: "yellow",
};

interface TodoTableProps {
  tasks: Task[];
}

export function TodoTable({ tasks }: TodoTableProps) {
  return (
    <Stack width="full" px={4} gap="5">
      <Table.Root size="lg" variant="outline">
        <Table.ColumnGroup>
          <Table.Column htmlWidth="30%" />
          <Table.Column htmlWidth="25%" />
          <Table.Column htmlWidth="20%" />
          <Table.Column />
        </Table.ColumnGroup>
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeader borderRightWidth={1}>Name</Table.ColumnHeader>
            <Table.ColumnHeader borderRightWidth={1}>Date</Table.ColumnHeader>
            <Table.ColumnHeader borderRightWidth={1}>
              Assignee
            </Table.ColumnHeader>
            <Table.ColumnHeader>Priority</Table.ColumnHeader>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {tasks.map((item) => (
            <Table.Row key={item.id}>
              <Table.Cell>{item.name}</Table.Cell>
              <Table.Cell>
                {item.startDate} - {item.endDate}
              </Table.Cell>
              <Table.Cell>
                <TodoAvatar count={item.users} />
              </Table.Cell>
              <Table.Cell>
                <HStack w="full">
                  <HStack>
                    <Icon
                      color={PRIORITY_COLORS[item.priority]}
                      fill={PRIORITY_COLORS[item.priority]}
                    >
                      <Flag />
                    </Icon>
                    {item.priority}
                  </HStack>
                  <TodoActionDropdown task={item} />
                </HStack>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>

      <Pagination.Root count={tasks.length * 5} pageSize={5} page={1}>
        <ButtonGroup variant="ghost" size="sm" wrap="wrap">
          <Pagination.PrevTrigger asChild>
            <IconButton>
              <LuChevronLeft />
            </IconButton>
          </Pagination.PrevTrigger>

          <Pagination.Items
            render={(page) => (
              <IconButton variant={{ base: "ghost", _selected: "outline" }}>
                {page.value}
              </IconButton>
            )}
          />

          <Pagination.NextTrigger asChild>
            <IconButton>
              <LuChevronRight />
            </IconButton>
          </Pagination.NextTrigger>
        </ButtonGroup>
      </Pagination.Root>
    </Stack>
  );
}
