
const fs = require('fs/promises')
const path = require('path')
const uniqid = require('uniqid'); 
const contactsPath = path.resolve("db", "contacts.json");

 const getAllContacts = async() => {
    const data = await fs.readFile(contactsPath, 'utf-8');
    return data
};
 const getContactById = async(id) => {
    const contacts = JSON.parse(await getAllContacts());
    const result = contacts.find(item => item.id === id);
    console.table(result)
};

 const removeContact = async(id) => {
    const contactId = JSON.stringify(id)
    const contacts = await getAllContacts().then(data => JSON.parse(data));
    const remove = contacts.filter(contact => contact.id !== contactId);
    await fs.writeFile(contactsPath, JSON.stringify(remove))
    console.table(remove);
};

 const addContact = async (name, email, phone) => {
    const contacts = await getAllContacts().then( data => JSON.parse(data));
    const newId = JSON.stringify(uniqid())
    contacts.push({
        id: newId,
        name: name,
        email: email,
        phone: phone,
    });
    console.table(contacts);

    await fs.writeFile(contactsPath, JSON.stringify(contacts))
}

module.exports = {
    getAllContacts,
    getContactById,
    removeContact,
    addContact,
};