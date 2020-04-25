import React from "react";
import {
  Checkbox,
  Container,
  FormControl,
  FormControlLabel,
  Typography,
} from "@material-ui/core";

import { FragmentProps } from "./@types";

export const BrowserFeatures = ({ dispatch, state }: FragmentProps) => (
  <Container className="wrapper">
    <Typography variant="h5" component="h2">
      Browser Features
    </Typography>
    <FormControl component="fieldset">
      <FormControlLabel
        checked={state.browser_feature_camera}
        control={<Checkbox />}
        label="Camera"
        onChange={
          ((e: React.ChangeEvent<HTMLInputElement>) =>
            dispatch({
              type: "browser_feature_camera",
              payload: e.target.checked,
            })) as any
        }
      />
      <FormControlLabel
        checked={state.browser_feature_microphone}
        control={<Checkbox />}
        label="Microphone"
        onChange={
          ((e: React.ChangeEvent<HTMLInputElement>) =>
            dispatch({
              type: "browser_feature_microphone",
              payload: e.target.checked,
            })) as any
        }
      />
      <FormControlLabel
        checked={state.browser_feature_location}
        control={<Checkbox />}
        label="Location"
        onChange={
          ((e: React.ChangeEvent<HTMLInputElement>) =>
            dispatch({
              type: "browser_feature_location",
              payload: e.target.checked,
            })) as any
        }
      />
      <FormControlLabel
        checked={state.browser_feature_notifications}
        control={<Checkbox />}
        label="Notifications"
        onChange={
          ((e: React.ChangeEvent<HTMLInputElement>) =>
            dispatch({
              type: "browser_feature_notifications",
              payload: e.target.checked,
            })) as any
        }
      />
      <FormControlLabel
        checked={state.browser_feature_advanced_storage}
        control={<Checkbox />}
        label="Advanced Storage"
        onChange={
          ((e: React.ChangeEvent<HTMLInputElement>) =>
            dispatch({
              type: "browser_feature_advanced_storage",
              payload: e.target.checked,
            })) as any
        }
      />
      <FormControlLabel
        checked={state.browser_feature_other}
        control={<Checkbox />}
        label="Other"
        onChange={
          ((e: React.ChangeEvent<HTMLInputElement>) =>
            dispatch({
              type: "browser_feature_other",
              payload: e.target.checked,
            })) as any
        }
      />
    </FormControl>
  </Container>
);
