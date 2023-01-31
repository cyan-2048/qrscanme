import * as fs from "fs/promises";

import esbuild from "esbuild";
const outfile = "./bundle.js";

const gross = await Promise.all(
  [
    "./jquery-3.6.3.js",
    "./qr-scanner.legacy.min.js",
    "./initiation.js",
    "./options.js",
    "./navigation.js",
    "./scanner.js",
    "./render.js",
  ].map((a) => fs.readFile(a, "utf-8"))
);

const { code } = await esbuild.transform(gross.join(";"), {
  minify: true,
  target: "es6",
});

try {
  await fs.writeFile(outfile, code);
} catch (err) {
  console.error(err);
  process.exit(1);
}
