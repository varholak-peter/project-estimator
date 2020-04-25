import React from "react";
import {
  Checkbox,
  Container,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  Typography,
} from "@material-ui/core";

import { FragmentProps } from "./@types";

export const Forms = ({ dispatch, state }: FragmentProps) => (
  <Container className="wrapper">
    <Typography variant="h5" component="h2">
      Forms
    </Typography>
    <FormControl component="fieldset">
      <RadioGroup
        aria-label="Forms"
        name="forms"
        value={state.forms}
        onChange={(e) =>
          dispatch({
            type: "forms",
            payload: e.target.value as "complex" | "none" | "simple",
          })
        }
      >
        <FormControlLabel value="none" control={<Radio />} label="None" />
        <FormControlLabel value="simple" control={<Radio />} label="Simple" />
        <FormControlLabel value="complex" control={<Radio />} label="Complex" />
      </RadioGroup>
    </FormControl>
    <FormControl component="fieldset">
      <FormLabel component="legend">Backend</FormLabel>
      <Container className="row order" disableGutters>
        <FormControlLabel
          checked={state.forms_strv_be}
          control={<Checkbox />}
          label="STRV BE"
          onChange={
            ((e: React.ChangeEvent<HTMLInputElement>) =>
              dispatch({
                type: "forms_strv_be",
                payload: e.target.checked,
              })) as any
          }
        />
        <FormControlLabel
          checked={state.forms_other_be}
          control={<Checkbox />}
          label="Other BE"
          onChange={
            ((e: React.ChangeEvent<HTMLInputElement>) =>
              dispatch({
                type: "forms_other_be",
                payload: e.target.checked,
              })) as any
          }
        />
      </Container>
    </FormControl>
  </Container>
);
