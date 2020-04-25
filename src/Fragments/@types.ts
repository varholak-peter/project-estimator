import {
  Action,
  Feature as FeatureType,
  Page as PageType,
  State,
  UserFlow as UserFlowType,
} from "../reducer";

export type FragmentProps = {
  dispatch: React.Dispatch<Action>;
  state: State;
};

export type Feature = FeatureType;
export type Page = PageType;
export type UserFlow = UserFlowType;
