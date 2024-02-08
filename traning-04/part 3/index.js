const contactList = []

const addNewContact = (name, phoneNumber) => {
    if (!name && !phoneNumber) return null;
    const newContact = { 
        name,
        phoneNumber,
        id: self.crypto.randomUUID(),
        timeStamp: Date.now()
    }
    contactList.push(newContact)
}

addNewContact('Asgar', '0917242715')
addNewContact('Ali', '0913242715')
addNewContact('Ahmad', '0912242715')
addNewContact('Abas', '0915242715')

console.log(contactList)