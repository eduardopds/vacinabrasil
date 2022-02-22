export function dateToBrazil(date) {
  if (date) {
    return date.substring(0, 10).split('-').reverse().join('/');
  } else {
    return date;
  }
}

export function dateToUSA(date) {
  if (date) {
    return date.split('/').reverse().join('-');
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

export function maskDate(value) {
  if (value) {
    if (value.length === 2 || value.length === 5) {
      value += '/';
    }
  }
  return value;
}
