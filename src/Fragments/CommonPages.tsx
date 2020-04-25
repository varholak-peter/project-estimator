import React from "react";
import {
  Checkbox,
  Container,
  FormControl,
  FormControlLabel,
  Typography,
} from "@material-ui/core";

import { FragmentProps } from "./@types";

export const CommonPages = ({ dispatch, state }: FragmentProps) => (
  <Container className="wrapper">
    <Typography variant="h5" component="h2">
      Common Pages
    </Typography>
    <FormControl component="fieldset">
      <FormControlLabel
        checked={state.common_pages_legal}
        control={<Checkbox />}
        label="Legal (Privacy Policy, Terms of Use)"
        onChange={
          ((e: React.ChangeEvent<HTMLInputElement>) =>
            dispatch({
              type: "common_pages_legal",
              payload: e.target.checked,
            })) as any
        }
      />
      <FormControlLabel
        checked={state.common_pages_faq}
        control={<Checkbox />}
        label="FAQ"
        onChange={
          ((e: React.ChangeEvent<HTMLInputElement>) =>
            dispatch({
              type: "common_pages_faq",
              payload: e.target.checked,
            })) as any
        }
      />
      <FormControlLabel
        checked={state.common_pages_about_us}
        control={<Checkbox />}
        label="About Us"
        onChange={
          ((e: React.ChangeEvent<HTMLInputElement>) =>
            dispatch({
              type: "common_pages_about_us",
              payload: e.target.checked,
            })) as any
        }
      />
      <FormControlLabel
        checked={state.common_pages_contact_us}
        control={<Checkbox />}
        label="Contact Us"
        onChange={
          ((e: React.ChangeEvent<HTMLInputElement>) =>
            dispatch({
              type: "common_pages_contact_us",
              payload: e.target.checked,
            })) as any
        }
      />
    </FormControl>
  </Container>
);
