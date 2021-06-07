// ========================================================================= //
//                       main entry point of library                         //
// ========================================================================= //

// Exports are exported to the root of the library.
// Classes, functions and constants should be exported here.

// Note that internally the function is named "my_floor" but it is exposed
// externally as "flr".
export {my_floor as flr} from "./my_math";
