export function dateToBrazil(date) {
  return date.substring(0, 10).split("-").reverse().join("/");
}

export function dateToUSA(date) {
  return date.split("/").reverse().join("-");
}

export function maskCPF(value) {
  if (value.length === 3 || value.length === 7) {
    value += ".";
  } else if (value.length === 11) {
    value += "-";
  }
  return value;
}

export function maskDate(value) {
  if (value.length === 2 || value.length === 5) {
    value += "/";
  }
  return value;
}
