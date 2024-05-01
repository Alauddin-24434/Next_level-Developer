// reffernce type ---> object

let user:{
    religion: "Islam";
   readonly countryName: string
    firstName:string;
    middleName ?:string; //optional type
    lastName:string
} ={
    religion:"Islam",
    countryName:"Bangladesh",
    firstName: "Muhammad",
    lastName:"Alauddin"
}

user.firstName="Rifat"
console.log(user)

