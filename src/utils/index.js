// Capitalize the first letter of every word in a string
export const capitalize = (text) =>
  text
    .toLowerCase()
    .split(" ")
    .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
    .join(" ");
