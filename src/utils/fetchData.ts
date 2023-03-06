import { IFetchOptions } from "../@types";

interface IExerciseFetchOptions extends IFetchOptions {
  headers: {
    "X-RapidAPI-Key"?: string;
    "X-RapidAPI-Host": string;
  };
}

export const exerciseOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
  },
};

export const BASE_URL: string = process.env.REACT_APP_BASE_URL || "";

export const fetchData = async <T>(
  url: string,
  options?: IExerciseFetchOptions
): Promise<T> => {
  const response = await fetch(url, options);
  const data = await response.json();

  return data as T;
};
