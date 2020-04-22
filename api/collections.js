import axios from "axios";
import { endpoint } from "./enpoint";

export const fetchCollections = (params = {}) => {
  return axios({
    url: `${endpoint}/exercise_collections`,
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

export const fetchCollection = (params = {}) => {
  return axios({
    url: `${endpoint}/exercise_collections/${params.id}`,
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
