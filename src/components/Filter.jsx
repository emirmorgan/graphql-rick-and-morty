import { ClearAll } from "@mui/icons-material";
import {
  Box,
  Divider,
  FormControlLabel,
  IconButton,
  List,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { updateGender, updateSpecies } from "../redux/filterSlice";

const Filter = () => {
  const dispatch = useDispatch();
  const [gender, setGender] = useState("");
  const [species, setSpecies] = useState("");

  const clearFilters = () => {
    setGender("");
    setSpecies("");
    dispatch(updateGender(null));
    dispatch(updateSpecies(null));
  };

  const genderHandle = (e) => {
    setGender(e.target.value);
    dispatch(updateGender(e.target.value));
  };

  const speciesHandle = (e) => {
    setSpecies(e.target.value);
    dispatch(updateSpecies(e.target.value));
  };

  return (
    <Box
      className="hidden md:visible md:flex flex-col py-2 px-4"
      minWidth="250px"
    >
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <h1 className="text-2xl p-2">Filters</h1>
        <IconButton color="secondary" onClick={clearFilters}>
          <ClearAll />
        </IconButton>
      </Box>
      <List className="flex flex-col gap-3">
        <Divider />
        <Typography className="text-xl text-gray-500">Gender</Typography>
        <RadioGroup value={gender}>
          <FormControlLabel
            value="female"
            label="Female"
            control={
              <Radio
                onChange={genderHandle}
                sx={{
                  color: "gray",
                  "&.Mui-checked": {
                    color: "purple",
                  },
                }}
              />
            }
          ></FormControlLabel>
          <FormControlLabel
            value="male"
            label="Male"
            control={
              <Radio
                onChange={genderHandle}
                sx={{
                  color: "gray",
                  "&.Mui-checked": {
                    color: "purple",
                  },
                }}
              />
            }
          ></FormControlLabel>
          <FormControlLabel
            value="genderless"
            label="Genderless"
            control={
              <Radio
                onChange={genderHandle}
                sx={{
                  color: "gray",
                  "&.Mui-checked": {
                    color: "purple",
                  },
                }}
              />
            }
          ></FormControlLabel>
        </RadioGroup>
        <Divider />
        <Typography className="text-xl text-gray-500">Species</Typography>
        <RadioGroup value={species}>
          <FormControlLabel
            value="human"
            label="Human"
            control={
              <Radio
                onChange={speciesHandle}
                sx={{
                  color: "gray",
                  "&.Mui-checked": {
                    color: "purple",
                  },
                }}
              />
            }
          ></FormControlLabel>
          <FormControlLabel
            value="alien"
            label="Alien"
            control={
              <Radio
                onChange={speciesHandle}
                sx={{
                  color: "gray",
                  "&.Mui-checked": {
                    color: "purple",
                  },
                }}
              />
            }
          ></FormControlLabel>
          <FormControlLabel
            value="humanoid"
            label="Humanoid"
            control={
              <Radio
                onChange={speciesHandle}
                sx={{
                  color: "gray",
                  "&.Mui-checked": {
                    color: "purple",
                  },
                }}
              />
            }
          ></FormControlLabel>
          <FormControlLabel
            value="animal"
            label="Animal"
            control={
              <Radio
                onChange={speciesHandle}
                sx={{
                  color: "gray",
                  "&.Mui-checked": {
                    color: "purple",
                  },
                }}
              />
            }
          ></FormControlLabel>
          <FormControlLabel
            value="robot"
            label="Robot"
            control={
              <Radio
                onChange={speciesHandle}
                sx={{
                  color: "gray",
                  "&.Mui-checked": {
                    color: "purple",
                  },
                }}
              />
            }
          ></FormControlLabel>
          <FormControlLabel
            value="cronenberg"
            label="Cronenberg"
            control={
              <Radio
                onChange={speciesHandle}
                sx={{
                  color: "gray",
                  "&.Mui-checked": {
                    color: "purple",
                  },
                }}
              />
            }
          ></FormControlLabel>
          <FormControlLabel
            value="mytholog"
            label="Mytholog"
            control={
              <Radio
                onChange={speciesHandle}
                sx={{
                  color: "gray",
                  "&.Mui-checked": {
                    color: "purple",
                  },
                }}
              />
            }
          ></FormControlLabel>
          <FormControlLabel
            value="disease"
            label="Disease"
            control={
              <Radio
                onChange={speciesHandle}
                sx={{
                  color: "gray",
                  "&.Mui-checked": {
                    color: "purple",
                  },
                }}
              />
            }
          ></FormControlLabel>
          <FormControlLabel
            value="poopybutthole"
            label="Poopybutthole"
            control={
              <Radio
                onChange={speciesHandle}
                sx={{
                  color: "gray",
                  "&.Mui-checked": {
                    color: "purple",
                  },
                }}
              />
            }
          ></FormControlLabel>
        </RadioGroup>
      </List>
    </Box>
  );
};

export default Filter;
