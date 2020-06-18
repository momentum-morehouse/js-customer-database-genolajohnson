import customers from './customers.js'
console.log(customers);

let person = {
    thumbNail: 'https://randomuser.me/api/portraits/thumb/men/6.jpg',
    nameFirst: 'martin',
    nameLast: 'terry',
    street: '5377 hogan st',
    phoneNumber: '(455)-018-0151',
    email: 'martin.terry@example.com',
    dateOfBirth: '1987-10-08 08:46:52',
    dateBecameCustomer: '2007-10-13 07:57:48'
};



function addCustomerData(dataArray) {
    let custData = document.querySelector('#custData');
    // for (let person of persons){
    let newCustomer = document.createElement("li");
    let customerImage = document.createElement('img');
    customerImage.src = `${person.thumbNail}`;
    newCustomer.append(customerImage);
    let name = document.createElement("p");
    let customerTextNameFirst = document.createTextNode(` ${person.nameFirst}`);
    let customerTextNameLast = document.createTextNode(` ${person.nameLast}`);
    name.append(customerTextNameFirst, customerTextNameLast)
    newCustomer.append(name)
    let  customerTextAddress = document.createTextNode(` ${person.address}`); 
    let  customerTextPhoneNumber = document.createTextNode(` ${person.phoneNumber}`); 
    
    let customerTextEmail = document.createTextNode(` ${person.email}`);
    
    let customerTextDateOfBirth = document.createTextNode(` ${person.dateOfBirth}`); 

    let customerTextDateBecameCustomer = document.createTextNode(` ${person.dateBecameCustomer}`); 

    custData.append(newCustomer);
    // addCustomerData.person("ph3", "pv3", "bb", "b--light-silver");
};

addCustomerData(person);