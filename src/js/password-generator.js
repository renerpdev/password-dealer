export default class PasswordGenerator {
    letters = 'abcdefghijklmnopqrstuvwxyz';
    symbols = '~,.?`!@#$%^&*()_+?><+-/\'\"{}[]|\\';
    numbers = '0123456789';

    constructor(options) {
        this.options = this.addProperties(options);
    }

    addProperties(opts) {
        const props = { size: 10,
            alphabet: true,
            symbols: true,
            numbers: true,
            uppercase: true };
        if (!this.hasProperties(opts)) {
            return props;
        }
        // define main properties
        Object.getOwnPropertyNames(props).forEach(name => {
            if (!opts.hasOwnProperty(name)) {
                opts[name] = props[name];
            }
        });
        return opts;
    }

    hasProperties(options) {
        return options !== null && options !== undefined && Object.getOwnPropertyNames(options).length > 0
    }

    getPassword() {
        const letters = this.options.alphabet;
        const uppercase = this.options.uppercase;
        const symbols = this.options.symbols;
        const numbers = this.options.numbers;
        let chars = this.letters;
        if (letters) {
            chars += this.letters;
        }
        if (uppercase) {
            chars += this.letters.toUpperCase();
        }
        if (symbols) {
            chars += this.symbols;
        }
        if (numbers) {
            chars += this.numbers;
        }
        if (chars.length == 0) {
            chars = alphabet;// this is the charset by default
        }
        let password = '';
        for (let i = 0; i < this.options.size; i++) {
            const index = Math.abs(Math.floor(Math.random() * chars.length));
            password += chars[index];
        }
        return password;
    }
}