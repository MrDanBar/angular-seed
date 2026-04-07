export interface Product {
    name: string;
    price: number;
}

interface taxCalculationOptions {
    products: Product[];
    tax: number;
}

const taxCalculation = (options: taxCalculationOptions) : [number, number]=> {
    
    const {products, tax} = options;

    let total: number = 0;

    products.forEach( ({ price }) => {
        total += price;
    });
    
    return [total, total * tax]
}

export { taxCalculation };