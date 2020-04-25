import { State } from "../reducer";

export const analytics = (input: State) => {
  let out = 2;

  if (input.website === "user_flow_heavy") {
    out += 1;
  }

  if (input.focus === "content") {
    out += 1;
  }

  return Math.max(Math.ceil(out), 0);
};

export const billing = (input: State) => {
  let out = 2;

  if (input.billing_one_time) {
    out += 1;
  }

  if (input.billing_subscription) {
    out += 2;
  }

  if (input.billing_strv_be) {
    out += 1;
  }

  if (input.billing_other_be) {
    out += 2;
  }

  if (!input.billing_one_time && !input.billing_subscription) {
    out = 0;
  }

  return Math.max(Math.ceil(out), 0);
};

export const browserFeatures = (input: State) => {
  let out = 0;

  if (input.browser_feature_advanced_storage) {
    out += 1;
  }

  if (input.browser_feature_camera) {
    out += 2;
  }

  if (input.browser_feature_location) {
    out += 2;
  }

  if (input.browser_feature_microphone) {
    out += 2;
  }

  if (input.browser_feature_notifications) {
    out += 3;
  }

  if (input.browser_feature_other) {
    out += 3;
  }

  return Math.max(Math.ceil(out), 0);
};

export const features = (input: State) =>
  Object.values(input.features).reduce<{
    [name: string]: number;
  }>((acc, feature) => {
    let out = 2;

    if (feature.other_be) {
      out += 1;
    }

    if (feature.type === "complex") {
      out += 2;
    }

    acc[feature.name] = Math.max(Math.ceil(out), 0);

    return acc;
  }, {});

export const search = (input: State) => {
  let out = 1;

  if (input.product === "full_product" || input.website === "user_flow_heavy") {
    out += 1;
  }

  if (input.focus !== "content") {
    out = 0;
  }

  return Math.max(Math.ceil(out), 0);
};

export const seo = (input: State) => {
  let out = 2;

  if (input.focus === "content") {
    out += 1;
  }

  return Math.max(Math.ceil(out), 0);
};
