import { State } from "../reducer";

export const aboutUs = (input: State) => {
  let out = 1;

  if (!input.common_pages_about_us) {
    out = 0;
  }

  return Math.max(Math.ceil(out), 0);
};

export const billing = (input: State) => {
  let out = 2;

  if (input.product === "full_product") {
    out += 1;
  }

  if (input.billing_other_be) {
    out += 1;
  }

  if (!input.billing_one_time && !input.billing_subscription) {
    out = 0;
  }

  return Math.max(Math.ceil(out), 0);
};

export const contactUs = (input: State) => {
  let out = 2;

  if (!input.common_pages_contact_us) {
    out = 0;
  }

  return Math.max(Math.ceil(out), 0);
};

export const faq = (input: State) => {
  let out = 3;

  if (!input.common_pages_faq) {
    out = 0;
  }

  return Math.max(Math.ceil(out), 0);
};

export const legal = (input: State) => {
  let out = 1;

  if (!input.common_pages_legal) {
    out = 0;
  }

  return Math.max(Math.ceil(out), 0);
};

export const pages = (input: State) =>
  Object.values(input.pages).reduce<{
    [name: string]: number;
  }>((acc, page) => {
    let out = 2;

    if (page.type === "dynamic_cms") {
      out += 1;
    } else if (page.type === "dynamic_be") {
      out += 2;
    }

    if (input.product === "full_product") {
      out *= 1.5;
    }

    acc[page.name] = Math.max(Math.ceil(out), 0);

    return acc;
  }, {});

export const profile = (input: State) => {
  let out = 4;

  if (input.website === "user_flow_heavy") {
    out += 2;
  }

  if (input.focus === "content") {
    out += 1;
  } else if (input.focus === "functional") {
    out += 1;
  }

  if (input.authorization === "complex") {
    out += 1;
  }

  if (input.website === "presentational") {
    out = 0;
  }

  return Math.max(Math.ceil(out), 0);
};

export const search = (input: State) => {
  let out = 2;

  if (input.product === "full_product" && input.website === "user_flow_heavy") {
    out += 1;
  }

  if (input.focus !== "content") {
    out = 0;
  }

  return Math.max(Math.ceil(out), 0);
};
