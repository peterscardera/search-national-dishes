import React from "react";
import { useQuery, gql } from "@apollo/client";

import {ListItem, List} from "./shared styles/list";
import { Badge} from "./shared styles/badge";

const COUNTRIES = gql`
  query countries {
    countries {
      name
      id
      dish
    }
  }
`;

const Countries = () => {
  const { loading, error, data } = useQuery(COUNTRIES);
  console.log(data);
  if (loading) return <p>loading...</p>;
  if (error) return <p>error...</p>;

  return data.countries.map((eachCountryObj) => {
    return (
      <List>
        <ListItem key={eachCountryObj.id}>
          <p>
            {eachCountryObj.name} | <Badge> {eachCountryObj.dish} </Badge>
          </p>
        </ListItem>
      </List>
    );
  });
};

export default Countries;
