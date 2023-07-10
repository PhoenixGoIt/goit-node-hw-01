// index.js
const contactsService = require('./index.cjs')
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
      const getAll = await contactsService.getAllContacts()
        return console.table(JSON.parse(getAll))
      break;

    case 'get':
      const getById = await contactsService.getContactById(id)
      break;

    case 'add':
      const addContact = contactsService.addContact(name, email, phone)
      break;

    case 'remove':
      const removeContact = contactsService.removeContact(id)
      break;

    default:
      console.warn('\x1B[31m Unknown action type!');
  }
}

invokeAction(argv);