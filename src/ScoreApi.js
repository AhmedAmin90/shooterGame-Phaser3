const myApiUrl = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/q9gCOWUoQdHlTLV9p8RX/scores/';

const sendData = async (userName, userScore) => {
   fetch(myApiUrl, {
    method: 'POST',
    mode: 'cors',
    headers: {
      Accept: 'Application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ user: userName, score: userScore }),
  });

  try {
    const res = await fetch(myApiUrl, sendData);
    const data = await res.json();
    return data;
  } catch (error) {
    throw new Error(error);
  }
};

const getData = async () => {
  try {
    const res = await fetch(myApiUrl, {
      method: 'Get',
      mode: 'cors',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });
    const data = await res.json();
    return data;
  } catch (error) {
    throw new Error(error);
  }
};

export {sendData , getData} ;