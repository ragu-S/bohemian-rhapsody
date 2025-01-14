import { TAPIError } from "../hooks/types";

export const customLoggerFunction = (type: string, err: TAPIError) => {
  // Custom logger function to handle where to log errors, ie. to logrocket, etc.
  console.error(type, err);
}