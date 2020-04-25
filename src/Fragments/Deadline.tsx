import React from "react";
import {
  Container,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  Typography,
} from "@material-ui/core";
import { DatePicker } from "@material-ui/pickers";
import "dayjs";

import { FragmentProps } from "./@types";

export const Deadline = ({ dispatch, state }: FragmentProps) => (
  <Container className="wrapper">
    <Typography variant="h5" component="h2">
      Deadline
    </Typography>
    <Container className="row" disableGutters>
      <FormControl component="fieldset">
        <FormLabel component="legend">Project start</FormLabel>
        <DatePicker
          autoOk
          disableToolbar
          onChange={(date) =>
            dispatch({
              type: "deadline_start",
              payload: date?.toString() || state.deadline_start,
            })
          }
          style={{ cursor: "pointer", minWidth: "250px" }}
          value={state.deadline_start}
          variant="inline"
        />
      </FormControl>
      <FormControl component="fieldset">
        <FormLabel component="legend">Project finish</FormLabel>
        <DatePicker
          autoOk
          disableToolbar
          onChange={(date) =>
            dispatch({
              type: "deadline_finish",
              payload: date?.toString() || state.deadline_finish,
            })
          }
          style={{ cursor: "pointer", minWidth: "250px" }}
          value={state.deadline_finish}
          variant="inline"
        />
      </FormControl>
    </Container>
    <FormControl component="fieldset">
      <FormLabel component="legend">Deadline</FormLabel>
      <RadioGroup
        aria-label="Deadline Type"
        name="deadline_type"
        value={state.deadline_type}
        onChange={(e) =>
          dispatch({
            type: "deadline_type",
            payload: e.target.value as "hard" | "soft",
          })
        }
      >
        <FormControlLabel value="hard" control={<Radio />} label="Hard" />
        <FormControlLabel value="soft" control={<Radio />} label="Soft" />
      </RadioGroup>
    </FormControl>
  </Container>
);
