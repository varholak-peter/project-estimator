import React, { useState } from "react";
import {
  Button,
  ButtonProps,
  Container,
  FormControl,
  FormLabel,
  TextField,
  Typography,
} from "@material-ui/core";

import { FragmentProps, UserFlow as UserFlowType } from "./@types";

type UserFlowProps = {
  onRemove: ButtonProps["onClick"];
  userFlow: UserFlowType;
};

const UserFlow = ({ onRemove, userFlow }: UserFlowProps) => (
  <FormControl component="fieldset">
    <FormLabel component="legend">{userFlow.name}</FormLabel>
    <Button variant="contained" color="secondary" onClick={onRemove}>
      Remove
    </Button>
  </FormControl>
);

export const UserFlows = ({ dispatch, state }: FragmentProps) => {
  const [value, setValue] = useState("");
  return (
    <Container
      className="wrapper"
      style={{ display: state.website === "user_flow_heavy" ? "flex" : "none" }}
    >
      <Typography variant="h5" component="h2">
        User Flows
      </Typography>
      <Container disableGutters>
        {Object.values(state.user_flows).map((userFlow) => (
          <UserFlow
            key={userFlow.name}
            onRemove={() => {
              const newUserFlows = {
                ...state.user_flows,
              };
              delete newUserFlows[userFlow.name];
              dispatch({
                type: "user_flows",
                payload: newUserFlows,
              });
            }}
            userFlow={userFlow}
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
              type: "user_flows",
              payload: {
                ...state.user_flows,
                [value]: {
                  name: value,
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
