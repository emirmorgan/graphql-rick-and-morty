import { Search } from "@mui/icons-material";
import { Box } from "@mui/material";
import { useDispatch } from "react-redux";
import { setName } from "../redux/filterSlice";

const InputField = () => {
  const dispatch = useDispatch();

  const searchHandle = (e) => {
    dispatch(setName(e.target.value));
  };

  return (
    <Box className="flex items-center bg-gray-100 rounded-xl mx-auto px-4 gap-3 w-80">
      <Box>
        <Search fontSize="small" color="secondary" />
      </Box>
      <input
        className="py-2 bg-transparent outline-none"
        placeholder="Name..."
        onChange={searchHandle}
      ></input>
    </Box>
  );
};

export default InputField;
