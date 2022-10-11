import { Search } from "@mui/icons-material";
import { Box } from "@mui/material";

const InputField = () => {
  return (
    <Box className="flex items-center bg-gray-100 rounded-xl mx-auto px-4 gap-3">
      <Box>
        <Search fontSize="small" />
      </Box>
      <input
        className="py-2 bg-transparent outline-none w-100"
        placeholder="Rick Sanchez"
      ></input>
    </Box>
  );
};

export default InputField;
