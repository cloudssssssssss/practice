console.log('#5. JavaScript homework example file')

/*
 * #1: counter() з використанням замикання (IIFE)
 */
const counter = (function () {
  let count = 0;
  return function (n) {
    if (n !== undefined) count = n;
    return count++;
  };
})();

/*
 * #2: counterFactory з методами
 */
const counterFactory = (function () {
  let count = 0;
  return {
    value(n) {
      if (n !== undefined) count = n;
      return count;
    },
    increment() {
      count++;
    },
    decrement() {
      count--;
    }
  };
})();

/*
 * #3: myPow рекурсія та callback
 */
const myPrint = (a, b, res) => `${a}^${b}=${res}`;

const myPow = (a, b, cb) => {
  const pow = (x, y) => {
    if (y === 0) return 1;
    if (y < 0) return 1 / pow(x, -y);
    return x * pow(x, y - 1);
  };
  const result = pow(a, b);
  return cb(a, b, result);
};

/*
 * #4: myMax з використанням apply
 */
const myMax = (arr) => Math.max.apply(null, arr);

/*
 * #5: myMul, myDouble, myTriple (Currying з bind)
 */
const myMul = (a, b) => a * b;

// Використовуємо bind для фіксації першого аргументу (каррування)
const myDouble = myMul.bind(null, 2);
const myTriple = myMul.bind(null, 3);

// Блок експорту для тестів
export { counter, counterFactory, myPow, myMax, myMul, myDouble, myTriple }