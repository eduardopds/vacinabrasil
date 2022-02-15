export function dateToBrazil(date) {
  return date.substring(0, 10).split("-").reverse().join("/");
}

export function dateToUSA(date) {
  return date.split("/").reverse().join("-");
}
