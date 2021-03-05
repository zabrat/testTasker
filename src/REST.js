const mainURL = 'https://uxcandy.com/~shapoval/test-task-backend/v2';

export const getAllTasks = async() => {
    return await fetch(mainURL+'/?developer=Name')
    .then(response => response.json())
}

export const addTask = async() => {
    return await fetch(mainURL+'/?developer=Name', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(),
    })
    .then(response => response.json())
}