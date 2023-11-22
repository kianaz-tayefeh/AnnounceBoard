import React, { ReactNode } from "react";
import { Flex, Text, Title } from "@mantine/core";

type CardHeaderPropsType = {
  action: ReactNode;
  title: string;
  subheader: string;
};

export const CardHeader: React.FC<CardHeaderPropsType> = ({
  action,
  title,
  subheader,
}) => {
  return (
    <Flex direction="row" justify="space-between">
      <Flex direction="column">
        <Title order={5}>{title}</Title>
        <Text size="xs" c="primitive-gray.6" fw={400} mt={4}>
          {subheader}
        </Text>
      </Flex>
      {action}
    </Flex>
  );
};
