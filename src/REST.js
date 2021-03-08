const mainURL = 'https://uxcandy.com/~shapoval/test-task-backend/v2';

export const getAllTasks = async() => {
    return await fetch(mainURL+'/?developer=zaur')
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

export const sortField = async field => {
    return await fetch(mainURL + '/?developer=zaur&sort_field=' + field,)
    .then(response => response.json())
    .catch(err => console.error('ERROR', err))
}

export const sortDirection = async direction => {
    return await fetch(mainURL + '/?developer=zaur&sort_direction=' + direction,)
    .then(response => response.json())
    .catch(err => console.error('ERROR', err))
}

export const changePage = async page => {
    return await fetch(mainURL + '/?developer=zaur&page=' + page,)
    .then(response => response.json())
    .catch(err => console.error('ERROR', err))
}