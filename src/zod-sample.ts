import { z } from "zod";

function zodSample() {
  console.log("This is zodSample function");

  const inputsType = [
    { key: "name", value: z.string() },
    { key: "age", value: z.number().int() },
    { key: "email", value: z.email() },
  ];

  const schema = z.object(
    inputsType.reduce((acc, { key, value }) => {
      acc[key] = value;
      return acc;
    }, {} as Record<string, z.ZodTypeAny>)
  );

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

zodSample();
