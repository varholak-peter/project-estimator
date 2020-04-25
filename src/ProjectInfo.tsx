import React from "react";
import { Button, Container, Typography } from "@material-ui/core";

import { FragmentProps } from "./Fragments/@types";
import { Deadline, DeliveryManager, Product } from "./Fragments";

export const ProjectInfo = ({ dispatch, state }: FragmentProps) => (
  <Container
    disableGutters
    style={{ display: state.$step === 1 ? "block" : "none" }}
  >
    <Typography variant="h4" component="h1">
      {`Project Info (${state.$name})`}
    </Typography>

    <DeliveryManager dispatch={dispatch} state={state} />
    <Deadline dispatch={dispatch} state={state} />
    <Product dispatch={dispatch} state={state} />

    <Container className="row btn-group" disableGutters>
      <Button
        style={{ visibility: "hidden" }}
        className="btn"
        variant="outlined"
        color="primary"
        onClick={() => dispatch({ type: "$step", payload: 0 })}
      >
        {"< Previous"}
      </Button>
      <Button
        className="btn"
        variant="outlined"
        color="primary"
        onClick={() => dispatch({ type: "$step", payload: 2 })}
      >
        Next >
      </Button>
    </Container>
  </Container>
);
