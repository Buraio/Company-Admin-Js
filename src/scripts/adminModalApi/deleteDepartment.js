

const apiDelete = async (token, id) => {
    const request = await fetch(`${baseUrl}/departments/${id}`, {
        method: "DELETE",
        headers: {
            headers,
            Authorization: `Bearer ${token}`,
        },
    });

    const response = await request.json();
    return response;
};

export { apiDelete };
