//Exercise 4
// Switch Statement
let lightBulbStatus = "On";

//Start coding here
switch(lightBulbStatus )
{
    case "On":
        console.log("The light is on.");
        break;
    case "Off":
        console.log("The light is off.");
        break;
    case "Broken":
        console.log("The bulb is broken.");
        break;
    default:
        console.log("Please choose the correct input (On/Off/Broken)");
}