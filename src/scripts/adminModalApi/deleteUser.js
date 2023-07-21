

export const apiDeleteUser = async (token, id) => {
    const request = await fetch(`${baseUrl}/admin/delete_user/${id}`, {
        method: "DELETE",
        headers: {
            headers,
            Authorization: `Bearer ${token}`,
        },
    });

    const response = await request.json();
    return response;
};
