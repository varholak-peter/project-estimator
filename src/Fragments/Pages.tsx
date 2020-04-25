import React, { useState } from "react";
import {
  Button,
  ButtonProps,
  Container,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  RadioGroupProps,
  TextField,
  Typography,
} from "@material-ui/core";

import { FragmentProps, Page as PageType } from "./@types";

type PageProps = {
  onChange: RadioGroupProps["onChange"];
  onRemove: ButtonProps["onClick"];
  page: PageType;
};

const Page = ({ onChange, onRemove, page }: PageProps) => (
  <FormControl component="fieldset">
    <FormLabel component="legend">{page.name}</FormLabel>
    <RadioGroup
      aria-label={page.name}
      name={`page_${page.name}`}
      value={page.type}
      onChange={onChange}
    >
      <Container className="row order" disableGutters>
        <FormControlLabel value="static" control={<Radio />} label="Static" />
        <FormControlLabel
          value="dynamic_be"
          control={<Radio />}
          label="Dynamic from BE"
        />
        <FormControlLabel
          value="dynamic_cms"
          control={<Radio />}
          label="Dynamic from CMS"
        />
      </Container>
    </RadioGroup>
    <Button variant="contained" color="secondary" onClick={onRemove}>
      Remove
    </Button>
  </FormControl>
);

export const Pages = ({ dispatch, state }: FragmentProps) => {
  const [value, setValue] = useState("");
  return (
    <Container className="wrapper">
      <Typography variant="h5" component="h2">
        Pages
      </Typography>
      <Container disableGutters>
        {Object.values(state.pages).map((page) => (
          <Page
            key={page.name}
            onChange={(e) =>
              dispatch({
                type: "pages",
                payload: {
                  ...state.pages,
                  [page.name]: {
                    ...page,
                    type: e.target.value as
                      | "dynamic_be"
                      | "dynamic_cms"
                      | "static",
                  },
                },
              })
            }
            onRemove={() => {
              const newPages = {
                ...state.pages,
              };
              delete newPages[page.name];
              dispatch({
                type: "pages",
                payload: newPages,
              });
            }}
            page={page}
          />
        ))}
      </Container>
      <Container className="confirm-input" disableGutters>
        <TextField
          label="Page Name"
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <Button
          variant="contained"
          color="primary"
          onClick={() => {
            dispatch({
              type: "pages",
              payload: {
                ...state.pages,
                [value]: {
                  name: value,
                  type: "static",
                },
              },
            });
            setValue("");
          }}
        >
          Add
        </Button>
      </Container>
    </Container>
  );
};
