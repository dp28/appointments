export const SELECT_MINUTE = 'SELECT_MINUTE';
export const SELECT_HOUR = 'SELECT_HOUR';

export function selectMinute(minute) {
  return { minute, type: SELECT_MINUTE };
}

export function selectHour(hour) {
  return { hour, type: SELECT_HOUR };
}
