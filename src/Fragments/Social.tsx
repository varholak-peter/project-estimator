import React from "react";
import {
  Checkbox,
  Container,
  FormControl,
  FormControlLabel,
  Typography,
} from "@material-ui/core";

import { FragmentProps } from "./@types";

export const Social = ({ dispatch, state }: FragmentProps) => (
  <Container className="wrapper">
    <Typography variant="h5" component="h2">
      Social
    </Typography>
    <FormControl component="fieldset">
      <FormControlLabel
        checked={state.social_icons}
        control={<Checkbox />}
        label="Icons"
        onChange={
          ((e: React.ChangeEvent<HTMLInputElement>) =>
            dispatch({
              type: "social_icons",
              payload: e.target.checked,
            })) as any
        }
      />
      <FormControlLabel
        checked={state.social_share}
        control={<Checkbox />}
        label="Share"
        onChange={
          ((e: React.ChangeEvent<HTMLInputElement>) =>
            dispatch({
              type: "social_share",
              payload: e.target.checked,
            })) as any
        }
      />
    </FormControl>
  </Container>
);
