




const container_form = document.querySelector('.container_form');
const btn_form_game = document.querySelector('.btn_form_game');



btn_form_game.addEventListener('click', ()=> {
    container_form.classList.add('display_none');
})




let roue = document.querySelector(".img_wheel")
let button = document.querySelector(".btn_wheel")
let deg = 0
let speed = 0
button.addEventListener("click", ()=>{
	speed = 50
})

setInterval(()=>{
	deg+= speed
	console.log(speed)
	roue.style.transform = 'rotate('+deg+'deg)';
	if(speed >0.01)
		speed-=speed/100
	else speed=0
}, 10)




