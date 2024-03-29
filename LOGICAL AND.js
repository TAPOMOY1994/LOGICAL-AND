const password=prompt("Enter a password" );


if(password.length>=8 && password.indexOf(' ')===-1)
  {
    console.log("Valid password");
  }

  else
  {
    console.log("Invalid password");
  }