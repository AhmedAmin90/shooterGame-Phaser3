const myApiUrl = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/q9gCOWUoQdHlTLV9p8RX/scores/';

const sendData = (userName, userScore) => {
  fetch(myApiUrl, {
    method: 'POST',
    mode: 'cors',
    headers: {
      'content-type': 'application/json; charset=UTF-8',
    },
    body: JSON.stringify({ user: userName, score: userScore }),
  }).then((res) => {
    res.json();
  }).then((json) => json);
};

const getData = () => new Promise((resolve, reject) => {
  fetch(myApiUrl)
    .then((response) => response.json())
    .then((json) => {
      resolve(json);
    }).catch((e) => {
      reject(e);
    });
});

export { sendData, getData };