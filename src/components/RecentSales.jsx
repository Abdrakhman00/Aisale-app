import React, { useState, useEffect } from 'react';
import './recentSales.css';
import CardFilter from './CardFilter';
import RecentSalesTable from './RecentSalesTable';

function RecentSales() {
  const [items, setItems] = useState([]);
  const [filter, setFilter] = useState('Today');

  // Исправлено: Параметр функции - newFilter
  const handleFilterChange = (newFilter) => {
    setFilter(newFilter); // Обновление фильтра
  };

  const fetchData = () => {
    fetch('http://localhost:4000/recentsales')
      .then((res) => res.json()) // Конвертируем ответ в JSON
      .then((data) => {
        setItems(data); // Устанавливаем данные в состояние
      })
      .catch((e) => console.log(e.message)); // Логируем ошибку, если есть
  };

  useEffect(() => {
    fetchData(); // Вызываем fetchData при монтировании компонента
  }, []); // Пустой массив зависимостей, чтобы fetchData вызывался только один раз

  return (
    <div className="card recent-sales overflow-auto">
      <CardFilter filterChange={handleFilterChange} />
      <div className="card-body">
        <h5 className="card-title">
          Recent Sales <span>| {filter}</span>
        </h5>
        <RecentSalesTable items={items} />
      </div>
    </div>
  );
}

export default RecentSales;
