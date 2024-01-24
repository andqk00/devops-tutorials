import { Fn, Stack } from "aws-cdk-lib";

export function getPrefixFromStack(stack: Stack) {
  const shortStackId = Fn.select(2, Fn.split("/", stack.stackId));
  const prefix = Fn.select(0, Fn.split("-", shortStackId));
  return prefix;
}
