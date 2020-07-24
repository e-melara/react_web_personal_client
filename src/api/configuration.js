export default class Configuration {
 BASE_PATH = "http://localhost:3001/api";
 API_VERSION = "v1";

 async axios(url, params) {
  let URL = `${this.BASE_PATH}/${this.API_VERSION}/${url}`;
  const dataParams = Object.assign({}, params, {
   headers: {
    "Content-Type": "application/json"
   }
  });
  const response = await window.fetch(URL, dataParams);
  return await response.json();
 }
}
