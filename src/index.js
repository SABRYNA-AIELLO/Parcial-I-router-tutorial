import ReactDOM from "react-dom/client";
import App from "./App";
import Expenses from "./routes/expenses";
import Expense from "./routes/expense";
import Invoices from "./routes/invoices";
import Invoice from "./routes/invoice";
import React from 'react'
import { BrowserRouter, Routes, Route,} from "react-router-dom";

const root = ReactDOM.createRoot( 
  document.getElementById("root")
);

root.render(
  <BrowserRouter>
<Routes>
<Route path="/" element={<App />}>
     <Route path="invoices" element={<Invoices />}>
     <Route path="expenses" element={<Expenses />} />
      <Route
        index
        element={
          <main style={{ 
            padding: "1rem",
            fontSize: "18px",
          }}>
            <p>SELECCIONE UN COMERCIO </p>
          </main>
        }
      />
      <Route path=":invoiceId" element={<Invoice />} />
      <Route path=":expenseId" element={<Expense />} />
    </Route>
    <Route
      path="*"
      element={
        <main style={{ 
          padding: "1rem",
          fontSize: "18px",
        }}>
          <p>There's nothing here!</p>
        </main>
      }
    />
  </Route>
</Routes>
  </BrowserRouter>
)