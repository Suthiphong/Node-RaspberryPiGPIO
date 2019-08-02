const Gpio = require('orange-pi-gpio')

//let gpio37 = new Gpio({pin:5})
var gpio37 = new Gpio({pin:25})



function GetState(){
    return new Promise((resolv, reject) => {
	   // resolv(true)
	   gpio37.read()
	    .then( data => resolv(data))

    })
}

function setState(state){

	return new Promise((resolv, reject) => {
		console.log(`set State = ${state}`)	
		gpio37.write(state)
		resolv(state)
	})
}



async function Main() {
	setInterval( async () => {
	let Status = await GetState()
	console.log(Status)
	let Set = await setState((Status==0) ? 1 : 0)	
	},5000)


}

Main()
