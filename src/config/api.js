export const API_URL =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:1337'
    : process.env.REACT_APP_API_URL;
