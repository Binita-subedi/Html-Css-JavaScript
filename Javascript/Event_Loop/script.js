


console.log( "Code Like Her" )

function event_Listner() {
  let count = 0

  document.getElementById( "btn" ).addEventListener( "click", function xyz() {
    console.log( "Button is click", ++count )
  } )

}

event_Listner();



console.log( "Javascript" )