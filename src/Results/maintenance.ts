import { State } from "../reducer";

export const getAdminText = (input: State) => `
- Integrated Dashboard or separate service?
- Features management
${input.website !== "presentational" ? "- Customer auth support\n" : ""}\
${
  input.billing_one_time || input.billing_subscription
    ? "- Customer billing support\n"
    : ""
}\

--- <Admin details>
# Describe features management
- Integrations?
---
`;

export const getCMSText = (input: State) => `
- CMS: <SERVICE_NAME>
- Copy changes or content changes?

--- <CMS details>
- Integrations?
---
`;
