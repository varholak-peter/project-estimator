import React from "react";
import {
  Checkbox,
  Container,
  FormControl,
  FormControlLabel,
  FormLabel,
  Typography,
} from "@material-ui/core";

import { FragmentProps } from "./@types";

export const Billing = ({ dispatch, state }: FragmentProps) => (
  <Container
    className="wrapper"
    style={{ display: state.website === "presentational" ? "none" : "flex" }}
  >
    <Typography variant="h5" component="h2">
      Billing
    </Typography>
    <FormControl component="fieldset">
      <FormLabel component="legend">Payments</FormLabel>
      <Container className="row order" disableGutters>
        <FormControlLabel
          checked={state.billing_one_time}
          control={<Checkbox />}
          label="One time"
          onChange={
            ((e: React.ChangeEvent<HTMLInputElement>) =>
              dispatch({
                type: "billing_one_time",
                payload: e.target.checked,
              })) as any
          }
        />
        <FormControlLabel
          checked={state.billing_subscription}
          control={<Checkbox />}
          label="Subscription"
          onChange={
            ((e: React.ChangeEvent<HTMLInputElement>) =>
              dispatch({
                type: "billing_subscription",
                payload: e.target.checked,
              })) as any
          }
        />
      </Container>
    </FormControl>
    <FormControl component="fieldset">
      <FormLabel component="legend">Backend</FormLabel>
      <Container className="row order" disableGutters>
        <FormControlLabel
          checked={state.billing_strv_be}
          control={<Checkbox />}
          label="STRV BE"
          onChange={
            ((e: React.ChangeEvent<HTMLInputElement>) =>
              dispatch({
                type: "billing_strv_be",
                payload: e.target.checked,
              })) as any
          }
        />
        <FormControlLabel
          checked={state.billing_other_be}
          control={<Checkbox />}
          label="Other BE"
          onChange={
            ((e: React.ChangeEvent<HTMLInputElement>) =>
              dispatch({
                type: "billing_other_be",
                payload: e.target.checked,
              })) as any
          }
        />
      </Container>
    </FormControl>
  </Container>
);
