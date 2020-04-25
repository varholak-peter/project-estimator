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

export const Authorization = ({ dispatch, state }: FragmentProps) => (
  <Container
    className="wrapper"
    style={{ display: state.website === "presentational" ? "none" : "flex" }}
  >
    <Typography variant="h5" component="h2">
      Authorization
    </Typography>
    <FormControl component="fieldset">
      <RadioGroup
        aria-label="Authorization"
        name="authorization"
        value={state.authorization}
        onChange={(e) =>
          dispatch({
            type: "authorization",
            payload: e.target.value as "simple" | "complex",
          })
        }
      >
        <FormControlLabel value="simple" control={<Radio />} label="Simple" />
        <FormControlLabel value="complex" control={<Radio />} label="Complex" />
      </RadioGroup>
    </FormControl>
    <FormControl component="fieldset">
      <FormLabel component="legend">Service</FormLabel>
      <Container className="row order" disableGutters>
        <FormControlLabel
          checked={state.authorization_social}
          control={<Checkbox />}
          label="Social (Google, Facebook,...)"
          onChange={
            ((e: React.ChangeEvent<HTMLInputElement>) =>
              dispatch({
                type: "authorization_social",
                payload: e.target.checked,
              })) as any
          }
        />
        <FormControlLabel
          checked={state.authorization_strv_be}
          control={<Checkbox />}
          label="STRV BE"
          onChange={
            ((e: React.ChangeEvent<HTMLInputElement>) =>
              dispatch({
                type: "authorization_strv_be",
                payload: e.target.checked,
              })) as any
          }
        />
        <FormControlLabel
          checked={state.authorization_other}
          control={<Checkbox />}
          label="Other"
          onChange={
            ((e: React.ChangeEvent<HTMLInputElement>) =>
              dispatch({
                type: "authorization_other",
                payload: e.target.checked,
              })) as any
          }
        />
      </Container>
    </FormControl>
  </Container>
);
