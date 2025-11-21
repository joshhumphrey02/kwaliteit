import { Avatar, AvatarGroup } from "@chakra-ui/react";

export function TodoAvatar({
  users,
  size = "sm",
}: {
  users: User[];
  size?: "sm" | "md" | "lg" | "xl" | "2xl" | "full" | "2xs" | "xs";
}) {
  return (
    <AvatarGroup gap="0" spaceX="-3" size={size}>
      {users?.slice(0, 3).map((av) => (
        <Avatar.Root key={av.name}>
          <Avatar.Fallback name={av.name} />
          <Avatar.Image src={av.src} />
        </Avatar.Root>
      ))}

      {users?.length > 3 && (
        <Avatar.Root variant="solid">
          <Avatar.Fallback>+{users?.length - 3}</Avatar.Fallback>
        </Avatar.Root>
      )}
    </AvatarGroup>
  );
}
