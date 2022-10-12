import { Box, Pagination } from "@mui/material";

const PageControl = () => {
  return (
    <Box
      display="flex"
      width="100%"
      justifyContent="center"
      alignItems="center"
      className="p-2 my-2"
    >
      <Pagination count={52} color="secondary" />
    </Box>
  );
};

export default PageControl;
