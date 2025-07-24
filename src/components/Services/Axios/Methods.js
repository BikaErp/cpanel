import client from "./Client";
import {Alert} from "@components/Globals/Functions/Alert.js";

// Handle GET requests
export async function GET(url, params = {}, responseType = "") {
    try {
        const formattedParams = {};
        Object.entries(params).forEach(([key, value]) => {
            if (value !== null && value !== "" && value?.length !== 0) {
                formattedParams[key] = value instanceof Date ? value.toISOString() : value;
            }
        });

        const queryString = Object.entries(formattedParams)
            .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
            .join("&");

        const fullUrl = queryString ? `${url}?${queryString}` : url;

        const response = await client.get(fullUrl, { withCredentials: true });

        if (responseType === "PagedList") {
            return {
                items: response.data.items,
                page: response.data.page,
                pageSize: response.data.pageSize,
                totalCount: response.data.totalCount,
                hasNextPage: response.data.hasNextPage,
                totalPages: response.data.totalPages,
                hasPreviousPage: response.data.hasPreviousPage,
            };
        }

        return response.data;
    } catch (error) {
        handleError(error);
        throw error;
    }
}

const replaceEmptyStringsWithNull = (obj) => {
    const processValues = (data) => {
        if (typeof data === "object" && data !== null) {
            for (const key in data) {
                if (typeof data[key] === "object") {
                    processValues(data[key]);
                } else if (data[key] === "") {
                    data[key] = null;
                }
            }
        } else if (Array.isArray(data)) {
            data?.forEach((item) => processValues(item));
        }
    };
    processValues(obj);
    return obj;
};

export async function POST(url, data) {
    try {
        replaceEmptyStringsWithNull(data);

        const response = await client.post(url, data)

        return response.data;
    } catch (error) {
        handleError(error);
        throw error;
    }
}

export async function POSTAsFormData(url, data) {
    try {
        const response = await client.post(url, data, {
            headers: { 'Content-Type': 'multipart/form-data' },
        });

        return response.data;
    } catch (error) {
        handleError(error);
        throw error;
    }
}

export async function PUT(url, data, isFormData = false) {
    try {
        return await client.put(url, data);
    } catch (error) {
        handleError(error);
        throw error;
    }
}

export async function DELETE(url, data = null) {
    try {
        return await client.delete(url, data ? { data } : undefined);
    } catch (error) {
        handleError(error);
        throw error;
    }
}

function handleError(error) {
    if (error.response) {
        const message = error.response?.data?.errors?.[0]?.message?.split("_")?.[1];

        Alert("مشکلی پیش آمده.", message, "danger")
    } else if (error.request) {
        Alert("مشکلی پیش آمده.", "بعدا مجدد امتحان کنید", "danger")
    } else {
        Alert("مشکلی پیش آمده.", "بعدا مجدد امتحان کنید", "danger")
    }
}
