import { Box, Container } from "@mui/material";

import Characters from "./Characters";
import Filter from "./Filter";
import PageControl from "./PageControl";

const Content = () => {
  return (
    <Container>
      <Box display="flex">
        <Filter />
        <Characters />
      </Box>
    </Container>
  );
};

export default Content;
