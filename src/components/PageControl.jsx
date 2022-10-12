import { Box, Pagination } from "@mui/material";

import { useDispatch, useSelector } from "react-redux";
import { changePage } from "../redux/filterSlice";

const PageControl = () => {
  const totalPage = useSelector((state) => state.filter.totalPage);
  const activePage = useSelector((state) => state.filter.page);
  const dispatch = useDispatch();

  const handlePagination = (e, value) => {
    dispatch(changePage(value));
  };

  return (
    <Box
      display="flex"
      width="100%"
      justifyContent="center"
      alignItems="center"
      className="p-2 my-2"
    >
      <Pagination
        count={totalPage}
        page={activePage}
        onChange={handlePagination}
        color="secondary"
      />
    </Box>
  );
};

export default PageControl;
