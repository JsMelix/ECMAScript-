function newFunction(name, age, country) {
    var name = name || 'sebas';
    var age = age || 18;
    var country = country || 'CO';
    console.log(name, age, country); 
}

//es6
function newFunction2(name = 'sebas', age = 18, country ="CO") {
    console.log(name, age, country);
};

newFunction2();
newFunction2('Siscar', '15', 'MX');

newFunction2();
let hello = "Hello";
let world = "World";
let epicPhrase = hello + '' + world;
console.log(epicPhrase);
let epicPhrase2 = `${hello} $ {}`;
console.log(epicPhrase2);

let lorem = "Vivir es morir pero la muerte puede esperar \n" 
+ "los dulces no tienen sentido comun por eso son dulces."

let lorem2 = `los dulces no tienen sentido comun por esos son dulces.`;

console.log(lorem);
console.log(lorem2);

let person = {
    'name': 'sebas',
    'age': 18,
    country: 'CO'
    }

    console.log(person,name, person.age);

    let { name } = person;
    console.log(name);

    let team1 = ['sebas', 'robotl', 'robot2' ];
    let team2 = ['sebas1', 'robot3', 'robot4' ];

    let education = ['David', ...team1, ...team2];

    console.log(education);
    
    {
        var globalVar = "Global Var";
    }

    {
        let globalLet = 'Global Let';
    }




