import * as axios from 'axios';

const axiosConfig = {
  baseURL: document.getElementById('server-URL').value,
};
export const API = {
  axiosInstance: axios.create(axiosConfig),
  submit(data) {
    return this.axiosInstance.post('records/', data);
  },
};

export default API;
