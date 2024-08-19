export const PIE = 3.14159265358979323846;

export function getCircumference(radius) {
  return 2 * PIE * radius;
}

export function getArea(radius) {
  return PIE * radius * radius;
}

export function getVolume(radius) {
  return (4 / 3) * PIE * radius * radius * radius;
}
