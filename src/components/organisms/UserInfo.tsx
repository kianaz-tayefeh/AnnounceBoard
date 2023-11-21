import React from "react";
import { Avatar, Flex, Text } from "@mantine/core";

type UserInfoPropsType = {
  avatar: string;
  username: string;
  role: string;
};

export const UserInfo: React.FC<UserInfoPropsType> = ({
  avatar,
  username,
  role,
}) => (
  <Flex direction={{ base: "column", sm: "row" }} my={{ base: "md", sm: "sm" }}>
    <Avatar variant="filled" radius="sm" src={avatar} mr={8} />

    <Flex direction={{ base: "column" }} mt={{ base: "sm", sm: 0 }}>
      <Text size="sm">{username}</Text>
      <Text size="xs" c="dimmed">
        {role}
      </Text>
    </Flex>
  </Flex>
);
