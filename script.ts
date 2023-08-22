export{}

//1
interface Mountain {
    name: string;
    height: number;
}

let mountains:Mountain[] = [
    {
        name: "Kilimanjaro",
        height: 19341
    },
    {
        name: "Everest",
        height: 29029
    },
    {
        name: "Denali",
        height: 20310
    }
]

function findNameofTallestMountain(allMountains:Mountain[]):string{
    let tallestMountain:Mountain = allMountains[0];

    allMountains.forEach((m:Mountain) => {
        if(m.height > tallestMountain.height){
            tallestMountain = m;
        }
    });

    return tallestMountain.name
} 

let mountainName:string = findNameofTallestMountain(mountains);
console.log(mountainName);

//2
interface Product {
    name: string;
    price: number;
}

let products:Product[] = [
    {
        name: "hard drive",
        price: 500.00
    },
    {
        name: "keyboard",
        price: 50.00
    },
    {
        name: "charger",
        price: 80.00
    }
]

function calcAveragePrice(allProducts:Product[]):number{
    let result:number = 0;
    let count:number = 0;
    allProducts.forEach((p:Product) => {
        result += p.price;
        count ++;
    })
    return result / count;
}

let averageProducts: number = calcAveragePrice(products);
console.log(averageProducts);

//3
interface InventoryItem {
    product: Product
    quantity: number
}

let inventory:InventoryItem[] = [
    {
        product: {
            name: "motor",
            price: 10.00
        },
        quantity: 10
    },
    {
        product: {
            name: "sensor",
            price: 12.50
        },
        quantity: 4
    },
    {
        product: {
            name: "LED",
            price: 1.00
        },
        quantity: 20
    }
]

function calcInventoryValue(allInventory:InventoryItem[]): number{
    let result = 0;

    allInventory.forEach((i:InventoryItem) => {
        result += i.product.price * i.quantity;
    })
    return result;   
}

let inventoryValue:number = calcInventoryValue(inventory);
console.log(inventoryValue);
