import moment from 'moment';

export const DATE_FORMAT = 'ddd Do MMM, YYYY';
export const DATE_TIME_FORMAT = 'HH:MM, ' + DATE_FORMAT;

export function displayDateTime(dateTime) {
  return moment(dateTime).format(DATE_TIME_FORMAT);
}
