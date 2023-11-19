import { ActionIcon, Box, Button, Card, Flex, Text } from "@mantine/core";

const textBold = { fontWeight: 500 };

export const AnnounceInfo = () => {
  return (
    <Card withBorder shadow="sm" radius="md" w={500} padding="lg">
      <CardHeader
        action={
          <ActionIcon variant="subtle" color="gray">
            ...
          </ActionIcon>
        }
        title="Title"
        subheader="September 14, 2016"
      />
      <UserInfo
        avatar="avatar"
        name="Jack Jacklyne"
        role="Production coordinator"
      />
      <CardContent>
        <Text mb="md">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam, quis
          blanditiis adipisci mollitia id in, laborum molestiae architecto,
          inventore cupiditate libero quaerat. Possimus pariatur quae
          consequatur beatae facilis debitis ipsam.
        </Text>
        <Button variant="light" color="red" mt="md" radius="md">
          Needs confirmation
        </Button>
      </CardContent>
    </Card>
  );
};

//move to organisms
const CardHeader = ({ action, title, subheader }) => (
  <Flex direction={{ base: "column", sm: "row" }} justify="space-between">
    <Flex direction="column">
      <Text style={textBold}>{title}</Text>
      <Text style={textBold}>{subheader}</Text>
    </Flex>
    {action}
  </Flex>
);

const UserInfo = ({ avatar, name, role }) => (
  <Flex direction={{ base: "column", sm: "row" }} my={{ base: "md", sm: "sm" }}>
    <Text style={textBold} mr={{ base: 0, sm: "sm" }}>
      {avatar}
    </Text>
    <Flex direction={{ base: "column" }} mt={{ base: "sm", sm: 0 }}>
      <Text style={textBold}>{name}</Text>
      <Text style={textBold}>{role}</Text>
    </Flex>
  </Flex>
);

const CardContent = ({ children }) => <Box>{children}</Box>;
