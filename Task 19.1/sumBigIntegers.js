/*
 Створіть функцію sumBigIntegers, яка приймає два рядки (numStr1 та numStr2), що представляють великі числа.
 Функція повинна перетворити ці рядки на BigInt і повернути їх суму.
*/

function sumBigIntegers(numStr1, numStr2) {
  const bInt1 = BigInt(numStr1);
  const bInt2 = BigInt(numStr2);
  
  return bInt1 + bInt2;
}

console.log(sumBigIntegers('9007199254740991', '9007199254740991')); 
// Виводить: 18014398509481982n