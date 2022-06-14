import { useParams } from "react-router-dom";
import { getExpense } from "../data2";

export default function Expense() {
  let params = useParams();
  let expense = getExpense(parseInt(params.expenseId, 10));
  return (
    <main style={{ 
      padding: "1rem",
      fontSize: "18px",
      color: "purple",
    }}>
      <h2>Total pagado: {expense.amount}</h2>
      <p>
        {expense.name}: {expense.number}
      </p>
      <p>Fecha de pago: {expense.due}</p>
    </main>
  );
}