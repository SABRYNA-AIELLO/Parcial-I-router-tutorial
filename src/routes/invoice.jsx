import { useParams } from "react-router-dom";
import { getInvoice } from "../data";

export default function Invoice() {
  let params = useParams();
  let invoice = getInvoice(parseInt(params.invoiceId, 10));
  return (
    <main style={{ 
      padding: "1rem",
      fontSize: "18px",
      color: "purple",
    }}>
      <h2>Total Adeudado: {invoice.amount}</h2>
      <p>
        {invoice.name}: {invoice.number}
      </p>
      <p>Fecha de Deuda: {invoice.due}</p>
    </main>
  );
}