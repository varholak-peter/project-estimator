import dayjs from "dayjs";

import { State } from "../reducer";

import { signin, signup } from "./authorization";
import { documentation } from "./documentation";
import {
  analytics,
  billing,
  browserFeatures,
  features,
  search,
  seo,
} from "./features";
import { admin, cms } from "./maintenance";
import {
  aboutUs,
  billing as billingPage,
  contactUs,
  faq,
  legal,
  pages,
  profile,
  search as searchPage,
} from "./pages";
import { setup } from "./setup";
import { forms, layout, typography } from "./styleguide";
import { userFlows } from "./userFlows";

export type Output = {
  authorization: {
    sign_up: number;
    sign_in: number;
  };
  documentation: number;
  features: {
    analytics: number;
    billing: number;
    browser_features: number;
    features: {
      [name: string]: number;
    };
    search: number;
    seo: number;
  };
  maintenance: {
    admin: number;
    cms: number;
  };
  pages: {
    about_us: number;
    billing: number;
    contact_us: number;
    faq: number;
    legal: number;
    pages: {
      [name: string]: number;
    };
    profile: number;
    search: number;
  };
  setup: number;
  styleguide: {
    forms: number;
    layout: number;
    typography: number;
  };
  user_flows: {
    user_flows: {
      [name: string]: number;
    };
  };
};

export const calculate = (input: State): Output => ({
  authorization: {
    sign_in: signin(input),
    sign_up: signup(input),
  },
  documentation: documentation(input),
  features: {
    analytics: analytics(input),
    billing: billing(input),
    browser_features: browserFeatures(input),
    features: features(input),
    search: search(input),
    seo: seo(input),
  },
  maintenance: {
    admin: admin(input),
    cms: cms(input),
  },
  pages: {
    about_us: aboutUs(input),
    billing: billingPage(input),
    contact_us: contactUs(input),
    faq: faq(input),
    legal: legal(input),
    pages: pages(input),
    profile: profile(input),
    search: searchPage(input),
  },
  setup: setup(input),
  styleguide: {
    forms: forms(input),
    layout: layout(input),
    typography: typography(input),
  },
  user_flows: {
    user_flows: userFlows(input),
  },
});

type RecVal = { [key: string]: number | RecVal } | number;

const reduceMD = (val: RecVal, total = 0): number => {
  if (typeof val === "number") {
    return val;
  }

  return Object.values(val).reduce((acc: number, child) => {
    return acc + reduceMD(child, total);
  }, total);
};

export type Meta = {
  deadlineInDays: number;
  developers: number;
  durationInMD: number;
};

const mdCoeficient = 1.4;

export const getMeta = (input: State, output: Output): Meta => {
  const startDay = dayjs(input.deadline_start);
  const finishDay = dayjs(input.deadline_finish);
  const deadlineInDays = finishDay.diff(startDay, "day");

  const durationInMD = reduceMD(output);

  const developersRaw = (durationInMD * mdCoeficient) / deadlineInDays;
  const developers =
    input.deadline_type === "hard"
      ? Math.ceil(developersRaw * 1.1)
      : Math.round(developersRaw);

  return {
    deadlineInDays,
    developers,
    durationInMD,
  };
};
