// Based on:
//  1)  Webpack 5 and Typescript Project Setup Walkthrough
//        https://www.youtube.com/watch?v=4lpmVZdj12g
//  2)  Creating and Understanding a Basic Webpack 5 Setup
//        https://www.youtube.com/watch?v=X1nxTjVDYdQ

const path = require("path");
const DIST = path.resolve(__dirname, "dist");
const MODE = process.env.NODE_ENV || "production";
const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
  // Allow the "production" or "development" to be set in the
  // NODE_ENV environment variable.  If not set, default to "production".
  // This has an affect on the minification / packing during the build.
  mode: MODE,

  // The main script entry point.
  entry: "./src/index.ts",

  // Name and location of the build code.
  output: {
    path: DIST,
    filename: "library-file-name.js",

    // The top-level name of the library.  The library will be bound to this
    // name.
    library: "libraryName",
  },

  // User terser (https://terser.org) for minimization.
  // This can be commented out, but if deactivating remove the
  // plugin at the top and don't install as a dependency.
  optimization: {
    minimize: "production" === MODE,
    minimizer: [new TerserPlugin()],
  },

  module: {
    rules: [
      {
        // Look for typescript files, but not in ./node_modules and use the
        // typescript loader to load typescript files
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "ts-loader"
        }
      }
    ]
  },

  // Source mapping in dev mode, not in prod.
  devtool: "production" === MODE ? false : "source-map",

  // Development server root location.  Can be started via npm start.
  devServer: {
    contentBase: DIST
  },

  resolve: {
    // Only look for javascript and typescript files.
    extensions: [".tsx", ".ts", ".js", ".jsx"]
  }
}
