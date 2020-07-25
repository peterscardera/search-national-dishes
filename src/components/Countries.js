import React from "react";
import { useQuery, gql } from "@apollo/client";

import { ListItem, List } from "./shared styles/list";
import { Badge } from "./shared styles/badge";

const COUNTRIES = gql`
  query countries {
    countries {
      name
      id
      dish
    }
  }
`;

const Countries = ({ searchedCountryResult }) => {
  const { loading, error, data } = useQuery(COUNTRIES);

  const renderCountries = (c) => {
    return c.map((eachCountry) => {
      return (
        <ListItem key={eachCountry.id}>
          {eachCountry.name} <Badge>{eachCountry.dish}</Badge>
        </ListItem>
      );
    });
  };

  if (loading) return <p>loading...</p>;
  if (error) return <p>error...</p>;

  return (
    <List>{renderCountries(searchedCountryResult || data.countries)}</List>
  );
};

export default Countries;
