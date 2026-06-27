function coffeMachine(coffetype) {
    let coffename = coffetype.toLowerCase()
    let answer;
    switch (coffename) {

        case "latte":
            answer = "$4"
            break;

        case "capachino":
            answer = "$5"
            break;

        case "starbucks":
            answer = "$9"
            break;

        default: answer = "Invalid coffe Type"
    }
    return answer

}

console.log(coffeMachine("Capachino"))
