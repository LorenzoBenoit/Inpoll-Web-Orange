export function generateRandomCode(min, max) {
  const randomCode = Math.floor(Math.random() * (max - min + 1)) + min;
  return String(randomCode).padStart(new String(max).length, "0");
}
