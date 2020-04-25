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

export const Product = ({ dispatch, state }: FragmentProps) => (
  <Container className="wrapper">
    <Typography variant="h5" component="h2">
      Product
    </Typography>
    <FormControl component="fieldset">
      <RadioGroup
        aria-label="Product"
        name="product"
        value={state.product}
        onChange={(e) =>
          dispatch({
            type: "product",
            payload: e.target.value as "full_product" | "mvp" | "poc",
          })
        }
      >
        <FormControlLabel
          value="full_product"
          control={<Radio />}
          label="Full Product"
        />
        <FormControlLabel value="mvp" control={<Radio />} label="MVP" />
        <FormControlLabel value="poc" control={<Radio />} label="PoC" />
      </RadioGroup>
    </FormControl>
  </Container>
);
