const form= document.querySelector(".login form"),
continueBtn=form.querySelector(".button input"),
errorText=form.querySelector(".error-txt");

form.onsubmit=(e)=>{
    e.preventDefault(); //preventing form from submitting 
}

continueBtn.onclick=()=>{
    // let's start Ajax
    let xhr= new XMLHttpRequest(); //create XML object
    xhr.open("POST", "php/login.php", true);
    xhr.onload=()=>{
        if(xhr.readyState === XMLHttpRequest.DONE){
            if(xhr.status === 200){
                let data = xhr.response;
                console.log(data);
                if(data=="success"){
                    location.href= "user.php";
                }else{
                    errorText.style.display = "block";
                    errorText.textContent= data;               
                }
            }
        }
    }
    // we have to send the form data through ajax to php
    let formData= new FormData(form); //creating new formData Object
    xhr.send(formData);     //sending the formData to php
}