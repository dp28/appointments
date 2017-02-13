export const TOGGLE_DATE_FOCUS = 'TOGGLE_DATE_FOCUS';
export const SELECT_DATE = 'SELECT_DATE';

export function toggleDateFocus(selectingDate) {
  return { selectingDate, type: TOGGLE_DATE_FOCUS };
}

export function selectDate(date) {
  return { date, type: SELECT_DATE };
}
