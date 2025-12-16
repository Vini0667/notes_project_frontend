/**
 * @description Sends the userData in JSON to Back-End API
 *
 *@author Vini0667
 *
 * @param {object} userData
 * @returns {object}
 * @throws {Error}
 */
export default async function registerUser(userData) {
    const response = await fetch(
        import.meta.env.VITE_API_URL + "/users/register",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(userData),
        },
    );

    if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || `Erro HTTP: ${response.status}`);
    }
    return response.json();
}
