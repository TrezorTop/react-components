import { RootColorVariables } from "../types/styleVariables";

export const getRootStylePropertyValue = (
  propertyName: Partial<RootColorVariables>
): string => {
  const root = document.querySelector(":root");
  if (!root) throw Error(":root not found");

  return getComputedStyle(root).getPropertyValue(propertyName).trim();
};

export const setRootStylePropertyValue = (
  propertyName: RootColorVariables,
  value: string
): void => {
  document.documentElement.style.setProperty(propertyName, value);
};
