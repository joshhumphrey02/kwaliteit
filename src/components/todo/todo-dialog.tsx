import {
  Badge,
  Button,
  CloseButton,
  Combobox,
  DataList,
  Dialog,
  Flex,
  HStack,
  Icon,
  Image,
  Input,
  Menu,
  Portal,
  Separator,
  Span,
  Stack,
  Text,
  Textarea,
  useFilter,
  useListCollection,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { defaultUsers, TAB_CONFIG } from "./todo-defaults";
import {
  AddCircle,
  Calendar,
  DocumentText,
  Flag,
  Slash,
  Status,
  UserCirlceAdd,
} from "iconsax-reactjs";
import { useColorMode } from "../ui/color-mode";
import { TodoAvatar } from "./todo-avatar";
import { format } from "date-fns";
import { CalendarCard } from "../ui/calender";
import { toast } from "sonner";

interface TaskDialogProps {
  open: boolean;
  onClose: () => void;
  onEdit: (id: string, task: Partial<Task>) => void;
  onAdd: (task: Omit<Task, "id">) => void;
  mode: TaskDialogMode;
  taskDialog: {
    isOpen: boolean;
    type: TaskStatus;
    activeTask?: Task;
    mode: TaskDialogMode;
  };
}

const PRIORITY_CONFIG = [
  { key: "Urgent", label: "Urgent", color: "red.400" },
  { key: "Important", label: "Important", color: "orange.400" },
  { key: "Medium", label: "Medium", color: "blue.400" },
  { key: "Low", label: "Low", color: "gray.400" },
] as {
  key: TaskPriority;
  label: string;
  color: string;
}[];

export function TodoDialog({
  open,
  onClose,
  onEdit,
  onAdd,
  taskDialog,
}: TaskDialogProps) {
  const task = taskDialog.activeTask;
  const isEdit = Boolean(task);

  const [form, setForm] = useState<Partial<Omit<Task, "id">>>({
    name: task?.name || "",
    status: task?.status || taskDialog.type,
    priority: task?.priority,
    startDate: task?.startDate || new Date(Date.now()).toString(),
    endDate: task?.endDate || "",
    description: task?.description || "",
    users: task?.users || [],
  });
  function validateForm() {
    if (!form.name?.trim()) return "Task name is required";
    if (!form.status) return "Status is required";
    if (!form.priority) return "Priority is required";
    if (!form.startDate) return "Start date is required";
    if (!form.endDate) return "End date is required";
    if (new Date(form.endDate) < new Date(form.startDate))
      return "End date cannot be earlier than start date";
    if (!form.description?.trim()) return "Description is required";
    if (!form.users || form.users.length === 0)
      return "At least one user must be assigned";
    return null;
  }

  function handleSave() {
    const error = validateForm();
    if (error) return toast.warning(error);

    if (isEdit && task) {
      onEdit(task.id, form);
    } else {
      onAdd(form as any);
    }

    onClose();
  }

  return (
    <Dialog.Root
      role="alertdialog"
      open={open}
      onOpenChange={onClose}
      placement="center"
    >
      <Portal>
        <Dialog.Backdrop />

        <Dialog.Positioner>
          <Dialog.Content rounded="xl" p={4} maxW="1/2" bg="Background">
            <TaskDialogHeader form={form} setForm={setForm} />

            <Dialog.Body pb={8}>
              <DataList.Root maxW="60%" orientation="horizontal">
                <DataList.Item>
                  <TaskDialogStatus form={form} setForm={setForm} />
                </DataList.Item>
                <DataList.Item>
                  <TaskDialogDate form={form} setForm={setForm} />
                </DataList.Item>

                <DataList.Item>
                  <TaskDialogPriority form={form} setForm={setForm} />
                </DataList.Item>

                <DataList.Item>
                  <TaskDialogAssignees form={form} setForm={setForm} />
                </DataList.Item>
              </DataList.Root>

              <Stack mt={6} gap={6}>
                <TaskDialogDescription form={form} setForm={setForm} />
              </Stack>
            </Dialog.Body>

            <Dialog.Footer gap={3}>
              <Dialog.ActionTrigger asChild>
                <Button variant="outline" rounded="lg">
                  Cancel
                </Button>
              </Dialog.ActionTrigger>

              <Button rounded="lg" onClick={handleSave}>
                {isEdit ? "Update Task" : "Create Task"}
              </Button>
            </Dialog.Footer>

            <Dialog.CloseTrigger asChild>
              <CloseButton size="sm" position="absolute" top={3} right={3} />
            </Dialog.CloseTrigger>
          </Dialog.Content>
        </Dialog.Positioner>
      </Portal>
    </Dialog.Root>
  );
}

interface Props {
  form: Partial<Omit<Task, "id">>;
  setForm: React.Dispatch<React.SetStateAction<Partial<Omit<Task, "id">>>>;
}

export const TaskDialogHeader = ({ form, setForm }: Props) => (
  <Dialog.Header>
    <Input
      placeholder="Task Name"
      size="xl"
      rounded="lg"
      fontSize="2xl"
      border="none"
      outline={"none"}
      p={0}
      mb={4}
      value={form.name}
      onChange={(e) => setForm((prev) => ({ ...prev, name: e.target.value }))}
    />
  </Dialog.Header>
);

export const TaskDialogStatus = ({ form, setForm }: Props) => {
  const { colorMode } = useColorMode();

  const statuses = TAB_CONFIG;
  const selected = statuses.find((s) => s.key === form.status);

  return (
    <Flex w={"full"} gap={6}>
      <Flex w={"1/2"} gap={4} alignItems="center">
        <Status />
        <Text fontSize="sm">Status</Text>
      </Flex>

      <Menu.Root>
        <Menu.Trigger asChild>
          <Badge
            rounded="md"
            py={1}
            px={2}
            bg={{
              base: selected?.badgeBg,
              _dark: selected?.color,
            }}
          >
            {selected && (
              <Icon>
                <svg width="24" height="24" fill="none">
                  {selected.icons.map((icon, i) =>
                    React.cloneElement(icon, { key: i, fill: "white" })
                  )}
                </svg>
              </Icon>
            )}
            <Text
              color={colorMode === "dark" ? "white" : selected?.color}
              fontWeight="medium"
            >
              {selected?.label || "Select status"}
            </Text>
          </Badge>
        </Menu.Trigger>

        <Menu.Positioner>
          <Menu.Content w={180} borderRadius="lg" py={2}>
            {statuses.map((s) => (
              <Menu.Item
                key={s.key}
                value={s.key}
                onClick={() => setForm((prev) => ({ ...prev, status: s.key }))}
              >
                <Flex align="center" gap={3}>
                  <Icon>
                    <svg width="24" height="24" fill="none">
                      {s.icons.map((icon, i) =>
                        React.cloneElement(icon, { key: i })
                      )}
                    </svg>
                  </Icon>
                  <Text>{s.label}</Text>
                </Flex>
              </Menu.Item>
            ))}
          </Menu.Content>
        </Menu.Positioner>
      </Menu.Root>
    </Flex>
  );
};
export const TaskDialogDate = ({ form, setForm }: Props) => {
  return (
    <Flex w={"full"} gap={6}>
      <Flex w={"1/2"} gap={4} alignItems="center">
        <Calendar />
        <Text fontSize="sm">Dates</Text>
      </Flex>

      <Menu.Root>
        <Menu.Trigger asChild>
          <Badge rounded="md">
            {form?.endDate ? (
              <Text fontWeight="medium" fontSize={"sm"}>
                {format(new Date(form?.startDate!), "dd/MM/yyyy")} -
                {format(new Date(form?.endDate), "dd/MM/yyyy")}
              </Text>
            ) : (
              <Text>Select Date</Text>
            )}
          </Badge>
        </Menu.Trigger>

        <Menu.Positioner>
          <Menu.Content borderRadius="lg" py={2}>
            <CalendarCard
              mode="range"
              defaultMonth={new Date(form?.startDate || Date.now())}
              selected={{
                from: new Date(form?.startDate || Date.now()),
                to: new Date(form?.endDate || Date.now()),
              }}
              onSelect={(dates) => {
                if (!dates) return;
                setForm((prev) => ({
                  ...prev,
                  startDate: dates.from?.toString(),
                  endDate: dates.to?.toString(),
                }));
              }}
              numberOfMonths={2}
              className="rounded-lg border shadow-sm"
            />
          </Menu.Content>
        </Menu.Positioner>
      </Menu.Root>
    </Flex>
  );
};

export const TaskDialogPriority = ({ form, setForm }: Props) => {
  const selected = PRIORITY_CONFIG.find((p) => p.key === form.priority);

  return (
    <Flex w={"full"} gap={6}>
      <Flex w={"1/2"} gap={4} alignItems="center">
        <Flag />
        <Text fontSize="sm">Priority</Text>
      </Flex>

      <Menu.Root>
        <Menu.Trigger>
          <Text fontSize={"md"} color={selected?.color}>
            {selected?.label || "Select Priority"}
          </Text>
        </Menu.Trigger>

        <Menu.Positioner>
          <Menu.Content w={150} borderRadius="lg">
            {PRIORITY_CONFIG.map((p) => (
              <Menu.Item
                key={p.key}
                value={p.key}
                onClick={() =>
                  setForm((prev) => ({ ...prev, priority: p.key }))
                }
              >
                <Icon size={"sm"} color={p.color} fill={p.color}>
                  <Flag />
                </Icon>
                <Text>{p.label}</Text>
              </Menu.Item>
            ))}
            <Separator />
            <Menu.Item
              value={"clear"}
              onClick={() =>
                setForm((prev) => ({ ...prev, priority: undefined }))
              }
            >
              <Icon size={"sm"}>
                <Slash />
              </Icon>
              <Text>Clear</Text>
            </Menu.Item>
          </Menu.Content>
        </Menu.Positioner>
      </Menu.Root>
    </Flex>
  );
};

export const TaskDialogAssignees = ({ form, setForm }: Props) => {
  const [open, setOpen] = useState(false);
  const { contains } = useFilter({ sensitivity: "base" });

  const { collection, filter } = useListCollection({
    initialItems: defaultUsers,
    filter: contains,
  });
  return (
    <Flex w={"full"} gap={6}>
      <Flex w={"1/2"} gap={4} alignItems="center">
        <UserCirlceAdd />
        <Span>Assignees</Span>
      </Flex>

      <HStack>
        <Menu.Root
          open={open}
          onOpenChange={(val) => setOpen(val.open)}
          positioning={{ placement: "bottom" }}
        >
          <HStack justifyContent={"space-between"} gap={4}>
            {form?.users && form.users?.length > 0 ? (
              <TodoAvatar users={form.users} />
            ) : (
              <Text fontSize={"sm"}>Select Assignee</Text>
            )}
            <Menu.Trigger>
              <Icon>
                <AddCircle />
              </Icon>
            </Menu.Trigger>
          </HStack>

          <Menu.Positioner>
            <Menu.Content w={250} borderRadius="lg">
              <Combobox.Root
                collection={collection}
                onInputValueChange={(e) => filter(e.inputValue)}
              >
                <Combobox.Control>
                  <Combobox.Input placeholder="Search for user" />
                  <Combobox.IndicatorGroup>
                    <Combobox.ClearTrigger />
                    <Combobox.Trigger />
                  </Combobox.IndicatorGroup>
                </Combobox.Control>
                <Combobox.Positioner>
                  <Combobox.Content>
                    <Combobox.Empty>No users found</Combobox.Empty>
                    {collection.items.map((item) => (
                      <Combobox.Item
                        onClick={() => {
                          setForm((prev) => ({
                            ...prev,
                            users: [...(prev?.users || []), item],
                          }));
                          setOpen(false);
                        }}
                        key={item.name}
                        item={item}
                      >
                        <Image boxSize="5" src={item.src} alt={item.name} />
                        <Span flex="1">{item.name}</Span>
                      </Combobox.Item>
                    ))}
                  </Combobox.Content>
                </Combobox.Positioner>
              </Combobox.Root>
            </Menu.Content>
          </Menu.Positioner>
        </Menu.Root>
      </HStack>
    </Flex>
  );
};

export const TaskDialogDescription = ({ form, setForm }: Props) => (
  <Flex direction={"column"} w={"full"} gap={4}>
    <Flex gap={4} alignItems="center">
      <DocumentText />
      <Text fontSize="sm">Description</Text>
    </Flex>

    <Textarea
      placeholder="Description (optional)"
      size="lg"
      rounded="lg"
      h={150}
      value={form.description}
      onChange={(e) =>
        setForm((prev) => ({ ...prev, description: e.target.value }))
      }
    />
  </Flex>
);
