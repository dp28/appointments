export const CREATE_APPOINTMENT = 'CREATE_APPOINTMENT';

export function createAppointment(title) {
  return { title, type: CREATE_APPOINTMENT };
}
