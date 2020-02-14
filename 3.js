function sum() {



    for (let [key, val] of Object.entries(arguments)) {
        console.log(key, val);
    }

}

const numbers = [1, 2, 3];

sum(...numbers)

