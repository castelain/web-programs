class Student{
    fullName:string;
    constructor(public firstName:string,public middleinitial:string,public lastName: string){
        this.fullName = firstName + ' ' + middleinitial + ' ' + lastName;
    }
}

interface Person {
    firstName:  string;
    lastName: string;
}

function greeter(person: Person){
    return ('hello,' + person.firstName + ' ' + person.lastName + '!');
}

// let user = {firstName: 'jasmine',lastName: 'Wang'};
let user = new Student('jasmine','qiu','wang');
document.body.innerHTML = greeter(user);