import {sendData , getData}  from '../ScoreApi'


global.fetch = jest.fn(()=> 
Promise.resolve({
    json: () => Promise.resolve({
        user: 'Ahmed',
        score: 30
    } 
    // {score: 28, user: "Test"},
    // {score: 28, user: "Test Two"}
    // // {score: 26, user: "vv"},
    // // {score: 17, user: "TEST2"},
    // // {user: "TEST", score: 15},
    // // {user: "AhmeD", score: 7},
    // // {user: "Tef", score: 6},
    // // {score: 4, user: "v"},
    // // {user: "Army", score: "0"}
    )
    }))



describe('Send user name and the score', () => {
    test('Save the user name and the score', () => sendData('Ahmed', 30).then((response) => {
      expect(typeof response).toBe('object');
      expect(response).toEqual({
        user: 'Ahmed',
        score: 30
    })
    }));
  });


describe('Using an API to post new scores', () => {
    test('Should save a new score with the username', () => sendData('Ahmed', 30).then((response) => {
      expect(response).toEqual({
        user: 'Ahmed',
        score: 30
    })
    }));
  });

  describe('Get The score and user', () => {
    test('Return an object with two keys', () => getData().then((response) => {
      expect(typeof response).toBe('object');
      expect(Object.keys(response).length).toEqual(2)
    }));
  });

  describe('Get the user name and score from myApiUrl', () => {
    test('Return Ahmed and score 30 as the global moch', () => getData().then((response) => {
      expect(response).toEqual({
        user: 'Ahmed',
        score: 30
    })
    }));
  });
