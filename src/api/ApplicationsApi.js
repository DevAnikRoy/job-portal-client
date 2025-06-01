export const myApplicationsPromise = email => {
    return fetch(`http://localhost:3000/applications?email=${email}`,
        // use this credential for this token
        {
            credentials: 'include'
        }
    )
    .then(res => res.json())
}