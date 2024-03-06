let fullname = document.getElementById("fullname");
let username = document.getElementById("username");
let email = document.getElementById("email");
let phonenumber = document.getElementById("phonenumber");
let password = document.getElementById("password");
let confirmPassword = document.getElementById("confirmPassword");
let male = document.getElementById("male");
let female = document.getElementById("female");
let other = document.getElementById("other");
let fname_er = document.getElementById("fname_er");
let user_er = document.getElementById("user_er");
let email_er = document.getElementById("email_er");
let phone_er = document.getElementById("phone_er");
let password_er = document.getElementById("password_er");
let confirmapssword_er = document.getElementById("confirmapssword_er");
let gender_er = document.getElementById("gender_er");

// console.log(fullname);
// console.log(username);
// console.log(email)
// console.log(phonenumber);
// console.log(password);
// console.log(confirmPassword);
// console.log(male);
// console.log(female);
// console.log(other);

function data() {
  // event.preventDefault();
  console.log(fullname.value);
  console.log(username.value);
  console.log(email.value);
  console.log(phonenumber.value);
  console.log(password.value);
  console.log(password.value.length);
  console.log(confirmPassword.value);
  console.log(male.value);
  console.log(female.value);
  console.log(other.value);

  if (fullname.value == "") {
    // console.log("enter your fullname");
    fname_er.innerHTML = "enter your fullname";
  } else {
    // console.log("your fullname was print");
    fname_er.innerHTML = " ";
  }

  if (username.value == "") {
    // console.log("enter your username");
    user_er.innerHTML = "enter your username";
  } else {
    // console.log("your username was print");
    user_er.innerHTML = " ";
  }

  if (email.value == "") {
    // console.log("enter your email");
    email_er.innerHTML = "enter your email";
  } else {
    // console.log("your email was print");
    email_er.innerHTML = " ";
  }

  if (phonenumber.value == "") {
    // console.log("enter your phonenumber");
    phone_er.innerHTML = "enter your email";
  } else {
    // console.log("your phonenumber was print");
    phone_er.innerHTML = "";
  }

  if (password.value == "") {
    // console.log("enter your password");
    password_er.innerHTML = "enter your password";
  } else if (password.value.length < 8) {
    // console.log("easy password");
    password_er.innerHTML = "easy password";
  } else {
    // console.log("good password");
    password_er.innerHTML = " ";
  }

  if (password.value != confirmPassword.value) {
    confirmapssword_er.innerHTML = "password not match";
  } else {
    confirmapssword_er.innerHTML = " ";
  }

  if (!male.checked && !female.checked && !other.checked) {
    gender_er.innerHTML = "Please select gender";
  } else {
    gender_er.innerHTML = "";
  }

//   console.log(fname_er.innerHTML);
//   console.log(user_er.innerHTML);
//   console.log(email_er.innerHTML);
//   console.log(phone_er.innerHTML);
//   console.log(password_er.innerHTML);
//   console.log(confirmapssword_er.innerHTML);
//   console.log(gender_er.innerHTML);
  if (
    fname_er.innerHTML == " " &&
    user_er.innerHTML == " " &&
    email_er.innerHTML == " " &&
    phone_er.innerHTML == "" &&
    password_er.innerHTML == " " &&
    confirmapssword_er.innerHTML == "" &&
    gender_er.innerHTML == ""
  ) {
    console.log("ygvftfcrt7ctc");
  }

  return false;
}
