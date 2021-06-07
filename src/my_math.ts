// Example of importing from another file.
// Wildcards and name substitution are also possible.  See typescript docs.
import {FLOOR_ADD} from "./my_consts";

// Export the function for the ability to import in another file.
export function my_floor(x: number): number {
  return Math.floor(x) + FLOOR_ADD;
}
