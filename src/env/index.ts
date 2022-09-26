const VARIABLES = {
  JWT_KEY: process.env.JWT_KEY,
};
const ENV = VARIABLES as Record<keyof typeof VARIABLES, string>;

export { ENV };
