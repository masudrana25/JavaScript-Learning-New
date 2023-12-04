const nam = document.querySelector("#name");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const submit_form = document.querySelector("form");

submit_form.addEventListener("submit", (e) => {
  e.preventDefault();
  const userName = nam.value;
  const userEmail = email.value;
  const userPassword = password.value;

  const data = {
    name: userName,
    email: userEmail,
    password: userPassword
  };
  console.log(data);

  nam.value = "";
  email.value = "";
  password.value = "";
});