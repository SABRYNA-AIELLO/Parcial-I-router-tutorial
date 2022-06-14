export function getExpenses() {
    return expenses;
  }
  export function getExpense(number) {
    return expenses.find(
      (expense) => expense.number === number
    );
  }
  
  let expenses = [
    {
      name: "Adidas",
      number: 2022,
      amount: "$100,000",
      due: "12/05/2022",
    },
    {
      name: "Converse",
      number: 2000,
      amount: "$50,000",
      due: "10/31/2021",
    },
    {
      name: "Nike",
      number: 2003,
      amount: "$300,00",
      due: "07/22/2021",
    },
    {
      name: "Topper",
      number: 1997,
      amount: "$30,000",
      due: "02/01/2022",
    },
    {
      name: "Puma",
      number: 1998,
      amount: "$105,300",
      due: "01/27/2020",
    },
  ];
  
  