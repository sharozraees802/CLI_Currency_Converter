import inquirer from "inquirer";
import gradient from 'gradient-string';
import figlet from "figlet";
const WelcomeScreen = () => {
    console.log(gradient('cyan', 'pink').multiline(figlet.textSync(`LastCode \n\ TODO CLI  !\n`), { interpolation: 'hsv' }) + '\n');
};
WelcomeScreen();