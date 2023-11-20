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
    <Flex direction={{ base: "column", sm: "row" }} justify="space-between">
      <Flex direction="column">
        <Title order={5}>{title}</Title>
        {/* need customize */}
        <Text size="sm" fw={400} c="premitive-gray">
          {subheader}
        </Text>
      </Flex>
      {action}
    </Flex>
  );
};
