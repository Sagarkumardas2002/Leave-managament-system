import api from "../api";

function AdminPage({ leaves, refresh }) {

    const updateStatus = async (id, status) => {
        await api.put(`/api/leaves/${id}`, { status });
        refresh();
    };

    return (
        <div className="card shadow-sm">
            <div className="card-body">
                <h5 className="card-title mb-3 text-center text-md-start">
                    Admin – Manage Leave Requests
                </h5>

                {/* Responsive wrapper */}
                <div className="table-responsive">
                    <table className="table table-bordered table-hover align-middle mb-0">
                        <thead className="table-light">
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
                                    <td>{leave.fromDate?.slice(0, 10)}</td>
                                    <td>{leave.toDate?.slice(0, 10)}</td>
                                    <td>
                                        <span
                                            className={`status-badge status-${leave.status.toLowerCase()}`}
                                        >
                                            {leave.status}
                                        </span>
                                    </td>
                                    <td style={{ minWidth: "140px" }}>
                                        <select
                                            className="form-select form-select-sm"
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
                </div>

                {leaves.length === 0 && (
                    <p className="text-muted text-center mt-3">
                        No leave requests found
                    </p>
                )}
            </div>
        </div>
    );
}

export default AdminPage;
