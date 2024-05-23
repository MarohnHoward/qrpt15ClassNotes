class Employee {
    id: number; 
    name: string; 
    phone: number; 
    email: string; 
    // all of the above are now required in order to use the Employee class 
    // to use the class outside of the {} we need a constructor 
    constructor(id:number, name: string, phone: number, email: string) {
        this.id = id; // this.id refers to the id above and the green id after equal is the same as the id in the constructor
        this.name = name; 
        this.phone = phone; 
        this.email = email; 
    }; 
}; 
// first object 
let firstEmployee = new Employee(
    1, 
    'Ahsoka Tano', 
    8008008000, 
    'bestpadawanever@mylightsabersarecoolerthanyours.com'
); 
// second object below 
let secondEmployee = new Employee (
    2, 
    'Obi Wan Kanobi', 
    8088088008, 
    'itsoveranakin@ihavethehighground.com'
); 
console.log(firstEmployee); 
console.log(secondEmployee); 

let interns: Array<Employee> = [
    new Employee(3, 'Anakin Skywalker', 8098098009, 'ihatesand@itsroughandcourseanditgetseverywhere.com'), 
    new Employee(4, 'Darth Vader', 8108108100, 'luke@iamyourfather.com'), 
    new Employee(5, 'Chewbacca', 9009009000, "argggggggggggh@aragg.com"), 
    new Employee(6, 'Han Solo', 91091091000, 'iknow@frozen.com')
]; 

interns.forEach((intern) => {
    console.log(`new intern info ${intern.id} ${intern.name} ${intern.phone} ${intern.email}`); 
}); 