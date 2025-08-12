// Temporary in-memory data store
let items = [];

module.exports = {
    getAll: () => items,
    add: (item) => { items.push(item); }
};
