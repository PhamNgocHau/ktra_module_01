function sumNumOdd() {
    let array = [];
    let sum = 0;
    for (let i = 0 ; i < 5 ; i++){
        array.push(parseInt(prompt('Nhap phan tu vao mang: ')));
        if (array[i] % 2 === 1){
            sum += array[i];
        }
    }
    document.write( 'Array first: ' + array + '<br>');
    document.write('Sum Num Odd: ' + sum);
}
sumNumOdd();
