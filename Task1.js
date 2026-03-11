function ask_password(login, password, success, failure) {
    const vowelsList = ['a', 'e', 'i', 'o', 'u', 'y'];
    const lowLog = login.toLowerCase();
    const lowPass = password.toLowerCase();
    const getConsonants = (str) => {
        return str.split('').filter(char => !vowelsList.includes(char) && char >= 'a' && char <= 'z').join('');
    };
    const countVowels = (str) => {
        return str.split('').filter(char => vowelsList.includes(char)).length;
    };

    const logCons = getConsonants(lowLog);
    const passCons = getConsonants(lowPass);
    const passVowelsCount = countVowels(lowPass);
    const isVowelsOk = passVowelsCount === 3;
    const isConsOk = logCons === passCons;

    if (isVowelsOk && isConsOk) {
        success(login);
    } else {
        let errorMsg = "";
        if (!isVowelsOk && !isConsOk) {
            errorMsg = "Everything is wrong";
        } else if (!isVowelsOk) {
            errorMsg = "Wrong number of vowels";
        } else {
            errorMsg = "Wrong consonants";
        }
        failure(login, errorMsg);
    }
}
function main(login, password) {
    const onSuccess = function (user) {
        console.log("Привет, " + user + "!");
    };
    const onFailure = function (user, error) {
        console.log("Кто-то пытался притвориться пользователем " + user + ", но в пароле допустил ошибку: " + error.toUpperCase() + ".");
    };

    ask_password(login, password, onSuccess, onFailure);
}

main("login", "aaalgn"); // Успех
main("login", "luagon"); // Успех
main("login", "aaal");   // Ошибка в согласных
main("login", "aelouygn"); // Ошибка в гласных   