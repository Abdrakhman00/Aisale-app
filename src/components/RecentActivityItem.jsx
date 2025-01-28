import React from 'react';

function RecentActivityItem({ item }) {
  const highlightIndex = item.content.indexOf(item.highlight);

  return (
    <div className="activity-item d-flex">
      <div className="activite-label">{item.time}</div>
      {/* Динамическая вставка классов */}
      <i className={`bi bi-circle-fill activity-badge ${item.color} align-self-start`}></i>

      {/* Проверяем наличие highlight и его индекс в content */}
      {item.highlight && highlightIndex !== -1 ? (
        <div className="activity-content">
          {item.content.substring(0, highlightIndex)}
          <a href="#" className="fw-bold text-dark">
            {item.highlight}
          </a>
          {item.content.slice(highlightIndex + item.highlight.length)}
        </div>
      ) : (
        <div className="activity-content">{item.content}</div>
      )}
    </div>
  );
}

export default RecentActivityItem;
