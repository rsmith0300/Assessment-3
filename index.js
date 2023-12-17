console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('Submitted Successful');
}


let form = document.querySelector('#contact');

form.addEventListener('submit', handleSubmit);

const catPic = document.querySelector("#gato")
function mouseOver(evt) {
	alert("You're Puuurrfect")
}

catPic.addEventListener("mouseover", mouseOver)