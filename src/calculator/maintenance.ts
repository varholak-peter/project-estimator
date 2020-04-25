import { State } from "../reducer";

export const admin = (input: State) => {
  let out = 5;

  if (!input.billing_one_time && !input.billing_subscription) {
    out -= 3;
  } else if (input.billing_other_be) {
    out -= 2;
  }

  if (input.forms_other_be) {
    out -= 2;
  }

  if (input.website === "presentational") {
    out -= 3;
  }

  if (input.forms === "complex") {
    out += 1;
  }

  if (input.authorization === "complex") {
    out += 1;
  }

  out += Object.values(input.features).reduce((acc, feature) => {
    let out = 0;

    if (feature.other_be && feature.strv_be) {
      out += 1.5;
    } else if (feature.other_be) {
      out += 1;
    } else if (feature.strv_be) {
      out += 1;
    }

    return acc + out;
  }, 0);

  if (input.product === "poc") {
    out = 0;
  }

  return Math.max(Math.ceil(out), 0);
};

export const cms = (input: State) => {
  let out = 4;

  if (input.product === "full_product") {
    out += 2;
  }

  out += Object.values(input.pages).reduce((acc, page) => {
    let out = 0.75;

    if (page.type === "dynamic_cms") {
      out += 0.5;
    }

    return acc + out;
  }, 0);

  out += Object.values(input.features).reduce((acc, feature) => {
    let out = 0;

    if (feature.cms_content) {
      out += 0.5;
    }

    return acc + out;
  }, 0);

  if (input.product === "poc") {
    out = 1 + out / 5;
  }

  return Math.max(Math.ceil(out), 0);
};
