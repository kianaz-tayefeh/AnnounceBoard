import { ChangeEvent } from "react";
import { useAtom } from "jotai";
import { TextInput } from "@mantine/core";

import { SearchIcon } from "src/assets/icons/SearchIcon";
import { searchAtom } from "src/contexts/searchAtom";

export const Search = () => {
  const [searchTerm, setSearchTerm] = useAtom(searchAtom);

  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  return (
    <TextInput
      value={searchTerm}
      onChange={handleSearch}
      placeholder="Search"
      rightSection={<SearchIcon />}
      rightSectionPointerEvents="none"
      size="md"
      w={300}
    />
  );
};
