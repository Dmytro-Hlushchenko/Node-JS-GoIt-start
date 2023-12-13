import { program } from "commander";
import * as contactsServise from "./contacts.js";

const invokeAction = async ({ action, id, ...data }) => {
    switch(action) { 
        case "list": const allContacts = await contactsServise.listContacts();
            console.log(allContacts);
            break;
        case "get": const oneContact = await contactsServise.getContactById(id);
            console.log(oneContact);
            break;
        case "add": const addContact = await contactsServise.addContact(data);
            console.log(addContact);
            break;
        case "remove": const removeContact = await contactsServise.removeContact(id)
            console.log(removeContact);
    }
};

program
    .option("-a, --action <type>")
    .option("-i, --id <type>")
    .option("-n, --name <type>")
    .option("-e, --email <type>")
    .option("-p, --phone <type>");
    
program.parse(process.argv);

const options = program.opts();
invokeAction(options);