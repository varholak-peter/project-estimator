import { State } from "../reducer";

export const getSignInText = (input: State) => `
- Sign In API calls
- Validation
- Reset Password
- Form
${input.authorization_social ? "- Social sign in\n" : ""}\
${
  input.authorization_other
    ? "- Sign in using <SERVICE_NAME or client BE>\n"
    : ""
}\

--- <Sign in details>

${input.authorization === "complex" ? "- 2-factor auth?\n" : ""}\
---
`;

export const getSignUpText = (input: State) => `
- Sign Up API calls
${
  input.authorization_other || input.authorization_strv_be
    ? `- Validation
- Form\n`
    : ""
}\
${input.authorization_social ? "- Social sign in\n" : ""}\

--- <Sign up details>
${
  input.authorization === "complex"
    ? "# Describe what happens after sign up\n"
    : ""
}\

- E-mail confirmation?
---
`;
