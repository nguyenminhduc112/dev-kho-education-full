class Validate {
    constructor() {
        this.errors = {};
    }
    isEmail = (email) => {
        return String(email)
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );
    }
    isPassword = (password) => {
        return String(password)
            .match(
                /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])/
            );
    }
    run = (rules = {}, message = {}) => {
        if (Object.keys(rules).length) {
            Object.keys(rules).forEach((fieldName) => {
                const rulesContent = rules[fieldName]
                this.errors[fieldName] = {}
                if (rulesContent !== undefined) {
                    const rulesContentArr = rulesContent.split('|')
                    const value = document.getElementById(fieldName).value
                    const valuePassword = document.getElementById('password').value
                   
                    rulesContentArr.forEach((rule) => {
                        if (rule === 'required' && (value === '' || value === undefined)) {
                            this.errors[fieldName][rule] = message[`${fieldName}.${rule}`]
                        }
                        if (value.length > 0) {
                            if (rule === 'email' && !this.isEmail(value)) {
                                this.errors[fieldName][rule] = message[`${fieldName}.${rule}`]
                            }

                            if (rule === 'password' && !this.isPassword(value)) {
                                this.errors[fieldName][rule] = message[`${fieldName}.${rule}`]
                            }

                            if (rule === 'min:8' && value.length < 8) {
                                this.errors[fieldName][rule] = message[`${fieldName}.${rule}`]
                            }
                            if (rule === 'min:2' && value.length < 2) {
                                this.errors[fieldName][rule] = message[`${fieldName}.${rule}`]
                            }
                            if (rule === 'same' && value != valuePassword ) {
                                this.errors[fieldName][rule] = message[`${fieldName}.${rule}`]
                            }
                        }

                    })
                }
            })
        }

        return true

    }
    getError = (fieldName ) => {
        if (this.errors[fieldName] !== undefined) {
            const error = this.errors[fieldName]
            if (Object.keys(error).length) {
                return error[Object.keys(error)[0]]
            }
        }
        return null;
    }
}

export default Validate;