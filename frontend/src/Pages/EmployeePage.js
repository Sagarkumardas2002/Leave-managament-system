// function EmployeePage({ leaves }) {
//     return (
//         <div className="card shadow-sm">
//             <div className="card-body">
//                 <h5 className="card-title mb-3">My Leave Requests</h5>

//                 <table className="table table-bordered table-hover align-middle">
//                     <thead>
//                         <tr>
//                             <th>Employee Name</th>
//                             <th>Leave Type</th>
//                             <th>From</th>
//                             <th>To</th>
//                             <th>Status</th>
//                         </tr>
//                     </thead>

//                     <tbody>
//                         {leaves.map(leave => (
//                             <tr key={leave._id}>
//                                 <td>{leave.employeeName}</td>
//                                 <td>{leave.leaveType}</td>
//                                 <td>{leave.fromDate.slice(0, 10)}</td>
//                                 <td>{leave.toDate.slice(0, 10)}</td>
//                                 <td>
//                                     <span className={`status-badge status-${leave.status.toLowerCase()}`}>
//                                         {leave.status}
//                                     </span>
//                                 </td>

//                             </tr>
//                         ))}
//                     </tbody>
//                 </table>

//                 {leaves.length === 0 && (
//                     <p className="text-muted text-center">
//                         No leave requests found
//                     </p>
//                 )}
//             </div>
//         </div>
//     );
// }

// export default EmployeePage;


function EmployeePage({ leaves }) {
    return (
        <div className="card shadow-sm">
            <div className="card-body">
                <h5 className="card-title mb-3">My Leave Requests</h5>

                <table className="table table-bordered table-hover align-middle">
                    <thead>
                        <tr>
                            <th>Employee Name</th>
                            <th>Leave Type</th>
                            <th>From</th>
                            <th>To</th>
                            <th>Status</th>
                        </tr>
                    </thead>

                    <tbody>
                        {leaves.map((leave) => (
                            <tr key={leave._id}>
                                <td>{leave.employeeName}</td>
                                <td>{leave.leaveType}</td>
                                <td>
                                    {leave.fromDate
                                        ? leave.fromDate.slice(0, 10)
                                        : "-"}
                                </td>
                                <td>
                                    {leave.toDate
                                        ? leave.toDate.slice(0, 10)
                                        : "-"}
                                </td>
                                <td>
                                    <span
                                        className={`status-badge status-${leave.status.toLowerCase()}`}
                                    >
                                        {leave.status}
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                {leaves.length === 0 && (
                    <p className="text-muted text-center">
                        No leave requests found
                    </p>
                )}
            </div>
        </div>
    );
}

export default EmployeePage;
