const localhost = 'http://localhost:1337';

export const API_URL =
  process.env.NODE_ENV === 'production'
    ? process.env.REACT_APP_API_URL
    : localhost;
