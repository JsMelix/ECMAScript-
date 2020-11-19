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