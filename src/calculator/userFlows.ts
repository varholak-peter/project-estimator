import { State } from "../reducer";

export const userFlows = (input: State) =>
  Object.values(input.user_flows).reduce<{
    [name: string]: number;
  }>((acc, user_flow) => {
    let out = 1;

    acc[user_flow.name] = Math.max(Math.ceil(out), 0);

    return acc;
  }, {});
