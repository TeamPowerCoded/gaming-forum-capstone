import axios from "axios";

// get method for rest api request, just pass the url, access token and body data
export function get(url, body) {
  return new Promise((resolve, reject) => {
    const axiosInstance = getInstance(url);
    axiosInstance({
      method: "get",
      data: body,
    })
      .then((response) => {
        resolve(response.data);
      })
      .catch((err) => {
        console.log("caught an error :", err.response);
        reject(err);
      });
  });
}
