import { JsonError } from "./validator";
import { randomUUID } from "crypto";

export function parseJson(arg: string) {
  try {
    return JSON.parse(arg);
  } catch (error) {
    throw new JsonError(error.message);
  }
}

export function createRandomId() {
  return randomUUID();
}
