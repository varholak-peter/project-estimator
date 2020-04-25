import { State } from "../reducer";

export const getAboutUsText = (input: State) => `
- About Us
`;

export const getBillingText = (input: State) => `
- Billing information
- Form
${input.billing_one_time ? "- Cart\n" : ""}\
${input.billing_subscription ? "- Subscription settings\n" : ""}\

--- <Billing details>
# Describe Billing flow
---
`;

export const getContactUsText = (input: State) => `
- Contact Us

--- <Contact Us details>
# Describe Contact Us flow
- Form or integration?
---
`;

export const getFAQText = (input: State) => `
- FAQ

--- <FAQ details>

---
`;

export const getLegalText = (input: State) => `
- Terms of Use
- Privacy Policy

--- <Legal details>
- Other pages such as DMCA (etc.)
---
`;

export const getPagesText = (input: State, label: string) => `
--- <${label} details>

---
`;

export const getProfileText = (input: State) => `
- Account management
- User Photo upload?
${input.billing_one_time ? "- Transaction history\n" : ""}\
${input.billing_subscription ? "- Subscription management\n" : ""}\
${input.browser_feature_notifications ? "- List of updates?\n" : ""}\

--- <Profile details>
# Describe Profile page
---
`;

export const getSearchText = (input: State) => `
- Search results
- Filtering
- Advanced search?

--- <Search details>
# Describe search page
${input.authorization_social ? "- Link social accounts\n" : ""}\
---
`;
