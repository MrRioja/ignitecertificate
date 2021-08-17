export const handle = async (event) => {
  return {
    statusCode: 201,
    body: JSON.stringify({
      message: "Salve quebrada",
    }),
    headers: {
      "Content-Type": "Application/json",
    },
  };
};
