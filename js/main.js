const post_email =(data)=>{
	fetch('http://127.0.0.1:5000/subcribe', {
		method: 'POST',
	    data: data,
	    headers: {
	        'Content-Type': 'application/json',
	         'Access-Control-Allow-Origin': '*'
	    	},
	    mode: "no-cors",
	}).then(function(){
		
	}
	)
}
const check_email =()=>{
	let input_email = document.querySelector('.subcribe_body div input');
	if(input_email.value != ''){
		email = validateEmail(input_email.value);
		if(email == true){
			data = {
		        "email" : `${input_email.value}`,
		    }
			post_email(data);
			document.querySelector('.email_modal_body').style.display = 'block';
			document.querySelector('.email_modal_body h3').innerHTML = 'Your email has been successfully added for notification.';
		}else{
			document.querySelector('.email_modal_body').style.display = 'block';
			document.querySelector('.email_modal_body h3').innerHTML = 'Please Enter a Validate Email Address';
		}

	}else{
		
	}
}
const check_email_sm =()=>{
	let input_email = document.querySelector('.subcribe_body_sm div input');
	console.log(input_email.value)
	if(input_email.value != ''){
		email = validateEmail(input_email.value);
		if(email == true){
			data = {
		        "email" : `${input_email.value}`,
		    }
			post_email(data);
			document.querySelector('.email_modal_body').style.display = 'block';
			document.querySelector('.email_modal_body h3').innerHTML = 'Your email has been successfully added for notification.';
		}else{
			document.querySelector('.email_modal_body').style.display = 'block';
			document.querySelector('.email_modal_body h3').innerHTML = 'Please Enter a Validate Email Address';
		}

	}else{
		console.log("nothing")
	}
}
const validateEmail= (mail)=> {
	 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)){
	    return (true);
	 }
	return (false);
}
const create_img_modal =(img_src)=>{
	document.querySelector('.modal_img').src = img_src;
	document.querySelector('.modal_img_body').style.display = 'block';
	document.querySelector('body').style.overflow = 'hidden';
}
const remove_img_modal = ()=>{
	document.querySelector('.modal_img_body').style.display = 'none';
	document.querySelector('body').style.overflow = 'auto';
}
const close_email_modal =()=>{
	document.querySelector('.email_modal_body').style.display = 'none';
	document.querySelector('.subcribe_body_sm div input').value= '';
	document.querySelector('.subcribe_body div input').value = '';
}
$(document).ready(function () {
	$(document).on("click", ".subcribe_body div button", check_email);
	$(document).on("click", ".subcribe_body_sm div button", check_email_sm);
	$(document).on("click", ".img_cancel_btn i", remove_img_modal);
	$(document).on("click", ".email_modal_body button", close_email_modal);
	//$(document).on("click", ".page_conatiner", close_email_modal);
	$(document).on("click", ".screen_body .img1", function(){
		create_img_modal("img/Group43.png")	
	});
	$(document).on("click", ".screen_body .img2", function(){
		create_img_modal("img/Group44.png")	
	});
	$(document).on("click", ".screen_body .img3", function(){
		create_img_modal("img/Group45.png")	
	});
	$(document).on("click", ".screen_body .img4", function(){
		create_img_modal("img/Group46.png")	
	});
	$(document).on("click", ".screen_body .img5", function(){
		create_img_modal("img/Group47.png")	
	});
});
