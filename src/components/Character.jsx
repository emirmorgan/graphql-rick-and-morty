import { Box } from "@mui/material";

const Character = ({ name, species, image, location }) => {
  return (
    <Box
      display="flex"
      padding="12px"
      flexDirection="column"
      maxWidth="160px"
      className="shadow hover:shadow-xl hover:transition-shadow rounded-xl"
    >
      <img src={image} alt={name} width="100%" className="rounded" />
      <Box>
        <p className="text-sm text-gray-500 font-semibold mt-2">{species}</p>
        <p className="mt-1 text-gray-700 font-semibold">{name}</p>
        <p className="text-xs mt-1">{location}</p>
      </Box>
    </Box>
  );
};

export default Character;
