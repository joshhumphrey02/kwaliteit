import { Button, HStack, Switch, Text } from "@chakra-ui/react";
import {
  AddCircle,
  ArrowCircleLeft2,
  Calendar,
  ExportCurve,
  Sort,
} from "iconsax-reactjs";
import { useColorMode } from "../ui/color-mode";

export function TodoHeader() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <HStack
      justifyContent={"space-between"}
      px={4}
      pb={4}
      borderBottomWidth={"thin"}
      borderBottomColor={"border"}
    >
      <HStack gap={8}>
        <Button variant={"outline"} rounded={"full"} px={2} size={"xl"}>
          <ArrowCircleLeft2 />
        </Button>
        <Text fontWeight={"bold"} fontSize={"xl"}>
          Afdeling Kwaliteit
        </Text>
      </HStack>
      <HStack gap={4}>
        <Button size={"xl"} px={2} rounded={"lg"} variant={"subtle"}>
          <Switch.Root
            size={"sm"}
            checked={colorMode == "dark"}
            onCheckedChange={toggleColorMode}
          >
            <Switch.HiddenInput />
            <Switch.Control />
          </Switch.Root>
        </Button>
        <Button variant={"subtle"} px={2} rounded={"lg"} size={"xl"}>
          <Sort />
        </Button>
        <Button variant={"subtle"} px={2} rounded={"lg"} size={"xl"}>
          <Calendar />
        </Button>
        <Button
          size={"xl"}
          variant="outline"
          _light={{ color: "white" }}
          rounded={"lg"}
          bg={"secondary"}
        >
          <ExportCurve />
          Export xlsx
        </Button>
        <Button
          size={"xl"}
          _light={{ color: "white" }}
          variant="outline"
          bg={"brand"}
          rounded={"lg"}
        >
          <AddCircle />
          Add Task
        </Button>
      </HStack>
    </HStack>
  );
}
