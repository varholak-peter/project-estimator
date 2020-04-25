import dayjs from "dayjs";

import { State } from "../reducer";

export const documentation = (input: State) => {
  let out = 1;

  const durationInMonths = dayjs(input.deadline_finish).diff(
    dayjs(input.deadline_start),
    "month"
  );

  if (input.product === "poc") {
    out = 0;
  } else if (input.product === "mvp") {
    out += Math.round(durationInMonths / 3);
  } else if (input.product === "full_product") {
    out += 1 + Math.round(durationInMonths / 2.5);
  }

  return Math.max(Math.ceil(out), 0);
};
