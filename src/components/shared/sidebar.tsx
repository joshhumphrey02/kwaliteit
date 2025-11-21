"use client";
import {
  Box,
  Button,
  Collapsible,
  createListCollection,
  Icon,
  Image,
  Link,
  Portal,
  Select,
  Stack,
  Switch,
  Text,
} from "@chakra-ui/react";
import { sideBarData, SidebarDataProps } from "./sidebar-data";
import { LuChevronDown, LuChevronUp } from "react-icons/lu";
import { useState } from "react";
import { useColorMode } from "../ui/color-mode";
export function SideBar() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Collapsible.Root defaultOpen>
      <Collapsible.Content w={250}>
        <Stack p="4" borderWidth="1px" pb={10} bg={"Background"}>
          <Box h="20">
            <Image src={"/images/logo.png"} objectFit={"contain"} alt="logo" />
          </Box>
          <Stack>
            {sideBarData.map((c) => (
              <SidebarMenuItem key={c.label} data={c} />
            ))}
          </Stack>
          <Stack
            mt={24}
            p={4}
            gap={4}
            borderRadius={"2xl"}
            bg={"#CDD6E9"}
            _dark={{ bg: "card" }}
          >
            <Select.Root
              collection={languages}
              size="sm"
              width="full"
              variant={"subtle"}
              defaultValue={["en"]}
            >
              <Select.HiddenSelect />
              <Select.Control>
                <Select.Trigger>
                  <Select.ValueText placeholder="select a language" />
                </Select.Trigger>
                <Select.IndicatorGroup>
                  <Select.Indicator />
                </Select.IndicatorGroup>
              </Select.Control>
              <Portal>
                <Select.Positioner>
                  <Select.Content>
                    {languages.items.map((item) => (
                      <Select.Item item={item} key={item.value}>
                        {languages.stringifyItem(item)}
                        <Select.ItemIndicator />
                      </Select.Item>
                    ))}
                  </Select.Content>
                </Select.Positioner>
              </Portal>
            </Select.Root>
            <Button variant={"subtle"}>
              <Switch.Root
                size={"sm"}
                checked={colorMode == "dark"}
                onCheckedChange={toggleColorMode}
              >
                <Switch.Label>Dark Mode</Switch.Label>
                <Switch.HiddenInput />
                <Switch.Control />
              </Switch.Root>
            </Button>
          </Stack>
        </Stack>
      </Collapsible.Content>
    </Collapsible.Root>
  );
}

function SidebarMenuItem({ data }: { data: SidebarDataProps }) {
  const [open, setOpen] = useState(true);

  return (
    <Stack>
      <Link href={data.link} textDecoration={"none"}>
        <Button
          size="sm"
          variant="plain"
          onClick={() => data.isDropdown && setOpen(!open)}
          justifyContent={"start"}
          alignItems={"center"}
          transition={"all"}
          transitionDuration={"slow"}
          _hover={{
            bg: "sidebar",
            color: "sidebar-text",
          }}
          w={"full"}
        >
          <data.icon size={18} />
          <Text fontSize={14}>{data.label}</Text>
          {data.isDropdown && (
            <Icon ml={"auto"}>
              {open ? <LuChevronUp /> : <LuChevronDown />}
            </Icon>
          )}
        </Button>
      </Link>

      <Collapsible.Root open={open} onOpenChange={({ open }) => setOpen(open)}>
        <Collapsible.Content ml={6}>
          <Box>
            {data?.subs && (
              <Stack>
                {data.subs.map((s) => (
                  <Link key={s.label} href={s.link} textDecoration={"none"}>
                    <Button
                      size="sm"
                      variant="plain"
                      justifyContent={"start"}
                      transition={"all"}
                      transitionDuration={"slow"}
                      bg={{
                        base: s?.active ? "sidebar" : "",
                        _hover: "sidebar",
                      }}
                      color={{
                        base: s?.active ? "sidebar-text" : "",
                        _hover: "sidebar-text",
                      }}
                      w={"full"}
                    >
                      <Text fontSize={14}>{s.label}</Text>
                      {s.isDropdown && (
                        <Icon ml={"auto"}>
                          <LuChevronDown />
                        </Icon>
                      )}
                    </Button>
                  </Link>
                ))}
              </Stack>
            )}
          </Box>
        </Collapsible.Content>
      </Collapsible.Root>
    </Stack>
  );
}
const languages = createListCollection({
  items: [
    { value: "en", label: "English", flag: "🇬🇧" },
    { value: "en-US", label: "English (US)", flag: "🇺🇸" },
    { value: "fr", label: "French", flag: "🇫🇷" },
    { value: "es", label: "Spanish", flag: "🇪🇸" },
    { value: "de", label: "German", flag: "🇩🇪" },
    { value: "pt", label: "Portuguese", flag: "🇵🇹" },
    { value: "pt-BR", label: "Portuguese (Brazil)", flag: "🇧🇷" },
    { value: "ar", label: "Arabic", flag: "🇸🇦" },
    { value: "zh", label: "Chinese", flag: "🇨🇳" },
  ],
  itemToString: (item) => `${item.flag} ${item.label}`,
  itemToValue: (item) => item.value,
});
