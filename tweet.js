const form = document.querySelector("#tweetForm")

async function handleSubmit(event) {
  event.preventDefault();
  const data = new FormData(event.target);
  const value = Object.fromEntries(data.entries());
  console.log(value)
  try {
    const res = await fetch(`http://localhost:5000/tweet`,{
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
