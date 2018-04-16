LOGIN RESPONSE

user:{
  email: "abc@example.com",
  token: "asdasdasdasdasd"
}

Login request parameters:
{
  email: "abc@example.com",
  password: "sadasdasdasd"
}

Login Error message response
errors: { global: "Invalid Credentials"}


SIGN UP RESPONSE
user:{
  email: "abc@example.com",
  token: "asdasdasdasdasd"
}


SIGN UP parameters
{
  email: "abc@example.com",
  password: "sadasdasdasd"
}


JWT Token should be encoded with email in server side
jwt.sign({
    email: this.email
}