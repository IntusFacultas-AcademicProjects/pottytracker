import * as axios from 'axios';

const axiosConfig = {
  // eslint-disable-next-line no-undef
  baseURL: SERVER_CONFIGURATION.baseUrl,
};
export const API = {
  axiosInstance: axios.create(axiosConfig),
  // eslint-disable-next-line no-undef
  configureUrl: (url) => `${SERVER_CONFIGURATION.baseUrl}${url}`,
  post: (url, data) => fetch(url, data),
  submit: async (data) => {
    const response = await this.post(this.configureUrl('records/'), data);
    return response.json();
  },
};

export default API;
