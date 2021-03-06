import axios from "axios";
import { endpoint } from "./enpoint";

export const fetchExercises = (params = {}) => {
  return axios({
    url: `${endpoint}/exercises`,
    headers: {
      "Content-type": "application/json"
    },
    params: {
      ...params
    },
    method: "GET",
    data: null
  }).then(({ data }) => {
    return data;
  });
};

export const fetchExercise = (params = {}) => {
  return axios({
    url: `${endpoint}/exercises/${params.id}`,
    headers: {
      "Content-type": "application/json"
    },
    params: {
      ...params
    },
    method: "GET",
    data: null
  }).then(({ data }) => {
    return data;
  });
};
