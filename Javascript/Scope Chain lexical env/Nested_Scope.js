var name = "Binita"

function greet() {
  let greeting = "Hello"
  {
    const lang = "English"
    console.log( `${lang} ${greeting} ${name}` )
  }
  console.log( `${greeting}` )

}
console.log( `${name}` )

greet()