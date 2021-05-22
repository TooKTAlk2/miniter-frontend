const form = document.querySelector("#signupForm")
const emailInput = document.querySelector("#email"),
nameInput = document.querySelector("#name"),
passwordInput = document.querySelector("#password"),
profileInput = document.querySelector("#profile")


function signupOnSubmit(){
  form.onsubmit = async (e) => {
    e.preventDefault();

    const emailValue = emailInput.value,
    nameValue = nameInput.value,
    passwordValue = passwordInput.value,
    profileValue = profileInput.value

    let res = await fetch(`http://localhost:5000/sign-up`,{
      method: 'post',
      body : JSON.stringify({
        email : emailValue,
        name : nameValue,
        password : passwordValue,
        profile : profileValue
      }),
      headers:{
        'Content-Type': 'application/json'
      }
    })
    console.log(res.json())
  }
  
}


function init(){
  signupOnSubmit();
}

init();