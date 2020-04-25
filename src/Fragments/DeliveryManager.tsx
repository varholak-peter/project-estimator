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

export const DeliveryManager = ({ dispatch, state }: FragmentProps) => (
  <Container className="wrapper">
    <Typography variant="h5" component="h2">
      Delivery Manager
    </Typography>
    <FormControl component="fieldset">
      <RadioGroup
        aria-label="Delivery Manager"
        name="delivery_manager"
        value={state.delivery_manager}
        onChange={(e) =>
          dispatch({
            type: "delivery_manager",
            payload: e.target.value as "account" | "project" | "product",
          })
        }
      >
        <FormControlLabel value="project" control={<Radio />} label="Project" />
        <FormControlLabel value="product" control={<Radio />} label="Product" />
        <FormControlLabel value="account" control={<Radio />} label="Account" />
      </RadioGroup>
    </FormControl>
  </Container>
);
