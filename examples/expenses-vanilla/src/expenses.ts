
type Currency = "USD" | "COP"
interface Price {
    number: number,
    currency: Currency
}
interface ExpenseItem {
    id: number,
    title: string,
    cost: Price
}

interface IExpenses {
    expenses: ArrayList<ExpenseItem>,
    finalCurrency: Currency,
    add(item: ExpenseItem):boolean,
    get(index:number): ExpenseItem|null,
    getTotal(): string,
    remove(id:number): boolean
}

class ArrayList<T> {
    private items: T[];

    constructor() {
        this.items = []
    }

    add(item:T):void {
        this.items.push(item);
    }

    get(index:number):T|null {
        const item:T[] = this.items.filter( (x:T, i:number) => {
            return i === index
        })

        if (item.length === 0) {
            return null
        } else {
            return item[0]
        }
    }

    createFrom(value:T[]):void {
        this.items = [...value]
    }

    getAll():T[] {
        return this.items
    }
}

class Expenses implements IExpenses {

    expenses: ArrayList<ExpenseItem>;
    finalCurrency: Currency;

    constructor(currency: Currency) {
        this.expenses = new ArrayList<ExpenseItem>()
        this.finalCurrency = currency
    }

    private count = 0

    add(item: ExpenseItem): boolean {
        item.id = this.count
        this.count++;
        this.expenses.add(item)
        return false
    }

    get(index:number): ExpenseItem | null {
        return this.expenses.get(index)
    }

    // Perzonalize Metod
    getItems(): ExpenseItem[] {
        return this.expenses.getAll()
    }

    getTotal(): string {
        const total:number = this.expenses.getAll().reduce( (acc:number, item:ExpenseItem) => {
            return acc += this.convertCurrency(item, this.finalCurrency)
        }, 0 )

        return `${this.finalCurrency} $${total.toFixed(2).toString()}`;
    }

    remove(id: number): boolean {
        throw new Error("Method not implemented.");
    }

    private convertCurrency(item:ExpenseItem, currency: Currency):number {
        switch (item.cost.currency) {
            case 'USD':
                switch (currency) {
                    case 'COP':
                        return item.cost.number * 4550       
                    break;
                    
                    default:
                        return item.cost.number
                }
                break;

            case 'COP':
                switch (currency) {
                    case 'USD':
                        return item.cost.number / 4550       
                    break;
                    
                    default:
                        return item.cost.number
                }
            break;  
        
            default:
                return 0
        }
    }

}
