/* ----------------------- Table -------------------------- */ 

import React, { useState } from "react";
import "./callList.css"; // Подключение файла стилей

const CallList = () => {
  // Пример данных
  const [calls, setCalls] = useState([
    { id: 1, type: "incoming", date: "04.07.2022 16:41", phone: "+7 900 000-00-00", duration: "00:00", record: true, contact: "Михайлова Анна Петровна", deal: "Дизайн интерьера квартиры" },
    { id: 2, type: "outgoing", date: "04.07.2022 16:37", phone: "+7 900 000-00-00", duration: "01:52", record: true, contact: "Simplex", deal: "Дизайн-проект для студии" },
  ]);

  const [filter, setFilter] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 10;

  const [newCall, setNewCall] = useState({
    type: "incoming",
    date: "",
    phone: "",
    duration: "",
    record: false,
    contact: "",
    deal: "",
  });

  const [isAdding, setIsAdding] = useState(false);

  // Фильтрация по номеру телефона или имени
  const filteredCalls = calls.filter(
    (call) =>
      call.phone.includes(filter) || call.contact.toLowerCase().includes(filter.toLowerCase())
  );

  // Разделение данных для пагинации
  const startIndex = (currentPage - 1) * pageSize;
  const currentCalls = filteredCalls.slice(startIndex, startIndex + pageSize);

  const totalPages = Math.ceil(filteredCalls.length / pageSize);

  const addCall = () => {
    setCalls([...calls, { id: calls.length + 1, ...newCall }]);
    setIsAdding(false);
    setNewCall({
      type: "incoming",
      date: "",
      phone: "",
      duration: "",
      record: false,
      contact: "",
      deal: "",
    });
  };

  return (
    <div className="call-container">
      <h2 className="call-heading">Список звонков</h2>
      <div className="filters">
        <input
          type="text"
          placeholder="Поиск"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="filter-input"
        />
        <button className="filter-button">Несохранённый фильтр</button>
        <button className="add-button" onClick={() => setIsAdding(true)}>
          Добавить
        </button>
      </div>
      <table className="call-table">
        <thead>
          <tr>
            <th>Тип</th>
            <th>Начало</th>
            <th>Номер телефона</th>
            <th>Длительность</th>
            <th>Запись</th>
            <th>Контрагент</th>
            <th>Сделка</th>
          </tr>
        </thead>
        <tbody>
          {currentCalls.map((call) => (
            <tr key={call.id}>
              <td>{call.type === "incoming" ? "📞 Входящий" : "📤 Исходящий"}</td>
              <td>{call.date}</td>
              <td>{call.phone}</td>
              <td>{call.duration}</td>
              <td>{call.record ? "▶️" : "-"}</td>
              <td>{call.contact}</td>
              <td>{call.deal}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="pagination">
        <button
          disabled={currentPage === 1}
          onClick={() => setCurrentPage((prev) => prev - 1)}
        >
          Назад
        </button>
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            className={currentPage === i + 1 ? "active" : ""}
            onClick={() => setCurrentPage(i + 1)}
          >
            {i + 1}
          </button>
        ))}
        <button
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage((prev) => prev + 1)}
        >
          Вперед
        </button>
      </div>

      {isAdding && (
        <div className="add-form">
          <h3>Добавить звонок</h3>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              addCall();
            }}
          >
            <select
              value={newCall.type}
              onChange={(e) => setNewCall({ ...newCall, type: e.target.value })}
            >
              <option value="incoming">Входящий</option>
              <option value="outgoing">Исходящий</option>
            </select>
            <input
              type="text"
              placeholder="Дата и время"
              value={newCall.date}
              onChange={(e) => setNewCall({ ...newCall, date: e.target.value })}
              required
            />
            <input
              type="text"
              placeholder="Номер телефона"
              value={newCall.phone}
              onChange={(e) => setNewCall({ ...newCall, phone: e.target.value })}
              required
            />
            <input
              type="text"
              placeholder="Длительность"
              value={newCall.duration}
              onChange={(e) => setNewCall({ ...newCall, duration: e.target.value })}
            />
            <input
              type="text"
              placeholder="Контрагент"
              value={newCall.contact}
              onChange={(e) => setNewCall({ ...newCall, contact: e.target.value })}
            />
            <input
              type="text"
              placeholder="Сделка"
              value={newCall.deal}
              onChange={(e) => setNewCall({ ...newCall, deal: e.target.value })}
            />
            <button type="submit" className="add-form-button">
              Сохранить
            </button>
            <button
              type="button"
              onClick={() => setIsAdding(false)}
              className="cancel-button"
            >
              Отмена
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default CallList;