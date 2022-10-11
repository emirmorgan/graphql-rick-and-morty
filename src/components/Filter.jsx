import {
  Box,
  Checkbox,
  Divider,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";

const Filter = () => {
  return (
    <Box
      className="hidden md:visible md:flex flex-col py-2 px-4"
      minWidth="250px"
    >
      <h1 className="text-2xl p-2">Filters</h1>
      <List className="flex flex-col gap-3">
        <Divider />
        <Typography className="text-xl text-gray-500">Gender</Typography>
        <ListItem disablePadding className="flex flex-col">
          <Box className="flex items-center mr-auto">
            <Checkbox /> <ListItemText>Male (0)</ListItemText>
          </Box>
          <Box className="flex items-center mr-auto">
            <Checkbox /> <ListItemText>Female (0)</ListItemText>
          </Box>
          <Box className="flex items-center mr-auto">
            <Checkbox /> <ListItemText>Unknown (0)</ListItemText>
          </Box>
          <Box className="flex items-center mr-auto">
            <Checkbox /> <ListItemText>Genderless (0)</ListItemText>
          </Box>
        </ListItem>
        <Divider />
        <Typography className="text-xl text-gray-500">Species</Typography>
        <ListItem disablePadding className="flex flex-col">
          <Box className="flex items-center mr-auto">
            <Checkbox /> <ListItemText>Human (0)</ListItemText>
          </Box>
          <Box className="flex items-center mr-auto">
            <Checkbox /> <ListItemText>Alien (0)</ListItemText>
          </Box>
          <Box className="flex items-center mr-auto">
            <Checkbox /> <ListItemText>Humanoid (0)</ListItemText>
          </Box>
          <Box className="flex items-center mr-auto">
            <Checkbox /> <ListItemText>Robot (0)</ListItemText>
          </Box>
          <Box className="flex items-center mr-auto">
            <Checkbox /> <ListItemText>Cronenberg (0)</ListItemText>
          </Box>
          <Box className="flex items-center mr-auto">
            <Checkbox /> <ListItemText>Mytholog (0)</ListItemText>
          </Box>
          <Box className="flex items-center mr-auto">
            <Checkbox /> <ListItemText>Disease (0)</ListItemText>
          </Box>
          <Box className="flex items-center mr-auto">
            <Checkbox /> <ListItemText>Poopybutthole (0)</ListItemText>
          </Box>
          <Box className="flex items-center mr-auto">
            <Checkbox /> <ListItemText>Unknown (0)</ListItemText>
          </Box>
        </ListItem>
        <Divider />
        <Typography className="text-xl text-gray-500">Location</Typography>
        <ListItem disablePadding className="flex flex-col">
          <Box className="flex items-center mr-auto">
            <Checkbox /> <ListItemText>Earth (0)</ListItemText>
          </Box>
          <Box className="flex items-center mr-auto">
            <Checkbox /> <ListItemText>Citadel of Ricks (0)</ListItemText>
          </Box>
          <Box className="flex items-center mr-auto">
            <Checkbox /> <ListItemText>Interdimensional Cable (0)</ListItemText>
          </Box>
          <Box className="flex items-center mr-auto">
            <Checkbox /> <ListItemText>Earth (C-137) (0)</ListItemText>
          </Box>
          <Box className="flex items-center mr-auto">
            <Checkbox /> <ListItemText>Unknown (0)</ListItemText>
          </Box>
          <Box className="flex items-center mr-auto">
            <Checkbox /> <ListItemText>Snake Planet (0)</ListItemText>
          </Box>
          <Box className="flex items-center mr-auto">
            <Checkbox /> <ListItemText>Planet Squanch (0)</ListItemText>
          </Box>
          <Box className="flex items-center mr-auto">
            <Checkbox /> <ListItemText>Anatomy Park (0)</ListItemText>
          </Box>
          <Box className="flex items-center mr-auto">
            <Checkbox /> <ListItemText>Nuptia 4 (0)</ListItemText>
          </Box>
          <Box className="flex items-center mr-auto">
            <Checkbox /> <ListItemText>Heist-Con (0)</ListItemText>
          </Box>
        </ListItem>
      </List>
    </Box>
  );
};

export default Filter;
