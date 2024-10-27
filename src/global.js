import axios from "axios-https-proxy-fix";

Object.assign(window, {
  test: () => {},
});

let deviceId;

const globaFunction = {
  api: async ({ path, method = "POST", data = {}, headers = {} }) => {
    let host = "http://192.168.68.45:3000";

    if (!deviceId) {
      deviceId = await Electron.invoke("login-start");
    }

    // let deviceId = localStorage.getItem("device_id");
    // if (deviceId) {
    //   data.device_id = deviceId;
    // }
    const combinedHeaders = {
      "content-type": "application/json",
      "x-device-id": deviceId,
      authorization: localStorage.accessToken,
      ...headers,
    };

    return axios({
      url: host + path,
      method: method,
      data: JSON.stringify(data),
      headers: combinedHeaders,
    })
      .then((e) => e.data)
      .catch((error) => {
        console.error("Error fetching data:", error);
        return {
          error: true,
          message: "Error fetching data",
        };
      });
  },
};

export default globaFunction;
