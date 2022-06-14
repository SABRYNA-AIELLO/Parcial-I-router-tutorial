export function getInvoices() {
    return invoices;
  }
  export function getInvoice(number) {
    return invoices.find(
      (invoice) => invoice.number === number
    );
  }
  
  let invoices = [
    {
      name: "Adidas",
      number: 1995,
      amount: "$510,800",
      due: "12/05/1995",
    },
    {
      name: "Converse",
      number: 2000,
      amount: "$208,000",
      due: "10/31/2000",
    },
    {
      name: "Nike",
      number: 2003,
      amount: "$389,500",
      due: "07/22/2003",
    },
    {
      name: "Topper",
      number: 1997,
      amount: "$94,000",
      due: "09/01/1997",
    },
    {
      name: "Puma",
      number: 1998,
      amount: "$174,600",
      due: "01/27/1998",
    },
  ];
  
  