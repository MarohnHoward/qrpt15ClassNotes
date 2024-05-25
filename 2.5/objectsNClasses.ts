var myPerson = {
    firstName: 'Arthur', 
    lastName: 'Morgan', 
    age: 35
}; 

console.log(`our person\nname: ${myPerson.firstName} ${myPerson.lastName} 
age: ${myPerson.age} `); 

var iceCreamFlavor: Array<string> = [
    "Mint Chocolate Chip", 
    "Oreo", 
    "Chocolate", 
    "Vanilla", 
    "Moosetracks", 
    "Strawberry"
]; 

iceCreamFlavor.forEach((flavor, i) => {
    console.log(`${i + 1}. ${flavor}`)
}); 

var people = [
    {
        first: 'Arthur', 
        last: 'Morgan', 
        age: 35
    }, 
    {
        first:'John', 
        last: 'Marston', 
        age: 26
    }, 
    {
        first: 'Sadie', 
        last: 'Adler', 
        age: 25
    }
]

people.forEach((person) => {
console.log(`Person: ${person.first} ${person.last}\nAge: ${person.age}`); 
}); 

var personWithIceCream = {
    first: 'Sadie', 
    last: 'Adler', 
    age: 25, 
    favoriteIC: [
        "Mint Chocolate Chip", 
        "Oreo", 
        "Chocolate", 
        "Vanilla", 
        "Moosetracks", 
        "Strawberry"
    ]
};

personWithIceCream.favoriteIC.forEach((flavor) => {
    console.log(`${personWithIceCream.first} ${personWithIceCream.last} 
    loves ${flavor} ice cream!`)
})