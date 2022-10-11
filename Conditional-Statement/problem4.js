// Problem 4: Given stored username and password and input username and password, Print if the user can login or not.

let database_username = "jagdish25@gmail.com";
let database_password = "12@_84JagG@";

let input_username = "jagdish25@gmail.com";
let input_password = "12@_84JagG@";

if(database_username===input_username){
  if(database_password===input_password){
    console.log("Login Success!");
  }else{
    console.log("Invalid Password");
  }
}else{
  console.log("Invalid UserName");
}