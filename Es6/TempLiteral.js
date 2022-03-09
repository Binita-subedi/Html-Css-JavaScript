//Template literals(Template strings)

//es5(using concatenation)
console.log( "My name is Binita" + " I live in Kuleshwor" )

//es6(using literal)
console.log( `My name is Binita. I live in Kuleshwor` );

//es5
let firstName = "Binita";
let lastName = "Subedi";
console.log( "My name is " + firstName + ". My lastname is " + lastName + "." );

//es5
console.log( `My name is ${firstName}. My last name is ${lastName}` )

//Template literals(Template strings)Methods
//es6 strings.Methods

console.log( `${firstName}`.startsWith( 'B' ) );
console.log( `${firstName}`.endsWith( 'a' ) );
console.log( `${firstName}`.includes( 'Subedi' ) );

console.log( `${firstName} ${lastName} `.repeat( 10 ) );