import React from 'react';

export default function QuickReplies({ questions, onSelect, disabled }) {
  return (
    <div style={{
      display: 'flex',
      flexWrap: 'wrap',
      gap: 8,
      padding: '8px 16px',
      background: '#F1F1F2'
    }}>
      {questions.map((q, i) => (
        <button
          key={i}
          onClick={() => onSelect(q)}
          disabled={disabled}
          style={{
            padding: '6px 12px',
            borderRadius: 12,
            border: '1px solid #ccc',
            background: disabled ? '#eee' : '#F1F1F2',
            cursor: disabled ? 'default' : 'pointer',
            fontSize: 13
          }}
        >
          {q}
        </button>
      ))}
    </div>
  );
}
