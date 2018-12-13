export function formatHotelName(str) {
  return str.toUpperCase(str).split('L').join('L ');
}

export function formatFacilityName(str) {
  return str.split(' ').join('');
}
