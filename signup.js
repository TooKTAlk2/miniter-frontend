const form = document.querySelector("#signupForm")

async function handleSubmit(event) {
  event.preventDefault();
  const data = new FormData(event.target);
  const value = Object.fromEntries(data.entries());

  try {
    const res = await fetch(`http://localhost:5000/sign-up`,{
      method: 'post',
      body : JSON.stringify(value),
      headers:{
        'Content-Type': 'application/json'
      }
    })
    console.log(res.status)
    
  }
  catch(e){
    console.log(e)
  }
}

form.addEventListener('submit', handleSubmit);
