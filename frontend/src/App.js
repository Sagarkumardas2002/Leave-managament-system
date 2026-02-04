// import { useEffect, useState } from "react";
// import axios from "axios";
// import ApplyLeave from "./components/ApplyLeave";
// import AdminPage from "./Pages/AdminPage";
// import EmployeePage from "./Pages/EmployeePage";
// import "./App.css";

// function App() {
//   const [leaves, setLeaves] = useState([]);
//   const [role, setRole] = useState("employee"); // change to "admin"

//   const fetchLeaves = async () => {
//     const res = await axios.get("http://localhost:5000/api/leaves");
//     setLeaves(res.data);
//   };

//   useEffect(() => {
//     fetchLeaves();
//   }, []);

//   return (
//     <div className="container py-4">
//       <h2 className="text-center text-primary mb-4">
//         Leave Management System
//       </h2>

//       {/* TEMP role switch (for demo) */}
//       <div className="text-center mb-3">
//         <button
//           className="btn btn-outline-primary me-2"
//           onClick={() => setRole("employee")}
//         >
//           Employee View
//         </button>
//         <button
//           className="btn btn-outline-danger"
//           onClick={() => setRole("admin")}
//         >
//           Admin View
//         </button>
//       </div>

//       {role === "employee" && (
//         <>
//           <ApplyLeave refresh={fetchLeaves} />
//           <EmployeePage leaves={leaves} />
//         </>
//       )}

//       {role === "admin" && (
//         <AdminPage leaves={leaves} refresh={fetchLeaves} />
//       )}
//     </div>
//   );
// }

// export default App;


import { useEffect, useState } from "react";
import api from "./api";
import ApplyLeave from "./components/ApplyLeave";
import AdminPage from "./Pages/AdminPage";
import EmployeePage from "./Pages/EmployeePage";
import "./App.css";

function App() {
  const [leaves, setLeaves] = useState([]);
  const [role, setRole] = useState("employee");

  const fetchLeaves = async () => {
    const res = await api.get("/api/leaves");
    setLeaves(res.data);
  };

  useEffect(() => {
    fetchLeaves();
  }, []);

  return (
    <div className="container py-4">
      <h2 className="text-center text-primary mb-4">
        Leave Management System
      </h2>

      <div className="text-center mb-3">
        <button
          className="btn btn-outline-primary me-2"
          onClick={() => setRole("employee")}
        >
          Employee View
        </button>
        <button
          className="btn btn-outline-danger"
          onClick={() => setRole("admin")}
        >
          Admin View
        </button>
      </div>

      {role === "employee" && (
        <>
          <ApplyLeave refresh={fetchLeaves} />
          <EmployeePage leaves={leaves} />
        </>
      )}

      {role === "admin" && (
        <AdminPage leaves={leaves} refresh={fetchLeaves} />
      )}
    </div>
  );
}

export default App;
