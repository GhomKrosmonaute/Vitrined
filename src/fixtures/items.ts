function generateImageLink(): string {
  return `/placeholders/img_${Math.floor(Math.random() * 4)}.png`
}

const items: Array<Item> = new Array(50).fill(0).map((_, index) => ({
  id: index,
  name: `Item ${index}`,
  description: `Description for item ${index}`,
  image: generateImageLink(),
  price: Math.random() * 100,
}))

export default items
