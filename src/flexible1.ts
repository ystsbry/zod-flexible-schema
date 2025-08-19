export function flexible1() {
  console.log("This is flexible1 function");

  const inputs = [
    { key: "name", value: "Hanako" },
    { key: "age", value: 25 },
    { key: "email", value: "hanako@example.com" },
  ];
  
  const obj = inputs.reduce((acc, { key, value }) => {
    acc[key] = value;
    return acc;
  }, {} as Record<string, unknown>);
  
  console.log(obj);
}

flexible1();
