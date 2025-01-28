import React from 'react';

function RecentCallsTable({ items }) {
    const handleStatus = (status) => {
        switch (status) {
            case 'Completed':
                return 'success';
            case 'In Progress':
                return 'warning';
            case 'Escalated':
                return 'danger';
            default:
                return 'secondary';
        }
    };

    return (
        <table className="table table-borderless datatable">
            <thead className="table-light">
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Caller</th>
                    <th scope="col">Topic</th>
                    <th scope="col">Duration (minutes)</th>
                    <th scope="col">Status</th>
                    <th scope="col">Operator</th>
                </tr>
            </thead>
            <tbody>
                {items && items.length > 0 &&
                    items.map(item => (
                        <tr key={item._id}>
                            <th scope="row">{item.call_id}</th>
                            <td>{item.caller}</td>
                            <td>{item.topic}</td>
                            <td>{item.duration_minutes}</td>
                            <td>
                                <span className={`badge bg-${handleStatus(item.status)}`}>
                                    {item.status}
                                </span>
                            </td>
                            <td>{item.operator}</td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    );
}

export default RecentCallsTable;
