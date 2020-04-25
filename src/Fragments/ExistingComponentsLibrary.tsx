import React from "react";
import {
  Checkbox,
  Container,
  FormControl,
  FormControlLabel,
  Typography,
} from "@material-ui/core";

import { FragmentProps } from "./@types";

export const ExistingComponentsLibrary = ({
  dispatch,
  state,
}: FragmentProps) => (
  <Container className="wrapper">
    <Typography variant="h5" component="h2">
      Existing Components Library
    </Typography>
    <FormControl component="fieldset">
      <FormControlLabel
        checked={state.existing_components_design_system}
        control={<Checkbox />}
        label="Design System"
        onChange={
          ((e: React.ChangeEvent<HTMLInputElement>) =>
            dispatch({
              type: "existing_components_design_system",
              payload: e.target.checked,
            })) as any
        }
      />
      <FormControlLabel
        checked={state.existing_components_strv}
        control={<Checkbox />}
        label="STRV Made"
        onChange={
          ((e: React.ChangeEvent<HTMLInputElement>) =>
            dispatch({
              type: "existing_components_strv",
              payload: e.target.checked,
            })) as any
        }
      />
      <FormControlLabel
        checked={state.existing_components_other}
        control={<Checkbox />}
        label="Customer Made"
        onChange={
          ((e: React.ChangeEvent<HTMLInputElement>) =>
            dispatch({
              type: "existing_components_other",
              payload: e.target.checked,
            })) as any
        }
      />
      <FormControlLabel
        checked={state.existing_components_storybook}
        control={<Checkbox />}
        label="Storybook"
        onChange={
          ((e: React.ChangeEvent<HTMLInputElement>) =>
            dispatch({
              type: "existing_components_storybook",
              payload: e.target.checked,
            })) as any
        }
      />
    </FormControl>
  </Container>
);
