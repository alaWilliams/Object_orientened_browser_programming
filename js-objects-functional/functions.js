function greetingsToYou(name) {
    function seasonSelector(season) {
        switch (season) {
            case "Christmas":
                console.log('Merry Christmas ' + name);
                break;
            case "New Year":
                console.log('Happy New Year ' + name);
                break;
            case "Day":
                console.log("Have a nice day " + name);
                break;
            default:
                console.log("Not my season " + name);
        }
    }

    return seasonSelector;
}

let greeter = greetingsToYou("Lasse");
greeter('Christmas'); // Merry Christmas Lasse
greeter('Day'); // Have a nice day Lasse





