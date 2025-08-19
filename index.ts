import { flexible1 } from "./src/flexible1";

console.log("Hello via Bun!");

const [, , ...argv] = Bun.argv;

switch (argv[0]) {
  case "flexible1":
    console.log("Running flexible1");
    flexible1();
    break;
}
