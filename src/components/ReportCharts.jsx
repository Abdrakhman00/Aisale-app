import React, { useState } from 'react';
import Chart from 'react-apexcharts';

function ReportCharts() {
    const [data, setData] = useState({
        series: [
            {
                name: 'Total',
                data: [31, 40, 28, 51, 42, 82, 56],
            },
            {
                name: 'Answered',
                data: [11, 32, 45, 32, 34, 52, 41],
            },
            {
                name: 'Abandoned',
                data: [15, 11, 32, 18, 9, 24, 11],
            },
        ],
        options: {
            chart: {
                height: 350,
                type: 'area',
                toolbar: {
                    show: false,
                },
            },
            markers: {
                size: 4,
            },
            colors: ['#4154f1', '#2eca6a', '#ff771d'],
            fill: {
                type: 'gradient',
                gradient: {
                    shadeIntensity: 1,
                    opacityFrom: 0.3,
                    opacityTo: 0.4,
                    stops: [0, 90, 100],
                },
            },
            dataLabels: {
                enabled: false,
            },
            stroke: {
                curve: 'smooth',
                width: 2,
            },
            xaxis: {
                type: 'datetime',
                categories: [
                    '2018-09-19T00:00:00.000Z',
                    '2018-09-19T01:30:00.000Z',
                    '2018-09-19T02:30:00.000Z',
                    '2018-09-19T03:30:00.000Z',
                    '2018-09-19T04:30:00.000Z',
                    '2018-09-19T05:30:00.000Z',
                    '2018-09-19T06:30:00.000Z', // Исправлено время
                ],
            },
            tooltip: {
                // Настройки всплывающих подсказок можно добавить здесь
            },
            x: {
                // Если нужны дополнительные настройки по оси X, добавьте их здесь
            },
            format: 'dd/MM/yy HH:mm', // Убедитесь, что формат поддерживается
        },
    });

    return (
        <div>
            <Chart
                options={data.options}
                series={data.series}
                type={data.options.chart.type}
                height={data.options.chart.height}
            />
        </div>
    ); 
}

export default ReportCharts;
