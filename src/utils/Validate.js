export const checkValidData = (name, email, password) => {

    const isValidName = /^[A-Za-z\s.'-]{2,50}$/.test(name);
    const isEmailValid = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email);
    const isPasswordValid = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/.test(password);

    if (!isValidName) return "Name is not valid";
    if (!isEmailValid) return "Email ID is not valid";
    if (!isPasswordValid) return "Password is not valid";

    
    return null;
};