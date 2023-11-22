import React from "react";
import { Flex, Image, Text } from "@mantine/core";

type UserInfoPropsType = {
  imageurl: string;
  username: string;
  role: string;
};

export const UserInfo: React.FC<UserInfoPropsType> = ({
  imageurl,
  username,
  role,
}) => (
  <Flex direction="row" gap={8}>
    <Image
      radius="xs"
      width={32}
      height={32}
      src={imageurl}
      fallbackSrc="/images/playground.png"
    />

    <Flex direction={{ base: "column" }} mt={{ base: "sm", sm: 0 }}>
      <Text size="xs" c="primitive-gray.8" fw={500}>
        {username}
      </Text>
      <Text size="xxs" c="primitive-gray.5" fw={500}>
        {role}
      </Text>
    </Flex>
  </Flex>
);
