import gradient from 'gradient-string';
import figlet from "figlet";
import inquirer from 'inquirer';
const WelcomeScreen = () => {
    console.log(gradient('cyan', 'pink').multiline(figlet.textSync(`LastCode \n\ CLI Currency Converter !\n`), { interpolation: 'hsv' }) + '\n');
};
WelcomeScreen();
let Convertion = {
    "PKR": {
        "USD": 0.0044,
        "GBP": 0.0037,
        "PKR": 1
    },
    "GBP": {
        "USD": 1.21,
        "PKR": 271.79,
        "GBP": 1,
    },
    "USD": {
        "PKR": 225.50,
        "GBP": 0.83,
        "USD": 1,
    }
};
const answer = await inquirer.prompt([
    {
        type: "list",
        name: "from",
        choices: ["PKR", "USD", "GBP"],
        message: "Select Your Currency: "
    },
    {
        type: "list",
        name: "to",
        choices: ["PKR", "USD", "GBP"],
        message: "Select Your Conversion Currency: "
    },
    {
        type: "number",
        name: "amount",
        message: "Enter Conversion Amount: "
    },
]);
const { from, to, amount } = answer;
if (from && to && amount) {
    let result = Convertion[from][to] * amount;
    console.log(`Your Conversion from ${from} to ${to} is ${result}`);
}
else {
    console.log("Invalid Input");
}
