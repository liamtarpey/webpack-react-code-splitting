// Vars
let number = 0;
let user = {
    name: 'jean-sebastien'
};

// Helpers
const incrementNumber = (num) => {
    number = number + num;
};
const changeName = (name) => {
    user.name = name;
};

// Get values
const getNumber = () => number;
const getName = () => user.name;

export default {
    incrementNumber,
    changeName,
    getNumber,
    getName
};
