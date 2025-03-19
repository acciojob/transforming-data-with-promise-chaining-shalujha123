//your JS code here. If required.
let input = document.getElementById("ip")
let btn = document.getElementById("btn")
let output = document.getElementById("output")

btn.addEventListener("click",solve)

function solve(){
	let num = parseInt(input.value)
	output.innerHTML = ""
	let promise = new Promise((resolve,reject) =>{
		setTimeout(()=>{
			resolve(num)
		},2000)
	})
	promise.then((data)=>{
		appendResult(`Result: ${data}`)
		return new Promise((resolve,reject) =>{
			setTimeout(() => {
				resolve(data*2)
			},1000)
		})
	})
	.then((data) =>{
		appendResult(`Result: ${data}`)
		return new Promise((resolve,reject) =>{
			setTimeout(() => {
				resolve(data-3)
			},1000)
		})
	})
	.then((data) =>{
		appendResult(`Result: ${data}`)
		return new Promise((resolve,reject) =>{
			setTimeout(() => {
				resolve(data/2)
			},1000)
		})
	})
	.then((data) =>{
		appendResult(`Result: ${data}`)
		return new Promise((resolve,reject) =>{
			setTimeout(() => {
				resolve(data+10)
			},1000)
		})
	})
	.then((data) =>{
		appendResult(`Final Result: ${data}`)
	})
	.catch((err) =>{
		appendResult(`Error: ${err}`)
	})
}

function appendResult(text) {
	let div = document.createElement("div")
	div.textContent = text
	output.append(div)
}





