import { z } from "zod";

function zodSample2() {
  console.log("This is zodSample function");

  const entries = [
    ["name",  z.string()],
    ["age",   z.number().int()],
    ["email", z.email()],
  ] as const;
  
  type Entry = typeof entries[number];
  type Shape = { [K in Entry as K[0]]: K[1] };
  
  const shape = Object.fromEntries(entries) as unknown as Shape;
  const schema = z.object(shape);

  const inputData = {
    name: "Hanako",
    age: 25,
    email: "hanako@example.com",
  }

  const result = schema.safeParse(inputData);

  console.log(result);
  console.log(result.success);
  console.log(result.data);
  console.log(result.error);
}

zodSample2();