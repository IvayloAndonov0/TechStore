const requester = async (method, url, data, token) => {
    let options = {};

    if (method !== 'GET') {
        options = {
            method,
        };
    }

    if (data) {
        options = {
            ...options,
            headers: {
                'Content-Type': 'application/json',
                
            },
            body: JSON.stringify(data),
        }
    }
    if (token) {
        options = {
            ...options,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': token,
                
            }
        }
    }

        const response = await fetch(url, options);
        const result = await response.json();

        return result;
    };


export default {
    get: requester.bind(null, 'GET'),
    post: requester.bind(null, 'POST'),
    put: requester.bind(null, 'PUT'),
    delete: requester.bind(null, 'DELETE'),
}
