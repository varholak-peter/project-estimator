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

export const Website = ({ dispatch, state }: FragmentProps) => (
  <Container className="wrapper">
    <Typography variant="h5" component="h2">
      Website
    </Typography>
    <FormControl component="fieldset">
      <RadioGroup
        aria-label="Website"
        name="website"
        value={state.website}
        onChange={(e) =>
          dispatch({
            type: "website",
            payload: e.target.value as
              | "authorized"
              | "presentational"
              | "user_flow_heavy",
          })
        }
      >
        <FormControlLabel
          value="presentational"
          control={<Radio />}
          label="Presentational"
        />
        <FormControlLabel
          value="authorized"
          control={<Radio />}
          label="Authorized"
        />
        <FormControlLabel
          value="user_flow_heavy"
          control={<Radio />}
          label="User Flow Heavy"
        />
      </RadioGroup>
    </FormControl>
  </Container>
);
