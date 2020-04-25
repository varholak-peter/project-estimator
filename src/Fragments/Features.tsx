import React, { useState } from "react";
import {
  Button,
  ButtonProps,
  Checkbox,
  Container,
  FormControl,
  FormControlLabel,
  FormControlLabelProps,
  FormLabel,
  Radio,
  RadioGroup,
  RadioGroupProps,
  TextField,
  Typography,
} from "@material-ui/core";

import { FragmentProps, Feature as FeatureType } from "./@types";

type FeatureProps = {
  feature: FeatureType;
  onChange: (label: string) => FormControlLabelProps["onChange"];
  onChangeType: RadioGroupProps["onChange"];
  onRemove: ButtonProps["onClick"];
};

const Feature = ({
  feature,
  onChange,
  onChangeType,
  onRemove,
}: FeatureProps) => (
  <FormControl component="fieldset">
    <FormLabel component="legend">{feature.name}</FormLabel>
    <RadioGroup
      aria-label={feature.name}
      name={`feature_${feature.name}`}
      value={feature.type}
      onChange={onChangeType}
    >
      <Container className="row order" disableGutters>
        <FormControlLabel value="simple" control={<Radio />} label="Simple" />
        <FormControlLabel value="complex" control={<Radio />} label="Complex" />
      </Container>
    </RadioGroup>
    <Container className="row order" disableGutters>
      <FormControlLabel
        checked={feature.strv_be}
        control={<Checkbox />}
        label="STRV BE"
        onChange={onChange("strv_be")}
      />
      <FormControlLabel
        checked={feature.other_be}
        control={<Checkbox />}
        label="Other BE"
        onChange={onChange("other_be")}
      />
      <FormControlLabel
        checked={feature.cms_content}
        control={<Checkbox />}
        label="CMS Content"
        onChange={onChange("cms_content")}
      />
    </Container>
    <Button variant="contained" color="secondary" onClick={onRemove}>
      Remove
    </Button>
  </FormControl>
);

export const Features = ({ dispatch, state }: FragmentProps) => {
  const [value, setValue] = useState("");
  return (
    <Container className="wrapper">
      <Typography variant="h5" component="h2">
        Features
      </Typography>
      <Container disableGutters>
        {Object.values(state.features).map((feature) => (
          <Feature
            key={feature.name}
            onChange={(label) => (e) =>
              dispatch({
                type: "features",
                payload: {
                  ...state.features,
                  [feature.name]: {
                    ...feature,
                    [label]: (e.target as any).checked,
                  },
                },
              })}
            onChangeType={(e) =>
              dispatch({
                type: "features",
                payload: {
                  ...state.features,
                  [feature.name]: {
                    ...feature,
                    type: e.target.value as "complex" | "simple",
                  },
                },
              })
            }
            onRemove={() => {
              const newFeatures = {
                ...state.features,
              };
              delete newFeatures[feature.name];
              dispatch({
                type: "features",
                payload: newFeatures,
              });
            }}
            feature={feature}
          />
        ))}
      </Container>
      <Container className="confirm-input" disableGutters>
        <TextField
          label="Feature Name"
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <Button
          variant="contained"
          color="primary"
          onClick={() => {
            dispatch({
              type: "features",
              payload: {
                ...state.features,
                [value]: {
                  cms_content: false,
                  name: value,
                  other_be: false,
                  strv_be: false,
                  type: "simple",
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
