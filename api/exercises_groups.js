import axios from "axios";
import { endpoint } from "./enpoint";

export const fetchExerciseGroups = (params = {}) => {
  return axios({
    url: `${endpoint}/exercise_groups`,
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

export const fetchExerciseGroup = (params = {}) => {
  return axios({
    url: `${endpoint}/exercise_groups/${params.id}`,
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
