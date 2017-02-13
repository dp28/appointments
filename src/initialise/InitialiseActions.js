import moment from 'moment';

export const INITIALISE = 'INITIALISE';

const DEFAULT_DATA = {
  appointments: [
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
}

export function initialise(data = DEFAULT_DATA) {
  return { type: INITIALISE, data };
}
