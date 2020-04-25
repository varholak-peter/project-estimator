import { State } from "../reducer";

export const setup = (input: State) => {
  let out = 2;

  if (input.website === "authorized" || input.website === "user_flow_heavy") {
    out += 1;
  }

  if (input.website === "user_flow_heavy" && input.product === "full_product") {
    out += 2;
  }

  return Math.max(Math.ceil(out), 0);
};
