// // Object literals

// const person = {
//     firstName: 'JavaScript',
//     lastName: 'React',
//     age: 24,
//     hobbies: ['games', 'coding', 'skating'],
//     address: {
//         street: '50 50 Street',
//         city: '50 50',
//         state: 'MAS'
//     }
// }

// console.log(person);


const todos = [
    {
        id: 1,
        text: 'Master JS',
        isComplete: true
    },
    {
        id: 2,
        text: 'Learn Framework',
        isComplete: true
    },
    {
        id: 3,
        text: 'Debbug',
        isComplete: false
    }
]

const todoJSON = JSON.stringify(todos);
console.log(todoJSON);