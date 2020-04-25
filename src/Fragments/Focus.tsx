import React from "react";
import {
  Container,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  Typography,
} from "@material-ui/core";

import { FragmentProps } from "./@types";

export const Focus = ({ dispatch, state }: FragmentProps) => (
  <Container className="wrapper">
    <Typography variant="h5" component="h2">
      Focus
    </Typography>
    <FormControl component="fieldset">
      <RadioGroup
        aria-label="Focus"
        name="focus"
        value={state.focus}
        onChange={(e) =>
          dispatch({
            type: "focus",
            payload: e.target.value as
              | "content"
              | "functional"
              | "informational",
          })
        }
      >
        <FormControlLabel
          value="informational"
          control={<Radio />}
          label="Informational"
        />
        <FormControlLabel value="content" control={<Radio />} label="Content" />
        <FormControlLabel
          value="functional"
          control={<Radio />}
          label="Functional"
        />
      </RadioGroup>
    </FormControl>
  </Container>
);
