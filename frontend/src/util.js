export function dateToBrazil(date) {
  if (date) {
    return date.split('-').reverse().join('/');
  } else {
    return date;
  }
}
