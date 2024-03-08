export const useValidateAuth = (email, password) => {
    // we will simply use regex to validate the mail and pass , we can also modify this regex according to our need , the .test() will test the regex against some given string and return a boolean
    let validEmail = /^[\w-]+(\.[\w-]+)*@[a-zA-Z0-9]+(\.[a-zA-Z0-9]+)*(\.[a-zA-Z]{2,})$/.test(email);
    let validPassword = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password);
    // console.log(validEmail, validPassword);

    if (!validEmail) {
        return "Email is not valid"
    }

    if (!validPassword) {
        return "Password is not valid"
    }

    return null  //return null by default when both are true
}