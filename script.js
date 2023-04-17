const wrapper=document.querySelector('.wrapper');
const closeicon=document.querySelector('.close-icon');
const loginlink=document.querySelector('.login-link');
const registerlink=document.querySelector('.register-link');
const loginbtn=document.querySelector('.login-btn');

		registerlink.addEventListener("click",()=>{
			wrapper.classList.add("active")
		});
		loginlink.addEventListener("click",()=>{
			wrapper.classList.remove("active")
		});
		closeicon.addEventListener("click",()=>{
			wrapper.classList.remove("close")
		});
		loginbtn.addEventListener("click",()=>{
			wrapper.classList.add("close")
		});