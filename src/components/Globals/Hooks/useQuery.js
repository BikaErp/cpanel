import {useEffect, useState} from "react";
import {DELETE, GET, POST, PUT} from "@components/Services/Axios/Methods.js";

const useQuery = ({url}) => {
    const [isLoading, setIsLoading] = useState(false);
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    const parseUrl = (url) => {
        const [address, method] = url.split("@")

        return [address, method.toUpperCase()]
    }

    useEffect(() => {
        setIsLoading(true);
        const [address, method] = parseUrl(url)

        switch (method) {
            case "GET":
                GET(address)
                    .then(r => setData(r))
                    .catch(err => setError(err.message));
                break;
            case "POST":
                POST(address)
                    .then(r => setData(r.data))
                    .catch(err => setError(err.message));
                break
            case "PUT":
                PUT(address)
                    .then(r => setData(r.data))
                    .catch(err => setError(err.message));
                break
            case "Delete":
                DELETE(address)
                    .then(r => setData(r.data))
                    .catch(err => setError(err.message));
                break
        }

        setIsLoading(false);
    }, [url]);

    return {data, isLoading, error}
}

export {useQuery}