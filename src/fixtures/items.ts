import { faker } from "@faker-js/faker"

function generateImageLink(): string {
  return `/placeholders/img_${Math.floor(Math.random() * 4)}.png`
}

const items: Array<Item> = new Array(50).fill(0).map((_, index) => ({
  id: index,
  name: faker.commerce.productName(),
  description: faker.commerce.productDescription(),
  image: generateImageLink(),
  price: faker.commerce.price(),
}))

export default items
