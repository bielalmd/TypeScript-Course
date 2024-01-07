let userInput: unknown;
let userName: string

userInput = 5
userInput = "Pedro"
if (typeof userInput === 'string') {
    console.log(userName = userInput);
}

function generateError(msg: string, code: number): never {
    throw { msg: msg, errorCode: code };
    // while(true) {}
}

generateError('An error occurred!', 500)

