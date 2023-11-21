import { ActionIcon, Box, Button, Card, Text } from "@mantine/core";

import { UserInfo } from "src/components/organisms/UserInfo";
import { CardHeader } from "src/components/organisms/CardHeader";
import { MoreIcon } from "src/assets/icons/MoreIcon";
import { IAnnouncement } from "src/interfaces/IAnnouncement";
import { ErrorIcon } from "src/assets/icons/ErrorIcon";
import { CheckMarkIcon } from "src/assets/icons/CheckMarkIcon";
import classes from "src/assets/css/Mantine.module.css";

type AnnounceInfoPropsType = {
  announce: IAnnouncement;
};

export const AnnounceInfo: React.FC<AnnounceInfoPropsType> = ({ announce }) => {
  const { title, date, username, avatar, role, message, termsOfService } =
    announce;
  return (
    <Card withBorder shadow="xs" radius="sm" w="100%" h="100%">
      <CardHeader
        action={
          <ActionIcon variant="subtle" color="gray">
            <MoreIcon />
          </ActionIcon>
        }
        title={title}
        subheader={date}
      />
      <UserInfo avatar={avatar} username={username} role={role} />
      <Box>
        <Text size="md" fw={500} lh="md" c="primitive-gray" lineClamp={7}>
          {message}
        </Text>
        <Button
          leftSection={termsOfService ? <CheckMarkIcon /> : <ErrorIcon />}
          variant="light"
          color={`${termsOfService ? "primitive-green" : "primitive-red"}`}
          radius="sm"
          mt="md"
          className={
            termsOfService ? classes.greenborderbutton : classes.redborderbutton
          }
        >
          {termsOfService ? "Confirmed" : "Needs confirmation"}
        </Button>
      </Box>
    </Card>
  );
};
