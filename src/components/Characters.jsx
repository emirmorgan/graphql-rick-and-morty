import { Box, Grid } from "@mui/material";
import Character from "./Character";

const Characters = () => {
  return (
    <Box>
      <Grid container justifyContent="space-around" gap="16px" marginTop={2}>
        <Grid item>
          <Character
            id="1"
            name="Rick Sanchez"
            species="Human"
            location="Earth (Replacement Dimension)"
            image="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
          />
        </Grid>
        <Grid item>
          <Character
            id="2"
            name="Morty Smith"
            species="Human"
            location="Earth (Replacement Dimension)"
            image="https://rickandmortyapi.com/api/character/avatar/2.jpeg"
          />
        </Grid>
        <Grid item>
          <Character
            id="3"
            name="Summer Smith"
            species="Human"
            location="Earth (Replacement Dimension)"
            image="https://rickandmortyapi.com/api/character/avatar/3.jpeg"
          />
        </Grid>
        <Grid item>
          <Character
            id="4"
            name="Beth Smith"
            species="Human"
            location="Earth (Replacement Dimension)"
            image="https://rickandmortyapi.com/api/character/avatar/4.jpeg"
          />
        </Grid>
        <Grid item>
          <Character
            id="5"
            name="Jerry Smith"
            species="Human"
            location="Earth (Replacement Dimension)"
            image="https://rickandmortyapi.com/api/character/avatar/5.jpeg"
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Characters;
