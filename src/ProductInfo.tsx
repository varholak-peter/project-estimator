import React from "react";
import { Button, Container, Typography } from "@material-ui/core";

import { FragmentProps } from "./Fragments/@types";
import {
  Authorization,
  Billing,
  BrowserFeatures,
  CommonPages,
  ExistingComponentsLibrary,
  Features,
  Focus,
  Forms,
  Pages,
  Responsiveness,
  Social,
  UserFlows,
  Website,
} from "./Fragments";

export const ProductInfo = ({ dispatch, state }: FragmentProps) => (
  <Container
    disableGutters
    style={{ display: state.$step === 2 ? "block" : "none" }}
  >
    <Typography variant="h4" component="h1">
      {`Product Info (${state.$name})`}
    </Typography>

    <Website dispatch={dispatch} state={state} />
    <Focus dispatch={dispatch} state={state} />
    <Responsiveness dispatch={dispatch} state={state} />
    <Forms dispatch={dispatch} state={state} />
    <Authorization dispatch={dispatch} state={state} />
    <Billing dispatch={dispatch} state={state} />
    <ExistingComponentsLibrary dispatch={dispatch} state={state} />
    <BrowserFeatures dispatch={dispatch} state={state} />
    <CommonPages dispatch={dispatch} state={state} />
    <Social dispatch={dispatch} state={state} />

    <Pages dispatch={dispatch} state={state} />
    <Features dispatch={dispatch} state={state} />
    <UserFlows dispatch={dispatch} state={state} />

    <Container className="row btn-group" disableGutters>
      <Button
        className="btn"
        variant="outlined"
        color="primary"
        onClick={() => dispatch({ type: "$step", payload: 1 })}
      >
        {"< Previous"}
      </Button>
      <Button
        className="btn"
        variant="contained"
        color="primary"
        onClick={() => dispatch({ type: "$step", payload: 3 })}
      >
        Calculate
      </Button>
    </Container>
  </Container>
);
