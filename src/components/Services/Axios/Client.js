import axios from "axios";

const language = localStorage?.getItem("language");
const defaultBaseUrl = "https://core.harmonysystem.ir/api";

let baseUrl = defaultBaseUrl;

const client = axios.create({
    headers: {
        "Accept-Language": language || null, "ClientPath": location.pathname
    }, withCredentials: true, baseURL: baseUrl,
});

fetch(`${defaultBaseUrl}/WebSites/GetMyBaseUrl`, {
    credentials: "include", method: "GET", headers: {
        "Content-Type": "application/json", "Accept-Language": language || null, "ClientPath": location.pathname
    }
})
    .then(res => res.json())
    .then(data => {
        baseUrl = `${data.url}api`
        client.defaults.baseURL = `${data.url}api`;
    })
    .catch(err => {
        console.error("خطا در دریافت baseUrl:", err);
    });

client.interceptors.response.use(
    response => response,
    error => {
        if (error.response && error.response.status === 401) {
            window.location.href = "/";
        }
        return Promise.reject(error);
    }
);

export default client;
