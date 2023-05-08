import { Show } from "interfaces";

export const getMovies = async () => {
  const response = await fetch("https://static.rviewer.io/challenges/datasets/dreadful-tomatoes/data.json");
  const data = await response.json();
  return data.entries
    .filter((item: Show) => item.programType === "movies")
    .sort((a: Show, b: Show) => b.releaseYear - a.releaseYear);
};

export const getSeries = async () => {
  const response = await fetch("https://static.rviewer.io/challenges/datasets/dreadful-tomatoes/data.json");
  const data = await response.json();
  return data.entries
    .filter((item: Show) => item.programType === "series")
    .sort((a: Show, b: Show) => b.releaseYear - a.releaseYear);
};