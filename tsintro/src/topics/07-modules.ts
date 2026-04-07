import { taxCalculation } from './06-desctructuring'
import type { Product } from './06-desctructuring'

const shoppingCart: Product[] = [
    {
        name: 'Nokia',
        price: 150
    },
    {
        name: 'ipad air',
        price: 250
    }
]

const [total, totalTax] = taxCalculation({
    products: shoppingCart,
    tax: 0.15
})

console.log('Total ', total);
console.log('Tax total ', totalTax);