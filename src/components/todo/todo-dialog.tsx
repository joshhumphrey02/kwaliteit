import {
  Button,
  CloseButton,
  Dialog,
  Input,
  Portal,
  Stack,
  Textarea,
  Select,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";

interface TaskDialogProps {
  open: boolean;
  onClose: () => void;
  onSave: (task: Partial<Task>) => void;
  task?: Task | null;
}

export function TodoDialog({ open, onClose, onSave, task }: TaskDialogProps) {
  const isEdit = Boolean(task);

  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [status, setStatus] = useState<TaskStatus>("todo");

  function handleSave() {
    onSave({
      name,
      description: desc,
      status,
    });
    onClose();
  }

  return (
    <Dialog.Root open={open} onOpenChange={onClose}>
      <Portal>
        <Dialog.Backdrop />
        <Dialog.Positioner>
          <Dialog.Content rounded="xl" p={4} bg="Background">
            <Dialog.Header mb={2}>
              <Dialog.Title fontSize="xl" fontWeight="bold">
                {isEdit ? "Edit Task" : "New Task"}
              </Dialog.Title>
            </Dialog.Header>

            <Dialog.Body>
              <Stack gap={3}>
                <Input
                  placeholder="Task Title"
                  size="lg"
                  rounded="lg"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />

                <Textarea
                  placeholder="Description (optional)"
                  size="lg"
                  rounded="lg"
                  value={desc}
                  onChange={(e) => setDesc(e.target.value)}
                />

                {/* <Select
                  rounded="lg"
                  size="lg"
                  value={status}
                  onChange={(e) => setStatus(e.target.value as TaskStatus)}
                >
                  <option value="pending">Pending</option>
                  <option value="in-progress">In Progress</option>
                  <option value="completed">Completed</option>
                </Select> */}
              </Stack>
            </Dialog.Body>

            <Dialog.Footer mt={4} gap={3}>
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
