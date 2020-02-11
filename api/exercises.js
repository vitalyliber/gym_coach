import axios from "axios";
import { endpoint } from "./enpoint";

export const fetchExercises = (params = {}) => {
  return axios({
    url: `${endpoint}/exercises`,
    headers: {
      "Content-type": "application/json"
    },
    params: {
      _sort: 'exercise_group:ASC',
      ...params
    },
    method: "GET",
    data: null
  }).then(({ data }) => {
    return data;
  });
};
