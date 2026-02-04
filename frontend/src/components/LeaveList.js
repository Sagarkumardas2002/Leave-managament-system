



import api from "../api";

function LeaveList({ leaves, refresh }) {

    const updateStatus = async (id, status) => {
        await api.put(`/api/leaves/${id}`, { status });
        refresh();
    };

    return (
        <div className="card shadow-sm">
            <div className="card-body">
                <h5 className="card-title mb-3">Leave Requests</h5>

                <table className="table table-hover table-bordered align-middle">
                    <thead>
                        <tr>
                            <th>Employee</th>
                            <th>Type</th>
                            <th>From</th>
                            <th>To</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>

                    <tbody>
                        {leaves.map(leave => (
                            <tr key={leave._id}>
                                <td>{leave.employeeName}</td>
                                <td>{leave.leaveType}</td>
                                <td>{leave.fromDate.slice(0, 10)}</td>
                                <td>{leave.toDate.slice(0, 10)}</td>
                                <td className={`status-${leave.status.toLowerCase()}`}>
                                    {leave.status}
                                </td>
                                <td>
                                    <button
                                        className="btn btn-warning btn-sm me-2"
                                        disabled={leave.status === "Pending"}
                                        onClick={() => updateStatus(leave._id, "Pending")}
                                    >
                                        Pending
                                    </button>

                                    <button
                                        className="btn btn-success btn-sm me-2"
                                        disabled={leave.status === "Approved"}
                                        onClick={() => updateStatus(leave._id, "Approved")}
                                    >
                                        Approve
                                    </button>

                                    <button
                                        className="btn btn-danger btn-sm"
                                        disabled={leave.status === "Rejected"}
                                        onClick={() => updateStatus(leave._id, "Rejected")}
                                    >
                                        Reject
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                {leaves.length === 0 && (
                    <p className="text-center text-muted">No leave requests found</p>
                )}
            </div>
        </div>
    );
}

export default LeaveList;
