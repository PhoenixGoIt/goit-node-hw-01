// index.js
const contactsService = require('./db/index.cjs')
const { Command } = require('commander');
const program = new Command();
program
  .option('-a, --action <type>', 'choose action')
  .option('-i, --id <type>', 'user id')
  .option('-n, --name <type>', 'user name')
  .option('-e, --email <type>', 'user email')
  .option('-p, --phone <type>', 'user phone');

program.parse(process.argv);
const argv = program.opts();
async function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case 'list':
        const getContactList = await contactsService.getAllContacts()
        return console.log(getContactList)
      break;

    case 'get':
      const getContactById = await contactsService.getContactById(id)
        return console.log(getContactById)
      break;

    case 'add':
      const contact = {
        name,
        email,
        phone
      }
      const addContact = await contactsService.addContact(contact)
      return console.log(addContact)
      break;

    case 'remove':
      const removeContact   = await contactsService.removeContact(id)
        return console.log(removeContact)
      break;

    default:
      console.warn('\x1B[31m Unknown action type!');
  }
}

invokeAction(argv);