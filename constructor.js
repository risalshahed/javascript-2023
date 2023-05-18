// constructor function
function Person(first, last, age, gender) {
    this.firstname = first;
    this.lastname = last;
    this.age = age;
    this.gender = gender;
    this.name = function() {
        return this.firstname + ' ' + this.lastname;
    }
}

const a = new Person('Risal', 'Shahed', 31, 'Male');
console.log(a);
console.log(a.name());