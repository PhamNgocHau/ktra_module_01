function check() {
    let num = document.getElementById('txt').value;
    let count = 0;
    let checkNum = 2;

    for ( let i = 1 ; i <= num ; i++) {
        if (isPrimeNumber(checkNum)) {
            count++;
            document.getElementById('result').innerHTML += ' ' + checkNum;

        }
        checkNum++;
    }

    function isPrimeNumber(num) {
        let squareRoot = Math.sqrt(num);
        for (let i = 2; i <= squareRoot; i++) {
            if (num % i === 0) {
                return false
            }
        }
        return true;
    }
}