const getAuthHeader = () => {
    return {
        Authorization: `Bearer ${localStorage.getItem("access")}`,
    };
};

export { getAuthHeader };