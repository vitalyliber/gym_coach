import axios from "axios";
import { endpoint } from "./enpoint";

export const fetchExercisePackages = (params = {}) => {
  return axios({
    url: `${endpoint}/exercise_packages`,
    headers: {
      "Content-type": "application/json"
    },
    params: {
      ...params
    },
    method: "GET",
    data: null
  }).then(({ data }) => {
    return data.list;
  });
};

export const fetchExercisePackage = (params = {}) => {
  return axios({
    url: `${endpoint}/exercise_packages/${params.id}`,
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
