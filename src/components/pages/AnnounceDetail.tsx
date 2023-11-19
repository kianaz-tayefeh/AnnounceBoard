import { AnnounceInfo } from "../templates/AnnounceInfo";
import {
  Button,
  Checkbox,
  Flex,
  Group,
  Modal,
  TextInput,
  Textarea,
} from "@mantine/core";
import { Search } from "../templates/Search";
import { useDisclosure } from "@mantine/hooks";
import { useForm } from "@mantine/form";

export const AnnounceDetail = () => {
  const [opened, { open, close }] = useDisclosure(false);
  const form = useForm({
    initialValues: {
      title: "",
      message: "",
      termsOfService: false,
    },

    validate: {
      title: (value) =>
        value.length < 2 ? "Title must have at least 3 letters" : null,
    },
  });

  return (
    <>
      <Modal opened={opened} onClose={close} title="Announcment Details">
        <form onSubmit={form.onSubmit((values) => console.log(values))}>
          <TextInput label="Title" {...form.getInputProps("title")} />
          <Textarea
            label="Message"
            minRows={6}
            maxRows={8}
            {...form.getInputProps("message")}
          />
          <Checkbox
            mt="md"
            label="Announcment is Confirmed"
            {...form.getInputProps("termsOfService", { type: "checkbox" })}
          />
          <Group justify="flex-end" mt="md">
            <Button type="button" variant="outline">
              Cancel
            </Button>
            <Button type="submit" variant="filled">
              Save
            </Button>
          </Group>
        </form>
      </Modal>

      <Flex direction="column" m="xl">
        <p>Announcements</p>
        <Flex
          direction={{ base: "column", sm: "row" }}
          justify="space-between"
          my={{ base: "md", sm: "sm" }}
        >
          <Search />
          <Button variant="filled" onClick={open}>
            Add
          </Button>
        </Flex>
        <AnnounceInfo />
      </Flex>
    </>
  );
};
