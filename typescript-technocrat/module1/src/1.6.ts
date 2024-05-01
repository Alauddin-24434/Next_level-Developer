// function

// 1. Normal function

// 2. Arrow Function

function add(num1:number, num2:number =10 ):number{
    return num1+num2
}
add(2,5)

const addArrow=(num1 :number, num2:number) :number => num1 + num2 

// object ---> function --> method


const poorUser={
    name:"Alauddin",
    balance:0,
    addBalance(balance:string){
        return `My new balance is : ${this.balance+balance} + balance`;
    }
}

const arr:number[] =[12,3,8]

const newArray: number[]=arr.map((result:number) : number => number*number)




