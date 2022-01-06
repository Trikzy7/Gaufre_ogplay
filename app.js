




const container_form = document.querySelector('.container_form');
const btn_form_game = document.querySelector('.btn_form_game');
const input_pseudo = document.querySelector('#input_pseudo');
const input_email = document.querySelector('#input_email');
const input_data_policy = document.querySelector('#input_data_policy');


let roue = document.querySelector(".img_wheel")
let button = document.querySelector(".btn_wheel")
const info_game_gain = document.querySelector('.info_game_gain');



//-------- FORM
btn_form_game.addEventListener('click', ()=> {

	if (input_pseudo.value != '' && input_email.value != '' && input_data_policy.checked == true) {
		container_form.classList.add('display_none');
	}
  
})






//-------- WHEEL
let deg = 0
let speed = 0
button.addEventListener("click", ()=>{
	speed = 50
})

setInterval(()=>{
	deg+= speed
	roue.style.transform = 'rotate('+deg+'deg)';
	if(speed >0.01)
		speed-=speed/100
	else speed=0
}, 10)



button.addEventListener('click', ()=> {

	setTimeout(() => {
		button.classList.add('display_none');
		info_game_gain.style.display = 'unset';
	}, 1000);
})




