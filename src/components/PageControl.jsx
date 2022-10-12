import { ArrowLeft, ArrowRight } from "@mui/icons-material";
import { Box } from "@mui/material";
import { useState } from "react";

const PageControl = () => {
  const [activeButton, setActive] = useState(1);

  const clickHandle = (e) => {
    setActive(e.target.dataset.btn);
    console.log(activeButton);
  };

  return (
    <Box
      display="flex"
      width="100%"
      justifyContent="center"
      alignItems="center"
      className="p-2 my-2"
    >
      <ArrowLeft className="mr-4 cursor-pointer" />
      <Box display="flex" gap="12px">
        <Box
          className={
            activeButton == 1
              ? "flex justify-center items-center rounded-md cursor-pointer bg-violet-600 text-white"
              : "flex justify-center items-center rounded-md cursor-pointer bg-gray-200 hover:bg-gray-300"
          }
          width="42px"
          height="42px"
          data-btn="1"
          onClick={clickHandle}
        >
          1
        </Box>
        <Box
          className={
            activeButton == 2
              ? "flex justify-center items-center rounded-md cursor-pointer bg-violet-600 text-white"
              : "flex justify-center items-center rounded-md cursor-pointer bg-gray-200 hover:bg-gray-300"
          }
          width="42px"
          height="42px"
          data-btn="2"
          onClick={clickHandle}
        >
          2
        </Box>
        <Box
          className={
            activeButton == 3
              ? "flex justify-center items-center rounded-md cursor-pointer bg-violet-600 text-white"
              : "flex justify-center items-center rounded-md cursor-pointer bg-gray-200 hover:bg-gray-300"
          }
          width="42px"
          height="42px"
          data-btn="3"
          onClick={clickHandle}
        >
          3
        </Box>
        <Box
          className={
            activeButton == 4
              ? "flex justify-center items-center rounded-md cursor-pointer bg-violet-600 text-white"
              : "flex justify-center items-center rounded-md cursor-pointer bg-gray-200 hover:bg-gray-300"
          }
          width="42px"
          height="42px"
          data-btn="4"
          onClick={clickHandle}
        >
          4
        </Box>
        <Box
          className={
            activeButton == 5
              ? "flex justify-center items-center rounded-md cursor-pointer bg-violet-600 text-white"
              : "flex justify-center items-center rounded-md cursor-pointer bg-gray-200 hover:bg-gray-300"
          }
          width="42px"
          height="42px"
          data-btn="5"
          onClick={clickHandle}
        >
          5
        </Box>
      </Box>
      <ArrowRight className="ml-4 cursor-pointer" />
    </Box>
  );
};

export default PageControl;
