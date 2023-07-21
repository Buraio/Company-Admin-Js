export const baseUrl = "http://localhost:6278/";

export class BaseFetch {
    async bodyAndAuth({ url, method, token, body }) {
        try {
            const request = await fetch(url, {
                method: method,
                headers: {
                    "Content-type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify(body),
            });

            const response = await request.json();
            return response;
        } catch (error) {
            console.error(error);
        }
    }

    async onlyAuth({ url, method, token }) {
        try {
            const request = await fetch(url, {
                method: method,
                headers: {
                    "Content-type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
            });

            const response = await request.json();
            return response;
        } catch (error) {
            console.error(error);
        }
    }

    async bodyAndNoAuth({ url, method, body }) {
        try {
            const request = await fetch(url, {
                method: method,
                headers: {
                    "Content-type": "application/json",
                },
                body: JSON.stringify(body),
            });

            const response = await request.json();
            return response;
        } catch (error) {
            console.error(error);
        }
    }

    async noBodyAndNoAuth({ url, method }) {
        try {
            const request = await fetch(url, {
                method: method,
                headers: {
                    "Content-type": "application/json",
                },
            });

            const response = await request.json();
            return response;
        } catch (error) {
            console.error(error);
        }
    }
}
