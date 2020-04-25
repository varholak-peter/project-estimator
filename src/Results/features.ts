import { State } from "../reducer";

export const getAnalyticsText = (input: State) => `
--- <Analytics services>
- Google Analytics?
---

--- <Analytics details>

---
`;

export const getBillingText = (input: State) => `
- Billing API calls
- Validation
- Form
- Billing services: <SERVICE_NAME>
${input.billing_one_time ? "- Separate transactions\n" : ""}\
${input.billing_subscription ? "- Subscription model\n" : ""}\

--- <Billing details>
# Describe Billing flow

${input.billing_other_be ? "# Describe API used\n\n" : ""}\
${input.billing_one_time ? "# Describe transactions model\n\n" : ""}\
${input.billing_subscription ? "# Describe subscription model\n" : ""}\
---
`;

export const getBrowserFeaturesText = (input: State) => `
${input.browser_feature_advanced_storage ? "- Advanced storage\n" : ""}\
${input.browser_feature_camera ? "- Camera\n" : ""}\
${input.browser_feature_location ? "- Location services\n" : ""}\
${input.browser_feature_microphone ? "- Microphone\n" : ""}\
${input.browser_feature_notifications ? "- Notifications\n" : ""}\

--- <Browser features details>
${input.browser_feature_advanced_storage ? "#Describe Advanced storage\n" : ""}\
${input.browser_feature_camera ? "#Describe Camera\n" : ""}\
${input.browser_feature_location ? "#Describe Location services\n" : ""}\
${input.browser_feature_microphone ? "#Describe Microphone\n" : ""}\
${input.browser_feature_notifications ? "#Describe Notifications\n" : ""}\
${input.browser_feature_other ? "#Describe Other features\n" : ""}\
---
`;

export const getFeaturesText = (input: State, label: string) => `
--- <${label} details>

---
`;

export const getSearchText = (input: State) => `
- Search API calls
- Filtering
- Simple or advanced?

--- <Search details>
# Describe search flow
---
`;

export const getSeoText = (input: State) => `
- Meta tags
- Structured data?

--- <SEO details>

---
`;
