import React, { useState, useEffect } from 'react';
import CardFilter from './CardFilter';
import './recentActivity.css';
import RecentActivityItem from './RecentActivityItem'; // Предполагается, что этот компонент существует

function RecentActivity() {
  const [filter, setFilter] = useState(''); // Инициализация состояния для фильтра
  const [items, setItems] = useState([]); // Инициализация состояния для элементов активности (пустой массив)

  const handleFilterChange = (filter) => {
    setFilter(filter);
    // Здесь можно добавить логику для фильтрации данных по filter
  };

  const fetchData = () => {
    fetch('http://localhost:4000/recentActivity')
      .then(res => res.json())
      .then(data => {
        setItems(data); // Устанавливаем данные активности
      })
      .catch(e => console.log(e.message)); // Обрабатываем ошибку
  };

  useEffect(() => {
    fetchData(); // Вызываем fetchData при монтировании компонента
  }, []);

  return (
    <div className="card">
      <CardFilter filterChange={handleFilterChange} />
      <div className="card-body">
        <h5 className="card-title">
          Recent Activity <span>| {filter}</span>
        </h5>
        <div className="activity">
          {items && items.length > 0 ? (
            items.map(item => (
              <RecentActivityItem key={item._id} item={item} />
            ))
          ) : (
            <p>No recent activity available</p> // Отображение сообщения, если данных нет
          )}
        </div>
      </div>
    </div>
  );
}

export default RecentActivity;
