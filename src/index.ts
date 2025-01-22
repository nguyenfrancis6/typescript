// type alias to prevent DRY code
type Employee = {
  readonly id: number;
  name: string;
  retire: (date: Date) => void;
}

let employee: Employee = {
  id: 1,
  name: "",
  retire: (date: Date) => {
    console.log(date);
  },
};

// union typing
function kgToLbs(weight: number | string) {
  // narrowing 
  if (typeof weight === 'number') 
    return weight * 2.2;
  else {
    return parseInt(weight) * 2.2
  }
}

kgToLbs(10);
kgToLbs('10kg');

// intersection typing
type Draggable = {
  drag: () => void
}

type Resizable = {
  resize: () => void
}

type UIWidget = Draggable & Resizable

let textBox: UIWidget = {
  drag: () => {},
  resize: () => {}
}

// literal (exact, specific) types
type Quantity = 50 | 100;
let quantity: Quantity = 100;

type Metric = 'cm' | 'inch'

// nullable types
function greet(name: string | null | undefined) {
  if (name)
    console.log(name.toUpperCase());
  else
    console.log('Hola!')
}

type Customer = {
  birthday?: Date
}

function getCustomer(id: number): Customer | null | undefined {
  return id === 0 ? null : { birthday: new Date() };
}

let customer = getCustomer(1);
// optional property access operator
console.log(customer?.birthday?.getFullYear());

//optional element access operator
// if (customers !== null && customers !== undefined)
// customers?.[0]

// optional call
let log: any = null;
log?.('a')
