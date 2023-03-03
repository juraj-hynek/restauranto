import faker from "faker"

const stock = [];

for (let i = 0; i < 100; i++) {
  const item = {
    name: faker.commerce.productName(),
    category: faker.commerce.department(),
    quantity: faker.datatype.number({ min: 10, max: 100 }),
    price: faker.commerce.price(),
  };
  stock.push(item);
}

export default stock