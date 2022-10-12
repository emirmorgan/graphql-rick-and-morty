import { Box, Grid } from "@mui/material";
import Character from "./Character";
import PageControl from "./PageControl";

import { GET_CHARACTERS } from "../data/queries";
import { useQuery } from "@apollo/client";
import { useSelector } from "react-redux";
import Loading from "./Loading";

const Characters = () => {
  const page = useSelector((state) => state.filter.page);
  const name = useSelector((state) => state.filter.name);
  const gender = useSelector((state) => state.filter.gender);
  const species = useSelector((state) => state.filter.species);

  const { loading, data } = useQuery(GET_CHARACTERS, {
    variables: {
      page,
      name,
      gender,
      species,
    },
  });

  return (
    <Box my={2}>
      {!loading ? (
        <Grid container justifyContent="space-around" gap="16px">
          {data.characters.results.map((item) => (
            <Grid item>
              <Character
                id={item.id}
                name={item.name}
                species={item.species}
                location={item.location.name}
                image={item.image}
              />
            </Grid>
          ))}
          <PageControl />
        </Grid>
      ) : (
        <Loading />
      )}
    </Box>
  );
};

export default Characters;
