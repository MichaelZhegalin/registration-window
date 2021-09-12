let password = document.querySelector(".pas");
let button = document.querySelector(".reg");
let form = document.querySelector('form');
let text_warning = document.querySelector(".warning");

text_warning.hidden = true;

function check_len(){
	if (password.value.length >= 6) return 1;
}

password.onchange = (e) =>{
	if (check_len()){
	 	text_warning.hidden = true;
	 	button.disabled = false;
	}
	else{
		button.disabled = true
		text_warning.hidden = false;
	}
}

button.onclick = (e) =>{
	event.preventDefault();
}