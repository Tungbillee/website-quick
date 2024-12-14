import axios from "axios-https-proxy-fix"

Object.assign(window, {
    test: () => {}
})

const globaFunction = {
    api: async ({ path, method = "GET", data = {}, headers = {}, params }) => {
        // let host = "https://reels.adsteam.xyz"
        let host = "http://localhost:3001"
        // let deviceId = localStorage.getItem("device_id");
        // if (deviceId) {
        //   data.device_id = deviceId;
        // }
        const combinedHeaders = {
            "content-type": "application/json",
            authorization: localStorage.accessToken,
            ...headers
        }

        return axios({
            url: host + path,
            method: method,
            data: JSON.stringify(data),
            headers: combinedHeaders,
            params: params
        })
            .then(e => e.data)
            .catch(error => {
                console.error("Error fetching data:", error)
                return {
                    error: true,
                    message: error
                }
            })
    }
}

export default globaFunction
