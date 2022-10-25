import Product from "./models/Product";

export const products: Product[] = [
  {
    name: "Nikon Camera",
    price: 5196.99,
  },
  {
    name: "Apple iPhone",
    price: 1599.99,
  },
  {
    name: "Convertible Bench",
    price: 248.99,
  },
];

export const calcAverageProductPrice = (array: Product[]): number => {
  let total: number = 0;
  array.forEach((product) => {
    total += product.price;
  });
  const averagePrice: number = total / array.length;
  const roundedAverage: number = +averagePrice.toFixed(2);
  if (array.length === 0) {
    return 0;
  } else {
    return roundedAverage;
  }
};
