import { ActionIcon, Box, Button, Card, Text } from "@mantine/core";

import { UserInfo } from "src/components/organisms/UserInfo";
import { CardHeader } from "src/components/organisms/CardHeader";
import { MoreIcon } from "src/assets/icons/MoreIcon";
import { IAnnouncement } from "src/interfaces/IAnnouncement";
import { ErrorIcon } from "src/assets/icons/ErrorIcon";
import { CheckMarkIcon } from "src/assets/icons/CheckMarkIcon";
import classes from "src/assets/css/AnnounceInfo.module.css";

type AnnounceInfoPropsType = {
  announce: IAnnouncement;
};

export const AnnounceInfo: React.FC<AnnounceInfoPropsType> = ({ announce }) => {
  const { title, date, username, imageurl, role, message, termsOfService } =
    announce;
  return (
    <Card className={classes.card}>
      <CardHeader
        action={
          <ActionIcon variant="subtle" color="gray">
            <MoreIcon />
          </ActionIcon>
        }
        title={title}
        subheader={date}
      />
      <UserInfo imageurl={imageurl} username={username} role={role} />
      <Box>
        <Text size="sm" lh="xs" c="primitive-gray.6" fw={500} lineClamp={7}>
          {message}
        </Text>
        {termsOfService && <Button
          leftSection={<CheckMarkIcon />}
          classNames={{ root: classes.btn_root_confirmed, section: classes.btn_section }}
        >
          Confirmed
        </Button>}
        {!termsOfService && <Button
          leftSection={<ErrorIcon />}
          classNames={{ root: classes.btn_root_not_confirmed, section: classes.btn_section }}
        >
          Needs confirmation
        </Button>}
      </Box>
    </Card>
  );
};
