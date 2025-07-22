import client from "./Client";

export async function GET(url, params = {}, responseType = "") {
    const formattedParams = {};

    Object.entries(params).forEach(([key, value]) => {
        if (value !== null && value !== "" && value?.length !== 0) {
            if (value instanceof Date) {
                formattedParams[key] = value.toISOString();
            } else {
                formattedParams[key] = value;
            }
        }
    });
    const queryString = Object.entries(formattedParams)
        .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
        .join("&");
    const fullUrl = queryString ? `${url}?${queryString}` : url;

    const response = await client.get(fullUrl, {withCredentials: true});
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
    return obj; // Return the modified object
};

export async function POST(url, data, isFormData = false) {
    replaceEmptyStringsWithNull(data);

    if (isFormData) {
        const res = await client.post(url, data);
        console.log(res);

        if (res.status === 200) {
            return res;
        }
    } else {
        return await client.post(url, data);
    }
}

export async function POSTAsFormData(url, data) {
    const res = await client.post(url, data, {
        headers: {
            'Content-Type': 'multipart/form-data',
        },
    });

    if (res.status === 200) {
        console.log(res);
        return res;
    }
}

export async function PUT(url, data, isFormData = false) {
    return await client.put(url, data);
}

export async function DELETE(url, data = null) {
    if (data) {
        return await client.delete(url, {data});
    } else {
        return await client.delete(url);
    }
}
