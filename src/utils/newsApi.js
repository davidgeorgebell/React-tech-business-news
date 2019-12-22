import axios from 'axios';

export const API_KEY = process.env.REACT_APP_NEWS_API_KEY;
export const baseUrl = 'https://newsapi.org/v2/';
export const topBusinessGB = `${baseUrl}top-headlines?country=gb&category=business&apiKey=${API_KEY}`;
export const topTechGB = `${baseUrl}top-headlines?country=gb&category=technology&apiKey=${API_KEY}`;

export const getTech = async () => {
  const result = await axios.get(topTechGB).then(({ data }) => data);
  return result.articles;
};

export const getHeadlines = async () => {
  const result = await axios.get(topBusinessGB).then(({ data }) => data);
  return result.articles;
};
