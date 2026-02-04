// import axios from "axios";

// function AdminPage({ leaves, refresh }) {

//     const updateStatus = async (id, status) => {
//         await axios.put(`http://localhost:5000/api/leaves/${id}`, { status });
//         refresh();
//     };

//     return (
//         <div className="card shadow-sm">
//             <div className="card-body">
//                 <h5 className="card-title mb-3">Admin – Manage Leave Requests</h5>

//                 <table className="table table-bordered table-hover align-middle">
//                     <thead>
//                         <tr>
//                             <th>Employee</th>
//                             <th>Type</th>
//                             <th>From</th>
//                             <th>To</th>
//                             <th>Status</th>
//                             <th>Change Status</th>
//                         </tr>
//                     </thead>

//                     <tbody>
//                         {leaves.map(leave => (
//                             <tr key={leave._id}>
//                                 <td>{leave.employeeName}</td>
//                                 <td>{leave.leaveType}</td>
//                                 <td>{leave.fromDate.slice(0, 10)}</td>
//                                 <td>{leave.toDate.slice(0, 10)}</td>
//                                 <td className={`status-${leave.status.toLowerCase()}`}>
//                                     {leave.status}
//                                 </td>
//                                 <td>
//                                     <select
//                                         className="form-select"
//                                         value={leave.status}
//                                         onChange={(e) =>
//                                             updateStatus(leave._id, e.target.value)
//                                         }
//                                     >
//                                         <option value="Pending">Pending</option>
//                                         <option value="Approved">Approved</option>
//                                         <option value="Rejected">Rejected</option>
//                                     </select>
//                                 </td>
//                             </tr>
//                         ))}
//                     </tbody>
//                 </table>

//                 {leaves.length === 0 && (
//                     <p className="text-muted text-center">No leave requests found</p>
//                 )}
//             </div>
//         </div>
//     );
// }

// export default AdminPage;


import api from "../api";

function AdminPage({ leaves, refresh }) {

    const updateStatus = async (id, status) => {
        await api.put(`/api/leaves/${id}`, { status });
        refresh();
    };

    return (
        <div className="card shadow-sm">
            <div className="card-body">
                <h5 className="card-title mb-3">Admin – Manage Leave Requests</h5>

                <table className="table table-bordered table-hover align-middle">
                    <thead>
                        <tr>
                            <th>Employee</th>
                            <th>Type</th>
                            <th>From</th>
                            <th>To</th>
                            <th>Status</th>
                            <th>Change Status</th>
                        </tr>
                    </thead>

                    <tbody>
                        {leaves.map(leave => (
                            <tr key={leave._id}>
                                <td>{leave.employeeName}</td>
                                <td>{leave.leaveType}</td>
                                <td>{leave.fromDate.slice(0, 10)}</td>
                                <td>{leave.toDate.slice(0, 10)}</td>
                                <td>
                                    <span className={`status-badge status-${leave.status.toLowerCase()}`}>
                                        {leave.status}
                                    </span>
                                </td>
                                <td>
                                    <select
                                        className="form-select"
                                        value={leave.status}
                                        onChange={(e) =>
                                            updateStatus(leave._id, e.target.value)
                                        }
                                    >
                                        <option value="Pending">Pending</option>
                                        <option value="Approved">Approved</option>
                                        <option value="Rejected">Rejected</option>
                                    </select>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                {leaves.length === 0 && (
                    <p className="text-muted text-center">No leave requests found</p>
                )}
            </div>
        </div>
    );
}

export default AdminPage;
