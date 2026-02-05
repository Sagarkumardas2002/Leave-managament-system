function EmployeePage({ leaves, loading }) {
    return (
        <div className="card shadow-sm">
            <div className="card-body">
                <h5 className="card-title mb-3">My Leave Requests</h5>

                <div className="table-responsive">
                    <table className="table table-bordered table-hover align-middle">
                        <thead>
                            <tr>
                                <th>Employee</th>
                                <th>Type</th>
                                <th>From</th>
                                <th>To</th>
                                <th>Status</th>
                            </tr>
                        </thead>

                        <tbody>
                            {loading ? (
                                [...Array(4)].map((_, i) => (
                                    <tr key={i}>
                                        <td><div className="skeleton-loader"></div></td>
                                        <td><div className="skeleton-loader"></div></td>
                                        <td><div className="skeleton-loader"></div></td>
                                        <td><div className="skeleton-loader"></div></td>
                                        <td><div className="skeleton-loader"></div></td>
                                    </tr>
                                ))
                            ) : (
                                leaves.map((leave) => (
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
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default EmployeePage;
