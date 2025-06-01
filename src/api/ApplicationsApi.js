export const myApplicationsPromise = (email, accessToken) => {
    return fetch(`http://localhost:3000/applications?email=${email}`,
        // use this credential for this token
        {
            credentials: 'include',
            // use this headers for the firebase token
            headers: {
                authorization: `Bearer ${accessToken}`
            }
        }
    )
    .then(res => res.json())
}