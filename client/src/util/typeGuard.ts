export const typeGuard = <T>(data: unknown): data is T => {
  return Array.isArray(data);
};
