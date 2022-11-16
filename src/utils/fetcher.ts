import axios, { AxiosRequestConfig } from 'axios';

/**
 * Common fetcher to use by default for SWR.
 */
//export default (resource: RequestInfo, init?: RequestInit) => fetch(resource, init).then(res => res.json());
export default (url: string) => axios.get(url).then(res => res.data);

axios.interceptors.request.use((config: AxiosRequestConfig<any>) => {
  if (config.headers) {
    config.headers['Content-Type'] = 'application/json';

    const token = 'eyJhbGciOiJIUzUxMiJ9.eyJyb2xlIjpbIlJPTEVfVVNFUiJdLCJpZCI6IjIxYTIzODQ5LWY4ZGQtNDA4MS1hMWMwLWYzMmJjNTYyOTIzZiIsInVzZXJuYW1lIjoidGVzdDRAY3JlYWxvLmNvbSIsInN1YiI6IjIxYTIzODQ5LWY4ZGQtNDA4MS1hMWMwLWYzMmJjNTYyOTIzZiIsImlhdCI6MTY1MDI4ODY5OCwiZXhwIjo0ODA1OTgxMzE4fQ.cxANpda3OfmG5i4NLbHzuLjY97y0z5WhqlJ2UyFaWM2u2Grev-18lCWT4Bg-uEhIG-4zMR_2rnduG-2YHK0Ftw';
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
  }

  return config;
}, (error) => {
  return Promise.reject(error);
});
