export default class Configuration {
 BASE_PATH = "http://localhost:3001/api";
 API_VERSION = "v1";

 async fetch(url, params) {
  let URL = `${this.BASE_PATH}/${this.API_VERSION}/${url}`;
  const response = await window.fetch(
   URL,
   Object.assign({}, params, {
    header: {
     "Content-type": "aplication/json"
    }
   })
  );
  return await response.json();
 }
}
