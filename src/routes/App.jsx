import { Outlet, Link } from "react-router-dom";

export default function App() {
  return (
    <div >
      <h1>Control de gastos </h1>
      <nav
        style={{
          borderBottom: "solid 10px",
          paddingBottom: "1rem",
          color: "green",         
        }}
      >
        <Link to="/invoices">Comercios</Link> |{" "}
        <Link to="/expenses">Pagos</Link>
      </nav>
      <Outlet />
    </div>
  );
}