import { useEffect, useState, useMemo } from "react";
import { Flex, Button, Title, Box, Grid, Loader, Divider } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { useAtom } from "jotai";

import { Search } from "src/components/organisms/Search";
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
    <Box p="xl">
      <AnnounceModal opened={opened} close={close} />

      <Title order={4}>Announcements</Title>
      <Divider size="sm" color="black" mb="lg" w={160} />

      <Flex
        direction={{ base: "column", sm: "row" }}
        justify="space-between"
        my={{ base: "md", sm: "sm" }}
        gap={10}
      >
        <Search />
        <Button
          variant="filled"
          color="primitive-blue"
          onClick={open}
          leftSection={<PlusIcon />}
        >
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
            <Grid.Col key={announce.id} span={{ lg: 4, md: 4, sm: 6, xs: 12 }}>
              <AnnounceInfo announce={announce} />
            </Grid.Col>
          ))}
        </Grid>
      )}
    </Box>
  );
};
