import localForage from "localforage";

const projectMap = localForage.createInstance({
  name: "projectMap",
});

export type Feature = {
  cms_content: boolean;
  name: string;
  other_be: boolean;
  strv_be: boolean;
  type: "complex" | "simple";
};

export type Page = {
  name: string;
  type: "dynamic_be" | "dynamic_cms" | "static";
};

export type UserFlow = {
  name: string;
};

export type Action =
  | { type: "$$load_project"; payload: object }
  | { type: "$name"; payload: string }
  | { type: "$step"; payload: 0 | 1 | 2 | 3 }
  | { type: "authorization"; payload: "simple" | "complex" }
  | { type: "authorization_other"; payload: boolean }
  | { type: "authorization_social"; payload: boolean }
  | { type: "authorization_strv_be"; payload: boolean }
  | { type: "billing_one_time"; payload: boolean }
  | { type: "billing_other_be"; payload: boolean }
  | { type: "billing_strv_be"; payload: boolean }
  | { type: "billing_subscription"; payload: boolean }
  | { type: "browser_feature_advanced_storage"; payload: boolean }
  | { type: "browser_feature_camera"; payload: boolean }
  | { type: "browser_feature_location"; payload: boolean }
  | { type: "browser_feature_microphone"; payload: boolean }
  | { type: "browser_feature_notifications"; payload: boolean }
  | { type: "browser_feature_other"; payload: boolean }
  | { type: "common_pages_about_us"; payload: boolean }
  | { type: "common_pages_contact_us"; payload: boolean }
  | { type: "common_pages_faq"; payload: boolean }
  | { type: "common_pages_legal"; payload: boolean }
  | { type: "deadline_finish"; payload: string }
  | { type: "deadline_start"; payload: string }
  | { type: "deadline_type"; payload: "hard" | "soft" }
  | { type: "delivery_manager"; payload: "account" | "product" | "project" }
  | { type: "existing_components_design_system"; payload: boolean }
  | { type: "existing_components_other"; payload: boolean }
  | { type: "existing_components_storybook"; payload: boolean }
  | { type: "existing_components_strv"; payload: boolean }
  | {
      type: "features";
      payload: {
        [key: string]: Feature;
      };
    }
  | { type: "focus"; payload: "content" | "functional" | "informational" }
  | { type: "forms"; payload: "complex" | "none" | "simple" }
  | { type: "forms_other_be"; payload: boolean }
  | { type: "forms_strv_be"; payload: boolean }
  | {
      type: "pages";
      payload: {
        [key: string]: Page;
      };
    }
  | { type: "product"; payload: "full_product" | "mvp" | "poc" }
  | { type: "responsiveness_desktop"; payload: boolean }
  | { type: "responsiveness_phone"; payload: boolean }
  | { type: "responsiveness_tablet"; payload: boolean }
  | { type: "social_icons"; payload: boolean }
  | { type: "social_share"; payload: boolean }
  | {
      type: "user_flows";
      payload: {
        [key: string]: UserFlow;
      };
    }
  | {
      type: "website";
      payload: "authorized" | "presentational" | "user_flow_heavy";
    };

type ActionMapper<T extends Action["type"], P = Action> = P extends { type: T }
  ? P
  : never;

type StateMap = {
  [T in Action["type"]]: ActionMapper<T>["payload"];
};

export type State = Omit<StateMap, "$$load_project">;

export const initialState: State = {
  $name: "",
  $step: 0,
  authorization: "simple",
  authorization_other: false,
  authorization_social: false,
  authorization_strv_be: false,
  billing_one_time: false,
  billing_other_be: false,
  billing_strv_be: false,
  billing_subscription: false,
  browser_feature_advanced_storage: false,
  browser_feature_camera: false,
  browser_feature_location: false,
  browser_feature_microphone: false,
  browser_feature_notifications: false,
  browser_feature_other: false,
  common_pages_about_us: false,
  common_pages_contact_us: false,
  common_pages_faq: false,
  common_pages_legal: false,
  deadline_finish: String(new Date()),
  deadline_start: String(new Date()),
  deadline_type: "hard",
  delivery_manager: "project",
  existing_components_design_system: false,
  existing_components_other: false,
  existing_components_storybook: false,
  existing_components_strv: false,
  features: {},
  focus: "informational",
  forms: "simple",
  forms_other_be: false,
  forms_strv_be: false,
  pages: {},
  product: "full_product",
  responsiveness_desktop: true,
  responsiveness_phone: true,
  responsiveness_tablet: false,
  social_icons: false,
  social_share: false,
  user_flows: {},
  website: "presentational",
};

export const reducer = (state: State, { type, payload }: Action): State => {
  console.log(`Old State:`, state);
  console.log(`Reducer update(${type}):`, payload);

  if (type === "$$load_project") {
    return {
      ...initialState,
      ...(payload as object),
    };
  }

  if (type === "$step") {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  const newState = {
    ...state,
    [type]: payload,
  };

  console.log(`New state:`, newState);

  projectMap.setItem<object>(newState.$name, newState);

  return newState;
};
