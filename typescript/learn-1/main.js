var Student = /** @class */ (function () {
    function Student(firstName, middleinitial, lastName) {
        this.firstName = firstName;
        this.middleinitial = middleinitial;
        this.lastName = lastName;
        this.fullName = firstName + ' ' + middleinitial + ' ' + lastName;
    }
    return Student;
}());
function greeter(person) {
    return ('hello,' + person.firstName + ' ' + person.lastName + '!');
}
// let user = {firstName: 'jasmine',lastName: 'Wang'};
var user = new Student('jasmine', 'qiu', 'wang');
document.body.innerHTML = greeter(user);
