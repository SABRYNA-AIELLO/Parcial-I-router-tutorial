import { NavLink, Outlet, useSearchParams,} from "react-router-dom";
import { getExpenses } from "../data2";


export default function Expenses() {
  let expenses = getExpenses ();
  let [searchParams, setSearchParams] = useSearchParams ({ replace: true});

  return (
    <div style={{ display: "flex" }}>
      <nav
        style={{
          borderRight: "solid 10px",
          padding: "1rem",
          color: "green",
        }}
      >
        <input
          value={searchParams.get("filter") || ""}
          onChange={(event) => {
            let filter = event.target.value;
            if (filter) {
              setSearchParams({ filter });
            } else {
              setSearchParams({});
            }
          }}
        />
        {expenses
          .filter((expense) => {
            let filter = searchParams.get("filter");
            if (!filter) return true;
            let name = expense.name.toLowerCase();
            return name.startsWith(filter.toLowerCase());
          })
          .map((expense) => (
            <NavLink
              style={({ isActive }) => ({
                display: "block",
                margin: "1rem 0",
                color: isActive ? "red" : "",
                fontSize: "30px",
              })}
              to={`/expenses/${expense.number}`}
              key={expense.number}
            >
              {expense.name}
            </NavLink>
          ))}
      </nav>
      <Outlet />
    </div>
  );
}

