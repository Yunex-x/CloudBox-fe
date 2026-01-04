export async function login(email: string, password: string) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        user: { id: "1", email },
        token: "fake-token",
      });
    }, 1000);
  });
}
