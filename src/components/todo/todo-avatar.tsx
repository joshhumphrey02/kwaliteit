import { Avatar, AvatarGroup } from "@chakra-ui/react";

export function TodoAvatar({
  count,
  size = "sm",
}: {
  count: number;
  size?: "sm" | "md" | "lg" | "xl" | "2xl" | "full" | "2xs" | "xs";
}) {
  const avatars = [
    {
      name: "Uchiha Sasuke",
      src: "https://cdn.myanimelist.net/r/84x124/images/characters/9/131317.webp",
    },
    {
      name: "Baki Hanma",
      src: "https://cdn.myanimelist.net/r/84x124/images/characters/7/284129.webp",
    },
    {
      name: "Uchiha Chan",
      src: "https://cdn.myanimelist.net/r/84x124/images/characters/9/105421.webp",
    },
  ];
  const display = avatars.slice(0, count);
  return (
    <AvatarGroup gap="0" spaceX="-3" size={size}>
      {display.map((av) => (
        <Avatar.Root key={av.name}>
          <Avatar.Fallback name={av.name} />
          <Avatar.Image src={av.src} />
        </Avatar.Root>
      ))}

      {count > 3 && (
        <Avatar.Root variant="solid">
          <Avatar.Fallback>+{count - 3}</Avatar.Fallback>
        </Avatar.Root>
      )}
    </AvatarGroup>
  );
}
