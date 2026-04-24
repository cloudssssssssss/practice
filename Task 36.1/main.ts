console.log('#19. TypeScript homework example file')

/*
 * #1: sumArray
 */
function sumArray(numbers: number[]): number {
  return numbers.reduce((acc, curr) => acc + curr, 0);
}

// Перевірка
console.log(sumArray([1, 2, 3, 4])) // 10
console.log(sumArray([])) // 0

/*
 * #2: createUser
 */
type User = {
  name: string;
  age: number;
  isActive: boolean;
};

function createUser(name: string, age: number, isActive: boolean = true): User {
  return {
    name,
    age,
    isActive
  };
}

const newUser = createUser('Анна', 25, true)
console.log(newUser)

/*
 * #3: getOrderStatus
 */
enum OrderStatus {
  Pending = 'Pending',
  Shipped = 'Shipped',
  Delivered = 'Delivered',
  Cancelled = 'Cancelled'
}

function getOrderStatus(status: OrderStatus): string {
  switch (status) {
    case OrderStatus.Pending:
      return 'Замовлення очікує на обробку';
    case OrderStatus.Shipped:
      return 'Замовлення було відправлено';
    case OrderStatus.Delivered:
      return 'Замовлення доставлено';
    case OrderStatus.Cancelled:
      return 'Замовлення скасовано';
    default:
      throw new Error('Невідомий статус замовлення');
  }
}

// Приклади виклику
console.log(getOrderStatus(OrderStatus.Pending))
console.log(getOrderStatus(OrderStatus.Shipped))

export { sumArray, createUser, OrderStatus, getOrderStatus }