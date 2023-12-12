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
            break;
        case "remove": const removeContact = await contactsServise.removeContact(id)
            console.log(removeContact);
    }
};

// invokeAction({ action: "get", id: "qdggE76Jtbfd9eWJHrssH"});
// invokeAction({ action: "add", name: "GOOOOOGAAA", email: "goga@gmail.com", phone: "232342343243" });
invokeAction({action: "remove", id:"0H-Uxw3URjCYSnQSws1jq"})