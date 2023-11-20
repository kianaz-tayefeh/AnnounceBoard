import {
  Button,
  Checkbox,
  Flex,
  Group,
  Modal,
  TextInput,
  Textarea,
  Title,
} from "@mantine/core";
import { hasLength, useForm } from "@mantine/form";
import { useAtom } from "jotai";

import { announcementsAtom } from "src/contexts/announcementsAtom";
import { LS_ANNOUNCEMENTS_KEY, setLocalStorage } from "src/helpers/utils";
import { IAnnouncement, initialValues } from "src/interfaces/IAnnouncement";

type AnnounceModalPropsType = {
  opened: boolean;
  close: () => void;
};

export const AnnounceModal: React.FC<AnnounceModalPropsType> = ({
  opened,
  close,
}) => {
  const [allAnnouncements, setAllAnnouncements] = useAtom(announcementsAtom);

  const form = useForm<IAnnouncement>({
    initialValues,
    validate: {
      title: hasLength({ min: 3 }, "Title must have at least 3 letters"),
    },
  });

  const handleSubmit = (item: IAnnouncement) => {
    const updatedAnnouncements = allAnnouncements
      ? [...allAnnouncements, item]
      : [item];

    setLocalStorage(LS_ANNOUNCEMENTS_KEY, updatedAnnouncements);
    setAllAnnouncements(updatedAnnouncements);
    close();
  };

  const { getInputProps, onSubmit } = form;

  return (
    <div>
      <Modal
        opened={opened}
        onClose={close}
        title={<Title order={4}>Announcement details</Title>}
        size="xl"
      >
        <form onSubmit={onSubmit(handleSubmit)}>
          <Flex
            direction={{ base: "column", sm: "column" }}
            justify="space-between"
            gap={{ base: "md", sm: "sm" }}
          >
            <TextInput label="Title" {...getInputProps("title")} />
            <Textarea label="Message" rows={16} {...getInputProps("message")} />
            <Checkbox
              mt="md"
              label="Announcement is Confirmed"
              {...getInputProps("termsOfService", { type: "checkbox" })}
            />
            <Group justify="flex-end" mt={{ base: "md", sm: 0 }} gap="md">
              <Button type="button" variant="outline" onClick={close}>
                Cancel
              </Button>
              <Button type="submit" variant="filled">
                Save
              </Button>
            </Group>
          </Flex>
        </form>
      </Modal>
    </div>
  );
};
