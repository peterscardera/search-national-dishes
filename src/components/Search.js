import React from "react";
import styled from "@emotion/styled";
import { Input, Button } from "./shared styles/form";

const SearchForm = styled.div`
  display: flex;
  align-items: center;
`;

const Search = () => {
  return (
    <SearchForm>
      <Input />
      <Button>Search</Button>
    </SearchForm>
  );
};

export default Search;
