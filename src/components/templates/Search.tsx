import { TextInput } from "@mantine/core";
import { useState } from "react";

export const Search = () => {
  const icon = <>Icon</>;
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <TextInput
      value={searchTerm}
      onChange={handleSearch}
      placeholder="Search"
      rightSection={icon}
      size="md"
      w={300}
    />
  );
};
