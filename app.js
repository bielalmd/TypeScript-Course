var userInput;
var userName;
userInput = 5;
userInput = "Pedro";
if (typeof userInput === 'string') {
    console.log(userName = userInput);
}
function generateError(msg, code) {
    throw { msg: msg, errorCode: code };
}
generateError('An error occurred!', 500);
