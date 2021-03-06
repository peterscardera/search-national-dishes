import React from "react";
import styled from "@emotion/styled";
import { Input, Button } from "./shared styles/form";

const SearchForm = styled.div`
  display: flex;
  align-items: center;
`;

const Search = ({ input, handleChange, handleSearch }) => {
  return (
    <SearchForm>
      <Input value ={input} onChange={handleChange}/>
      <Button onClick={handleSearch}>Search</Button>
    </SearchForm>
  );
};

export default Search;
