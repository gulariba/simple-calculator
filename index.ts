import inquirer from "inquirer";

const answer = await inquirer.prompt([
  { message: "Enter first number", type: "number", name: "firstNumber" },
  {message: "Enter second number", type: "number", name: "secondNumber"},
  {
    message:"select one of the operator to perform operation",
     type:"list",
      name: "operator",
       choices:["Addition", "Subtraction", "Multilpication", "Division"],
  },
]);

//conditional statement
if (answer.operator === "Addition") {
 console.log(answer.firstNumber + answer.secondNumber);
}else if (answer.operator === "Subtraction") {
    console.log(answer.firstNumber - answer.secondNumber);
}else if (answer.operator === "Multilpication") {
 console.log(answer.firstNumber * answer.secondNumber);
}else if (answer.operator === "Division"){
    console.log(answer.firstNumber / answer.secondNumber);
}