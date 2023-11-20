import React, { ReactNode } from "react";
import { Box } from "@mantine/core";

type CardContentPropsType = {
  children: ReactNode;
};

export const CardContent: React.FC<CardContentPropsType> = ({ children }) => (
  <Box>{children}</Box>
);
