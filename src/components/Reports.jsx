import React, { useState } from 'react';
import CardFilter from './CardFilter';
import ReportCharts from './ReportCharts'; // Убедитесь, что вы импортировали ReportCharts

function Reports() {
    const [filter, setFilter] = useState('Today');
    const handleFilterChange = (filter) => {
        setFilter(filter);
    };

    return (
        <div className="card">
            <CardFilter filterChange={handleFilterChange} />
            <div className="card-body">
                <h5 className="card-title">
                    Reports <span>/{filter}</span>
                </h5>
                <ReportCharts /> {/* Убедитесь, что этот компонент тоже импортирован */}
            </div>
        </div>
    );
}

export default Reports;
