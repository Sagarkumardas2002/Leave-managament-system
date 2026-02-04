import { useState } from "react";
import axios from "axios";

function ApplyLeave({ refresh }) {
    const [form, setForm] = useState({
        employeeName: "",
        leaveType: "",
        fromDate: "",
        toDate: "",
        reason: ""
    });

    const submitHandler = async (e) => {
        e.preventDefault();
        await axios.post("http://localhost:5000/api/leaves", form);
        refresh();
        setForm({
            employeeName: "",
            leaveType: "",
            fromDate: "",
            toDate: "",
            reason: ""
        });
    };

    return (
        <div className="card shadow-sm mb-4">
            <div className="card-body">
                <h5 className="card-title mb-3">Apply for Leave</h5>

                <form onSubmit={submitHandler} className="row g-3">

                    {/* Employee Name */}
                    <div className="col-md-6">
                        <input
                            className="form-control"
                            placeholder="Employee Name"
                            value={form.employeeName}
                            onChange={e => setForm({ ...form, employeeName: e.target.value })}
                            required
                        />
                    </div>

                    {/* Leave Type (Dropdown) */}
                    <div className="col-md-6">
                        <select
                            className="form-select"
                            value={form.leaveType}
                            onChange={e => setForm({ ...form, leaveType: e.target.value })}
                            required
                        >
                            <option value="">Select Leave Type</option>
                            <option value="Casual Leave">Casual Leave</option>
                            <option value="Sick Leave">Sick Leave</option>
                            <option value="Earned Leave">Earned Leave</option>
                            <option value="Paid Leave">Paid Leave</option>
                            <option value="Unpaid Leave">Unpaid Leave</option>
                            <option value="Comp Off">Comp Off</option>
                            <option value="Work From Home">Work From Home</option>
                        </select>
                    </div>


                    {/* From Date */}
                    <div className="col-md-6">
                        <label className="form-label">From Date</label>
                        <input
                            type="date"
                            className="form-control"
                            value={form.fromDate}
                            onChange={e => setForm({ ...form, fromDate: e.target.value })}
                            required
                        />
                    </div>

                    {/* To Date */}
                    <div className="col-md-6">
                        <label className="form-label">To Date</label>
                        <input
                            type="date"
                            className="form-control"
                            value={form.toDate}
                            onChange={e => setForm({ ...form, toDate: e.target.value })}
                            required
                        />
                    </div>

                    {/* Reason */}
                    <div className="col-12">
                        <textarea
                            className="form-control"
                            placeholder="Reason (optional)"
                            value={form.reason}
                            onChange={e => setForm({ ...form, reason: e.target.value })}
                            rows="3"
                        ></textarea>
                    </div>

                    {/* Submit Button */}
                    <div className="col-12 text-end">
                        <button className="btn btn-primary px-4">
                            Submit
                        </button>
                    </div>

                </form>
            </div>
        </div>
    );
}

export default ApplyLeave;
