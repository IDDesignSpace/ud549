function AddressBook() {
    this.contacts = [];
    this.addContact = function(contact) {
            this. contacts.push(contact);
    };
    this.getContact = function(id) {
        return this.contacts[id];  
    };
    this.deleteContact = function (id) {
        delete  this.contacts[id];
    };
};