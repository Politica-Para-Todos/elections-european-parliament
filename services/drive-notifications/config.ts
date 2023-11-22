export function definedAppPort(): number {
  if (!process.env.EXPRESS_PORT) {
    throw new Error('App port is not defined. Please provide a port as an env variable.');
  }
  return Number(process.env.EXPRESS_PORT);
}
