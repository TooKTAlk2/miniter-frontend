const form = document.querySelector("#signupForm")

async function handleSubmit(event) {
  event.preventDefault();
  const data = new FormData(event.target);
  const value = Object.fromEntries(data.entries());

  let res = await fetch(`http://localhost:5000/sign-up`,{
    method: 'post',
    body : JSON.stringify(value),
    headers:{
      'Content-Type': 'application/json'
    }
  })
  console.log(res.json())
  }

form.addEventListener('submit', handleSubmit);
