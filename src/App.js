import { Outlet, Link } from "react-router-dom";

export default function App() {
  return (
    <div>
      <h1 style={{
      fontSize: "52px",
      textAlign: "center",
    }}>
      Control de Gastos</h1>
      <nav
        style={{
          borderBottom: "solid 10px",
          paddingBottom: "1rem",
          color: "green",
        }}
      >
        <Link to="/invoices" style={{
           fontSize: "28px",
        }}
        >Comercios</Link> |{" "}

        <Link to="/expenses" style={{
           fontSize: "28px",
        }}
        >Pagos</Link>
      </nav>
      <Outlet />
    </div>
  );
};