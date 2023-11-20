import { ActionIcon, Button, Card, Text } from "@mantine/core";

import { CardContent } from "src/components/organisms/CardContent";
import { UserInfo } from "src/components/organisms/UserInfo";
import { CardHeader } from "src/components/organisms/CardHeader";
import { MoreIcon } from "src/assets/icons/MoreIcon";
import { IAnnouncement } from "src/interfaces/IAnnouncement";
import { ErrorIcon } from "src/assets/icons/ErrorIcon";
import { CheckMarkIcon } from "src/assets/icons/CheckMarkIcon";

type AnnounceInfoPropsType = {
  announce: IAnnouncement;
};

export const AnnounceInfo: React.FC<AnnounceInfoPropsType> = ({ announce }) => {
  const { title, date, username, avatar, role, message, termsOfService } =
    announce;
  return (
    <Card withBorder shadow="sm" radius="sm" padding="lg" w="100%" h="100%">
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
      <CardContent>
        <Text size="md" fw={500} lh="md" c="premitive-gray" lineClamp={8}>
          {message}
        </Text>
        <Button
          leftSection={termsOfService ? <CheckMarkIcon /> : <ErrorIcon />}
          variant="light"
          color={`${termsOfService ? "primitive-green" : "primitive-red"}`}
          radius="md"
          mt="md"
        >
          {termsOfService ? "Confirmed" : "Needs confirmation"}
        </Button>
      </CardContent>
    </Card>
  );
};
