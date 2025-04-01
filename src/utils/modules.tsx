// NOTE:
// 1. Commonjs, AMD, UMD, ESModules
// 2. Converting commonjs to esmodules
// const fs = require("fs") =>
// import * as fs from "fs"
// 2. !!!Exception Alert: export = createBanana - it is a function
// Either turn on esmoduleinterop flag or
// use older syntax: import createBanana = require('./createBanana')
// 3. Importing files other than js, like png
// import img from './file.png'
declare module "*.png" {
  const imgUrl: string;
  export default imgUrl;
}
