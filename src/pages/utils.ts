const monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
];

export const getDateFormat = function getDateFormat(datePicked?: Date | null): string {
  let date = new Date();
  if (datePicked) {
    date = new Date(datePicked);
    const monthName = monthNames[date.getMonth()];
    return `${date.getDate()} ${monthName} ${date.getFullYear()}`;
  }
  return '';
};
