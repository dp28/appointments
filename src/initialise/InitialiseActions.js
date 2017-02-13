import moment from 'moment';

import { loadAppointments } from '../state/persistence';

export const INITIALISE = 'INITIALISE';

const DEFAULT_APPOINTMENTS = [
  {
    id:    'some_hopefully_unique_id',
    title: 'Tech meetup',
    start: moment(new Date(2017, 1, 8, 18, 30))
  },
  {
    id:    'some_other_hopefully_unique_id',
    title: 'Harry Potter and the Cursed Child',
    start: moment(new Date(2017, 12, 8, 10, 30))
  },
]

export function initialise() {
  const appointments = loadAppointments() || DEFAULT_APPOINTMENTS
  return { type: INITIALISE, data: { appointments } };
}
