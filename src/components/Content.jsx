import { Box, Container } from "@mui/material";

import Characters from "./Characters";
import Filter from "./Filter";
import PageControl from "./PageControl";

const Content = () => {
  return (
    <Container>
      <Box display="flex">
        <Filter />
        <Box display="flex" flexDirection="column">
          <Characters />
          <PageControl />
        </Box>
      </Box>
    </Container>
  );
};

export default Content;
