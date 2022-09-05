import { Link, Outlet, useSearchParams } from "react-router-dom";

export default function Users() {
  const [searchParams, setSearchParams] = useSearchParams();
  const showActiveUsers = searchParams.get("filter") === "active";
  const users = [
    {
      id: 1,
      nama: "Trias",
    },
    {
      id: 2,
      nama: "Iqbal",
    },
    {
      id: 3,
      nama: "Alfan",
    },
  ];

  return (
    <div>
      <p>Use Params</p>
      <ul>
        {users.map((item) => (
          <Link to={`/users/${item.id}`} key={item.id}>
            <li>{item.nama}</li>
          </Link>
        ))}
      </ul>
      <Outlet />
      <p>Select Params</p>
      <div>
        <div>
          <button onClick={() => setSearchParams({ filter: "active" })}>
            Active Users
          </button>
          <button onClick={() => setSearchParams({})}>Reset Filters</button>
        </div>
        {showActiveUsers ? (
          <h2>Show Active Users</h2>
        ) : (
          <h2>Select to Active Users</h2>
        )}
      </div>
    </div>
  );
}
