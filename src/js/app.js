import PasswordDealer from "./password-dealer.class";
import PasswordGenerator from "./password-generator";

// create the object in the DOM
window.PasswordDealer = (opts) => {
    return new PasswordDealer(opts);
};
window.PasswordGenerator = (opts) => {
    return new PasswordGenerator(opts);
};