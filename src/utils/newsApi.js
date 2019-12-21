import axios from 'axios';

// example https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=64412a9c50cf4b118f1c9a29f07664b4

export const API_KEY = process.env.REACT_APP_NEWS_API_KEY;
export const baseUrl = 'https://newsapi.org/v2/';
export const topBusinessGB = `${baseUrl}top-headlines?country=gb&category=business&apiKey=${API_KEY}`;

export const getHeadlines = async () => {
  const result = await axios.get(topBusinessGB).then(({ data }) => data);
  console.log(result.articles);
  return result.articles;
};
