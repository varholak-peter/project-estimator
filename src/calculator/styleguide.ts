import { State } from "../reducer";

const getScreenSizeCount = (input: State) =>
  [
    input.responsiveness_desktop,
    input.responsiveness_phone,
    input.responsiveness_tablet,
  ].filter((x) => x).length;

export const forms = (input: State) => {
  let out = 0;

  if (input.product === "poc") {
    out += 1;
  } else if (input.product === "mvp" || input.product === "full_product") {
    out += 2;
  }

  if (input.existing_components_design_system) {
    out -= 1;
  }

  if (input.forms === "none") {
    out = 0;
  } else if (input.forms === "complex") {
    out *= 1.5;
  }

  return Math.max(Math.ceil(out), 0);
};

export const layout = (input: State) => {
  let out = 1;

  const screenSizeCount = getScreenSizeCount(input);

  if (input.product === "mvp" || input.product === "full_product") {
    out += 1;
  }

  if (input.focus === "content") {
    out += 1;
  }

  if (screenSizeCount === 1) {
    out -= 1;
  } else if (screenSizeCount === 3) {
    out *= 1.2;
  }

  if (
    input.existing_components_design_system ||
    input.existing_components_strv
  ) {
    out -= 2;
  }

  if (input.existing_components_other) {
    out -= 1;
  }

  if (input.existing_components_storybook) {
    out -= 1;
  }

  return Math.max(Math.ceil(out), 0);
};

export const typography = (input: State) => {
  let out = 1;

  const screenSizeCount = getScreenSizeCount(input);

  if (input.product === "full_product" && screenSizeCount === 3) {
    out += 2;
  } else if (input.product === "mvp" || input.product === "full_product") {
    out += 1;
  }

  if (
    input.existing_components_design_system ||
    input.existing_components_strv
  ) {
    out -= 2;
  }

  if (input.existing_components_other) {
    out -= 1;
  }

  if (input.existing_components_storybook) {
    out -= 1;
  }

  return Math.max(Math.ceil(out), 0);
};
