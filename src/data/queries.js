import { gql } from "@apollo/client";

export const GET_CHARACTERS = gql`
  query ($page: Int!, $gender: String!, $species: String!, $name: String!) {
    characters(
      page: $page
      filter: { name: $name, gender: $gender, species: $species }
    ) {
      results {
        id
        name
        gender
        species
        image
        location {
          name
        }
      }
      info {
        pages
        count
        next
        prev
      }
    }
  }
`;
