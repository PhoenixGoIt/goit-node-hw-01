
const fs = require('fs/promises')
const path = require('path')
const contactsPath = path.resolve("db", "contacts.json");

 const getAllContacts = async() => {
    const data = await fs.readFile(contactsPath);
    return JSON.parse(data);
};
 const getContactById = async(id) => {
    const contacts = await getAllContacts();
    const result = contacts.find(item => item.id === id);
    return result;
};
 const removeContact = async(id) => {
    const contacts = await getAllContacts();
    const result = contacts.filter(item => item.id === id);
    return result;
};
 const addContact = async(contact) => {
    return contact
};
module.exports = {
    getAllContacts,
    getContactById,
    removeContact,
    addContact,
};