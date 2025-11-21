import {
  Badge,
  Button,
  HStack,
  Icon,
  Input,
  InputGroup,
  Stack,
  Tabs,
  Text,
} from "@chakra-ui/react";
import { CloseCircle, RowHorizontal, RowVertical } from "iconsax-reactjs";
import React, { Dispatch, JSX, SetStateAction, useMemo, useRef } from "react";
import { LuSearch } from "react-icons/lu";
import { TAB_CONFIG } from "./todo-defaults";

interface TodoFilterProps {
  tasks: Task[];
  taskFilter: { tab: TaskStatus; search: string };
  handleChange: (tab: TaskStatus, search: string) => void;
  setLayout: Dispatch<SetStateAction<Layout>>;
  layout: Layout;
}

export function TodoFilter({
  tasks,
  taskFilter,
  handleChange,
  layout,
  setLayout,
}: TodoFilterProps) {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const totals = useMemo(() => {
    return {
      all: tasks.length,
      todo: tasks.filter((t) => t.status === "todo").length,
      "in-progress": tasks.filter((t) => t.status === "in-progress").length,
      completed: tasks.filter((t) => t.status === "completed").length,
    };
  }, [tasks]);
  const endElement = taskFilter.search ? (
    <Icon
      onClick={() => {
        handleChange(taskFilter.tab, "");
        inputRef.current?.focus();
      }}
      me="-2"
    >
      <CloseCircle size={20} />
    </Icon>
  ) : undefined;
  return (
    <Stack px={4} gap={4}>
      <HStack
        bg={{ base: "#E9F5F7", _dark: "#75C5C1CC" }}
        p={2}
        rounded={"xl"}
        justifyContent={"space-between"}
      >
        <InputGroup
          w={300}
          pr={0}
          endElement={endElement}
          startElement={<LuSearch size={18} />}
        >
          <Input
            placeholder="Search for To-Do"
            value={taskFilter.search}
            bg={"Background"}
            ref={inputRef}
            rounded={"xl"}
            size={"xl"}
            onChange={(e) => {
              handleChange(taskFilter.tab, e.currentTarget.value);
            }}
          />
        </InputGroup>
        <Tabs.Root size={"sm"} defaultValue={layout.view} variant="subtle">
          <Tabs.List bg="bg.subtle" rounded="l3" p="1">
            <Tabs.Trigger
              onClick={() => {
                handleChange("all", "");
                setLayout({ limit: 10, view: "kanban" });
              }}
              _focus={{ bg: "brand", color: "white" }}
              _selected={{ bg: "brand", color: "white" }}
              value="kanban"
            >
              <RowHorizontal size={20} />
            </Tabs.Trigger>
            <Tabs.Trigger
              onClick={() => {
                handleChange("all", "");
                setLayout({ limit: 10, view: "table" });
              }}
              _focus={{ bg: "brand", color: "white" }}
              _selected={{ bg: "brand", color: "white" }}
              value="table"
            >
              <RowVertical size={20} />
            </Tabs.Trigger>
            <Tabs.Indicator rounded="l2" />
          </Tabs.List>
        </Tabs.Root>
      </HStack>
      <HStack
        bg={"bg.muted"}
        transition={"all"}
        transitionTimingFunction={"ease-in-smooth"}
        transitionDuration={"slow"}
        display={layout.view == "table" ? "flex" : "none"}
        p={2}
        rounded={"xl"}
      >
        {TAB_CONFIG.map(({ key, label, color, icons, badgeBg }) => {
          const active = taskFilter.tab === key;

          return (
            <Button
              key={key}
              size="lg"
              onClick={() => handleChange(key, taskFilter.search)}
              variant="outline"
              bg={active ? color : "Background"}
              rounded="xl"
              gap={2}
            >
              <Icon>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  {icons.map((icon, i) =>
                    React.cloneElement(icon, {
                      key: i,
                      fill: active ? "white" : color,
                    })
                  )}
                </svg>
              </Icon>

              <Text fontSize="sm" color={active ? "white" : ""}>
                {label}
              </Text>

              <Badge size="lg" ml={4} bg={badgeBg} color="black">
                ({totals[key]})
              </Badge>
            </Button>
          );
        })}
      </HStack>
    </Stack>
  );
}
