import React from "react";
import {
  Checkbox,
  Container,
  FormControl,
  FormControlLabel,
  Typography,
} from "@material-ui/core";

import { FragmentProps } from "./@types";

export const Responsiveness = ({ dispatch, state }: FragmentProps) => (
  <Container className="wrapper">
    <Typography variant="h5" component="h2">
      Responsiveness
    </Typography>
    <FormControl component="fieldset">
      <FormControlLabel
        checked={state.responsiveness_desktop}
        control={<Checkbox />}
        label="Desktop"
        onChange={
          ((e: React.ChangeEvent<HTMLInputElement>) =>
            dispatch({
              type: "responsiveness_desktop",
              payload: e.target.checked,
            })) as any
        }
      />
      <FormControlLabel
        checked={state.responsiveness_phone}
        control={<Checkbox />}
        label="Phone"
        onChange={
          ((e: React.ChangeEvent<HTMLInputElement>) =>
            dispatch({
              type: "responsiveness_phone",
              payload: e.target.checked,
            })) as any
        }
      />
      <FormControlLabel
        checked={state.responsiveness_tablet}
        control={<Checkbox />}
        label="Tablet"
        onChange={
          ((e: React.ChangeEvent<HTMLInputElement>) =>
            dispatch({
              type: "responsiveness_tablet",
              payload: e.target.checked,
            })) as any
        }
      />
    </FormControl>
  </Container>
);
