import { useEffect, useState, useMemo } from "react";
import { Flex, Button, Title, Box, Grid, Loader } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { useAtom } from "jotai";

import { Search } from "src/components/templates/Search";
import { AnnounceModal } from "src/components/templates/AnnounceModal";
import { AnnounceInfo } from "src/components/templates/AnnounceInfo";
import { PlusIcon } from "src/assets/icons/PlusIcon";
import {
  LS_ANNOUNCEMENTS_KEY,
  findInString,
  getLocalStorage,
} from "src/helpers/utils";
import { searchAtom } from "src/contexts/searchAtom";
import { announcementsAtom } from "src/contexts/announcementsAtom";
import { IAnnouncement } from "src/interfaces/IAnnouncement";
import MockedData from "src/mocks/announcements.json";
import { EmptyAnnouncementAlert } from "src/components/organisms/EmptyAnnouncementAlert";

export const Announcements = () => {
  const [opened, { open, close }] = useDisclosure(false);
  const [loading, setLoading] = useState(true);

  const [searchTerm] = useAtom(searchAtom);
  const [allAnnouncements, setAllAnnouncements] = useAtom(announcementsAtom);

  useEffect(() => {
    const storedAnnouncements = getLocalStorage<IAnnouncement[]>(
      LS_ANNOUNCEMENTS_KEY,
      MockedData
    );

    setAllAnnouncements(storedAnnouncements);
    setLoading(false);
  }, []);

  const filteredAnnouncements = useMemo(() => {
    if (!allAnnouncements) return [];
    return allAnnouncements.filter(
      (a: IAnnouncement) =>
        findInString(a.title, searchTerm) || findInString(a.message, searchTerm)
    );
  }, [searchTerm, allAnnouncements]);

  return (
    <Box p="xl" mx="xl">
      <AnnounceModal opened={opened} close={close} />
      <Title order={5} fw={600}>
        Announcements
      </Title>

      <Flex
        direction={{ base: "column", sm: "row" }}
        justify="space-between"
        my={{ base: "md", sm: "sm" }}
      >
        <Search />
        <Button variant="filled" onClick={open} leftSection={<PlusIcon />}>
          Add
        </Button>
      </Flex>
      {loading ? (
        <Loader />
      ) : !filteredAnnouncements.length ? (
        <EmptyAnnouncementAlert />
      ) : (
        <Grid>
          {filteredAnnouncements.map((announce: IAnnouncement) => (
            <Grid.Col key={announce._id} span={4}>
              <AnnounceInfo announce={announce} />
            </Grid.Col>
          ))}
        </Grid>
      )}
    </Box>
  );
};
