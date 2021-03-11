const mainURL = 'https://uxcandy.com/~shapoval/test-task-backend/v2';

export const getAllTasks = async url => {
    return await fetch(url)
    .then(response => response.json())
    .catch(err => console.error('ERROR', err))
}

export const addTask = async formData => {
    return await fetch(mainURL+'/create?developer=zaur', {
        method: 'POST',
        body: formData,
    })
    .then(response => response.json())
    .catch(err => console.error('ERROR', err))
}

export const logIn = async formData => {
    return await fetch(mainURL+'/login?developer=zaur', {
        method: 'POST',
        body: formData,
    })
    .then(response => response.json())
    .catch(err => console.error('ERROR', err))
}

export const editTask = async (formData, id) => {
    return await fetch(mainURL+`/edit/${id}?developer=zaur`, {
        method: 'POST',
        body: formData,
    })
    .then(response => response.json())
    .catch(err => console.error('ERROR', err))
}