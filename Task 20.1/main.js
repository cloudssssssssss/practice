console.log('#3. JavaScript homework example file')

/*
 * #1: Об'єкт userObj
 */
const userObj = {
  firstName: 'Стас',
  lastName: 'Любченко',
  age: 21
};

/*
 * #2: Метод fullName()
 */
userObj.fullName = function() {
  return `${this.firstName} ${this.lastName}`;
};

/*
 * #3: defUpperStr() з оператором ||
 */
function defUpperStr(text) {
  // Якщо text порожній (undefined, null, ''), підставиться значення праворуч
  return (text || 'default text').toUpperCase();
}

/*
 * #4: evenFn(n) - тільки парні через for
 */
function evenFn(n) {
  const arr = [];
  for (let i = 1; i <= n; i++) {
    if (i % 2 === 0) arr.push(i);
  }
  return arr;
}

/*
 * #5: weekFn(n) через switch
 */
function weekFn(n) {
  let day = '';
  switch (n) {
    case 1: day = 'Понеділок'; break;
    case 2: day = 'Вівторок'; break;
    case 3: day = 'Середа'; break;
    case 4: day = 'Четвер'; break;
    case 5: day = "П'ятниця"; break;
    case 6: day = 'Субота'; break;
    case 7: day = 'Неділя'; break;
    default: return null;
  }
  return day;
}

/*
 * #6: ageClassification(n) через тернарний оператор
 */
function ageClassification(n) {
  return n <= 0 ? null :
         n <= 24 ? 'Дитинство' :
         n <= 44 ? 'Молодість' :
         n <= 65 ? 'Зрілість' :
         n <= 75 ? 'Старість' :
         n <= 90 ? 'Довголіття' :
         n <= 122 ? 'Рекорд' : null;
}

/*
 * #7: oddFn(n) - тільки непарні через while
 */
function oddFn(n) {
  const arr = [];
  let i = 1;
  while (i <= n) {
    if (i % 2 !== 0) arr.push(i);
    i++;
  }
  return arr;
}

/*
 * #8: mainFunc та callback-функції
 */
function mainFunc(a, b, cb) {
  // Перевірка, чи є третій параметр функцією
  if (typeof cb !== 'function') return false;
  return cb(a, b);
}

function cbRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function cbPow(num, pow) {
  return Math.pow(num, pow);
}

function cbAdd(a, b) {
  return a + b;
}

// Перевірка результатів:
console.log('--- Перевірка ---');
console.log('Full Name:', userObj.fullName()); 
console.log('Upper Str:', defUpperStr()); 
console.log('Even numbers (15):', evenFn(15)); 
console.log('Week Day (3):', weekFn(3));
console.log('Age (44.01):', ageClassification(44.01));
console.log('Odd numbers (10):', oddFn(10));
console.log('Callback Random (2, 5):', mainFunc(2, 5, cbRandom));
console.log('Callback Pow (2, 5):', mainFunc(2, 5, cbPow));
console.log('Callback Add (2, 5):', mainFunc(2, 5, cbAdd));
console.log('Not a func:', mainFunc(2, 5, 'not a func'));