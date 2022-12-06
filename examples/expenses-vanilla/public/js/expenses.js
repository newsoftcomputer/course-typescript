"use strict";
class ArrayList {
    constructor() {
        this.items = [];
    }
    add(item) {
        this.items.push(item);
    }
    get(index) {
        const item = this.items.filter((x, i) => {
            return i === index;
        });
        if (item.length === 0) {
            return null;
        }
        else {
            return item[0];
        }
    }
    createFrom(value) {
        this.items = [...value];
    }
    getAll() {
        return this.items;
    }
}
class Expenses {
    constructor(currency) {
        this.count = 0;
        this.expenses = new ArrayList();
        this.finalCurrency = currency;
    }
    add(item) {
        item.id = this.count;
        this.count++;
        this.expenses.add(item);
        return false;
    }
    get(index) {
        return this.expenses.get(index);
    }
    // Perzonalize Metod
    getItems() {
        return this.expenses.getAll();
    }
    getTotal() {
        const total = this.expenses.getAll().reduce((acc, item) => {
            return acc += this.convertCurrency(item, this.finalCurrency);
        }, 0);
        return `${this.finalCurrency} $${total.toFixed(2).toString()}`;
    }
    remove(id) {
        throw new Error("Method not implemented.");
    }
    convertCurrency(item, currency) {
        switch (item.cost.currency) {
            case 'USD':
                switch (currency) {
                    case 'COP':
                        return item.cost.number * 4550;
                        break;
                    default:
                        return item.cost.number;
                }
                break;
            case 'COP':
                switch (currency) {
                    case 'USD':
                        return item.cost.number / 4550;
                        break;
                    default:
                        return item.cost.number;
                }
                break;
            default:
                return 0;
        }
    }
}
