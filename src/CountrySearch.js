import React, { useState } from "react";
import { useLazyQuery, gql } from "@apollo/client";

import Countries from "./components/Countries";
import Search from "./components/Search";

const SEARCH = gql`
  query Search($match: String) {
    countries(order_by: { name: asc }, where: { name: { _ilike: $match } }) {
      name
      dish
      id
    }
  }
`;

const CountrySearch = () => {
  const [input, setInput] = useState("");
  const [search, { loading, error, data }] = useLazyQuery(SEARCH);
  //return search which is a function
  console.log(data, "IM DAATA");

  const handleChange = (e) => {
    let value = e.target.value;
    setInput(value);
  };

  const handleSearch = () => {
    search({ variables: { match: `%${input}%` } });
  };

  return (
    <>
      <Search
        input={input}
        handleChange={handleChange}
        handleSearch={handleSearch}
      />
      <Countries searchedCountryResult={data ? data.countries : null} />
    </>
  );
};

export default CountrySearch;
