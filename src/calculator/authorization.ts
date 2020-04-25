import { State } from "../reducer";

export const signin = (input: State) => {
  let out = 1;

  if (input.authorization === "complex") {
    out += 1;
  }

  if (input.authorization_strv_be) {
    out += 1;
  }

  if (input.authorization_other) {
    out += 2;
  }

  if (input.website === "presentational") {
    out = 0;
  }

  return Math.max(Math.ceil(out), 0);
};

export const signup = (input: State) => {
  let out = 2;

  if (input.authorization_social) {
    out += 1;
  }

  if (input.authorization_strv_be) {
    out += 1;
  }

  if (input.authorization_other) {
    out += 2;
  }

  if (input.authorization === "complex" && input.product === "full_product") {
    out *= 2.5;
  } else if (input.authorization === "complex") {
    out *= 2;
  }

  if (input.website === "presentational") {
    out = 0;
  }

  return Math.max(Math.ceil(out), 0);
};
