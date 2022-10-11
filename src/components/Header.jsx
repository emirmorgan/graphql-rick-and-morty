import Box from "@mui/material/Box";
import InputField from "./InputField";

const Header = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      minHeight="200px"
      className="bg-violet-500 items-center"
    >
      <h1 className="text-3xl text-white mb-5">Wubba Lubba Dub Dub</h1>
      <InputField />
    </Box>
  );
};

export default Header;
