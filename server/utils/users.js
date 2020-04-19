const users = [];

function userJoin(id, username, room) {

    const user = { id, username, room };

    users.push(user);

    return user;
};

function userLeave(id) {

    const userIndex = users.findIndex(user => user.id === id);

    if(userIndex !== -1) {
        return users.splice(userIndex, 1)[0];
    }
};

function getCurrentUser(id) {
    return users.find(user => user.id === id);
};

function getUsersRoom(room) {
    return users.filter(user => user.room === room);
};

module.exports = {
    userJoin,
    getCurrentUser,
    userLeave,
    getUsersRoom
};