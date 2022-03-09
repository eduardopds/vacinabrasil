export function dateToBrazil(date) {
  if (date) {
    return date.substring(0, 10).split('-').reverse().join('/');
  } else {
    return date;
  }
}
export function maskCPF(value) {
  if (value) {
    if (value.length === 3 || value.length === 7) {
      value += '.';
    } else if (value.length === 11) {
      value += '-';
    }
  }

  return value;
}
