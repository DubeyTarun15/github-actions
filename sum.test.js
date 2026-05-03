test("checks if the secret password is correct", () => {
  const password = process.env.MY_SECRET_PASSWORD;
  expect(password).toBe("super_secret_123");
});
