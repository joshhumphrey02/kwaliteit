"use client";
import {
  Avatar,
  Button,
  HStack,
  Icon,
  Image,
  Input,
  InputGroup,
  Text,
} from "@chakra-ui/react";
import { CloseCircle, Link1, NotificationBing } from "iconsax-reactjs";
import { useRef, useState } from "react";
import { FaCaretDown } from "react-icons/fa";
import { LuSearch } from "react-icons/lu";

export function Header() {
  const [value, setValue] = useState("M91");
  const inputRef = useRef<HTMLInputElement | null>(null);

  const endElement = value ? (
    <Icon
      onClick={() => {
        setValue("");
        inputRef.current?.focus();
      }}
      me="-2"
    >
      <CloseCircle size={20} />
    </Icon>
  ) : undefined;
  const images = [
    "/images/img1.png",
    "/images/img2.png",
    "/images/img3.png",
    "/images/img4.png",
  ];
  return (
    <HStack
      py={4}
      px={16}
      justifyContent={"space-between"}
      bg={"Background"}
      w={"full"}
    >
      <InputGroup
        w={220}
        pr={0}
        startElement={<LuSearch size={18} />}
        endElement={endElement}
      >
        <Input
          ref={inputRef}
          placeholder="M91"
          value={value}
          rounded={"xl"}
          size={"xl"}
          onChange={(e) => {
            setValue(e.currentTarget.value);
          }}
        />
      </InputGroup>
      <HStack>
        {images.map((i) => (
          <Button
            key={i}
            variant={"outline"}
            w={46}
            h={46}
            p={2}
            rounded={"lg"}
          >
            <Image src={i} w={"full"} h={"full"} objectFit={"contain"} />
          </Button>
        ))}
      </HStack>
      <HStack gap={4}>
        <HStack
          p={1}
          bg={"card"}
          border={1}
          borderColor={"border"}
          rounded={"xl"}
        >
          <Button
            size={"lg"}
            variant="outline"
            _light={{ color: "white" }}
            rounded={"lg"}
            fontWeight={"bold"}
            bg={"secondary"}
          >
            Melding maken
          </Button>
          {["VIM", "LMS", "BHV", "DataLek"].map((b) => (
            <Button
              key={b}
              size={"lg"}
              _light={{ color: "white" }}
              variant="outline"
              fontWeight={"bold"}
              bg={"brand"}
              rounded={"lg"}
            >
              {b}
            </Button>
          ))}
        </HStack>
        <Button variant="outline" px={2} size={"lg"} h={46} rounded={"lg"}>
          <Link1 />
        </Button>
      </HStack>
      <HStack>
        <Button
          variant="outline"
          ml={"auto"}
          size={"xl"}
          px={2}
          rounded={"full"}
        >
          <NotificationBing />
        </Button>
        <Button variant="outline" size={"xl"} rounded={"3xl"} pl={1} pr={2}>
          <Avatar.Root>
            <Avatar.Fallback name="Paul" />
            <Avatar.Image src="https://bit.ly/sage-adebayo" />
          </Avatar.Root>
          <Text fontWeight={"semibold"}>Hi, Paul</Text>
          <Icon ml={"4"}>
            <FaCaretDown />
          </Icon>
        </Button>
      </HStack>
    </HStack>
  );
}
