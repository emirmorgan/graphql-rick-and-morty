import { Box, Grid } from "@mui/material";
import { useQuery } from "@apollo/client";
import { useDispatch, useSelector } from "react-redux";

import Character from "./Character";
import PageControl from "./PageControl";
import Loading from "./Loading";

import { GET_CHARACTERS } from "../data/queries";
import { getTotalPage } from "../redux/infoSlice";
import { useEffect } from "react";

const Characters = () => {
  const page = useSelector((state) => state.filter.page);
  const name = useSelector((state) => state.filter.name);
  const gender = useSelector((state) => state.filter.gender);
  const species = useSelector((state) => state.filter.species);

  const dispatch = useDispatch();

  const { loading, data } = useQuery(GET_CHARACTERS, {
    variables: {
      page,
      name,
      gender,
      species,
    },
  });

  useEffect(() => {
    if (loading == false) {
      dispatch(getTotalPage(data.characters.info.pages));
    }
  }, [loading]);

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
