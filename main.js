import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.blue.italic.bold("\n\tWelcome to Currency Convertor\n\t"));
let exchange_rate = {
    "USD": 1, // us dollar
    "EUR": 0.92, //european currency (euro)
    "JYP": 157.13, //Japaness currency (yen)
    "CAD": 1.37, // canadian dollar
    "AUD": 1.50, //Australian dollar
    "PKR": 278.00 // Pakistani rupees
};
let user_answer = await inquirer.prompt([
    {
        name: "from_currency",
        type: "list",
        message: "Select the currency to convert from",
        choices: ["USD", "EUR", "JYP", "CAD", "AUD", "PKR"]
    },
    {
        name: "to_currency",
        type: "list",
        message: "Select the currency to convert into",
        choices: ["USD", "EUR", "JYP", "CAD", "AUD", "PKR"]
    },
    {
        name: "amount",
        type: "input",
        message: "Enter the amount convert"
    }
]);
let from_currency = exchange_rate[user_answer.from_currency];
let to_currency = exchange_rate[user_answer.to_currency];
let amount = user_answer.amount;
let base_amount = amount / from_currency;
let converted_amount = base_amount * to_currency;
console.log(`Converted Amount ${chalk.green(converted_amount.toFixed(2))}`);
