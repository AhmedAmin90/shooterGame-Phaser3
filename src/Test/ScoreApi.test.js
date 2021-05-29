import { getData } from '../ScoreApi';
import 'regenerator-runtime';

global.fetch = jest.fn(() => Promise.resolve({
  json: () => Promise.resolve({
    user: 'Ahmed',
    score: 30,
  }),
}));

describe('Get The score and user', () => {
  test('Return an object with two keys', () => getData().then((response) => {
    expect(typeof response).toBe('object');
    expect(Object.keys(response).length).toEqual(2);
  }));
});

describe('Get the user name and score from myApiUrl', () => {
  test('Return Ahmed and score 30 as the global moch', () => getData().then((response) => {
    expect(response).toEqual({
      user: 'Ahmed',
      score: 30,
    });
  }));
});

describe('Get the user name and score from myApiUrl', () => {
  test('fetch called one time', () => getData().then(() => {
    expect(fetch).toHaveBeenCalledTimes(3);
  }));
});