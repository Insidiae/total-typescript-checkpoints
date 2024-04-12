import { Equal, Expect } from "../helpers/type-utils";

const BACKEND_TO_FRONTEND_STATUS_MAP = {
  0: "pending",
  1: "success",
  2: "error",
} as const;

type ValueOf<T> = T[keyof T];

type BackendStatus = keyof typeof BACKEND_TO_FRONTEND_STATUS_MAP;
// type FrontendStatus = (typeof BACKEND_TO_FRONTEND_STATUS_MAP)[BackendStatus];
type FrontendStatus = ValueOf<typeof BACKEND_TO_FRONTEND_STATUS_MAP>;

type test = [
  Expect<Equal<BackendStatus, 0 | 1 | 2>>,
  Expect<Equal<FrontendStatus, "pending" | "success" | "error">>
];
