const num1 = prompt('Введіть перше число');
const num2 = prompt('Введіть друге число');
const num3 = prompt('Введіть третє число');

const arr =[num1, num2, num3];

const arithmeticalMean = (arr) => {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += Number(arr[i]);
    }
    return sum / arr.length;
}

alert(arithmeticalMean(arr));