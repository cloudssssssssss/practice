function ageClassification(num) {
  return num < 0 ? null :
    num <= 24 ? 'Дитинство' :
      num <= 44 ? 'Молодість' :
        num <= 65 ? 'Зрілість' :
          num <= 75 ? 'Старість' :
            num <= 90 ? 'Довголіття' :
              num <= 122 ? 'Рекорд' : null;
}

function weekFn(cond) {
  switch (cond) {
    case 1: return 'Понеділок';
    case 2: return 'Вівторок';
    case 3: return 'Середа';
    case 4: return 'Четвер';
    case 5: return "П'ятниця";
    case 6: return 'Субота';
    case 7: return 'Неділя';
    default: return null;
  }
}

// Це експорт - без нього тест не побачить функції
module.exports = { ageClassification, weekFn };