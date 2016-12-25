/**
 * Created by ljj on 2016/12/26.
 */
class User {
    constructor(name,pass) {
        this.name = name;
        this.pass = pass;
    }

    validateName() {
        let name = this.name;
        return new Promise(function (resolve, reject) {
            setTimeout(function () {
                if (name === 'leo') {
                    resolve('success');
                } else {
                    reject('error name');
                }
            });

        })

    }

    validatePass() {
        let pass = this.pass;
        return new Promise(function (resolve, reject) {
            setTimeout(function () {
                if (pass === '123') {
                    resolve('success');
                } else {
                    reject('error pass');
                }
            });

        })

    }
}

const user = new User("leo","123");
user.validateName()
    .then(function (pp) {
        return validatePass();
    })
    .catch(function (er) {
        console.log(er);
    });