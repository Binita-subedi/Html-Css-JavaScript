var a = "hello guys.."
function first() {
  var b = "How are you?..."
  second();

  function second() {
    var c = "Myself Binita Subedi";
    console.log( a + b + c );
  }
}
first();